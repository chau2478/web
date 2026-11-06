document.addEventListener("DOMContentLoaded", function () {
  const user = getUser();

  const adminArea = document.getElementById("loanAdmin");

  const message = document.getElementById("loanMessage");

  const form = document.getElementById("loanForm");

  const list = document.getElementById("loanList");

  if (!user) {
    list.innerHTML = "";
    return;
  }

  message.classList.add("hidden");

  // Ngày hiện tại
  function today() {
    return new Date().toISOString().slice(0, 10);
  }

  // Ngày hết hạn sau 14 ngày
  function dueDate() {
    const date = new Date();

    date.setDate(date.getDate() + 14);

    return date.toISOString().slice(0, 10);
  }

  // Hiển thị phiếu mượn
  function renderLoans() {
    const data = getData();

    const loans = data.loans.filter(
      (loan) => isAdmin() || loan.readerId === user.id,
    );

    list.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Sách</th>
                        ${isAdmin() ? "<th>Độc giả</th>" : ""}
                        <th>Ngày mượn</th>
                        <th>Hạn trả</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>

                <tbody>
                    ${loans
                      .map((loan) => {
                        const book = data.books.find(
                          (item) => item.id === loan.bookId,
                        );

                        const reader = data.readers.find(
                          (item) => item.id === loan.readerId,
                        );

                        return `
                            <tr>
                                <td>${escapeHTML(book?.title || "Sách đã xóa")}</td>

                                ${
                                  isAdmin()
                                    ? `<td>${escapeHTML(reader?.name || "")}</td>`
                                    : ""
                                }

                                <td>${escapeHTML(loan.borrowDate)}</td>

                                <td>${escapeHTML(loan.dueDate)}</td>

                                <td>
                                    ${
                                      loan.status === "returned"
                                        ? "Đã trả"
                                        : "Đang mượn"
                                    }
                                </td>

                                <td>
                                    ${
                                      loan.status === "borrowed"
                                        ? `<button onclick="returnBook(${loan.id})">
                                            Trả sách
                                           </button>`
                                        : ""
                                    }
                                </td>
                            </tr>
                        `;
                      })
                      .join("")}
                </tbody>
            </table>
        `;

    if (loans.length === 0) {
      list.innerHTML = "<p>Chưa có phiếu mượn nào.</p>";
    }
  }

  // Chỉ quản trị viên được tạo phiếu mượn thay cho độc giả
  if (isAdmin()) {
    adminArea.classList.remove("hidden");

    function loadOptions() {
      const data = getData();

      document.getElementById("loanReader").innerHTML =
        '<option value="">Chọn độc giả</option>' +
        data.readers
          .filter((reader) => reader.role === "reader")
          .map(
            (reader) =>
              `<option value="${reader.id}">
                            ${escapeHTML(reader.name)}
                        </option>`,
          )
          .join("");

      document.getElementById("loanBook").innerHTML =
        '<option value="">Chọn sách</option>' +
        data.books
          .filter((book) => book.quantity > 0)
          .map(
            (book) =>
              `<option value="${book.id}">
                            ${escapeHTML(book.title)}
                            (Còn ${book.quantity})
                        </option>`,
          )
          .join("");
    }

    loadOptions();

    form.onsubmit = function (event) {
      event.preventDefault();

      const data = getData();

      const readerId = Number(document.getElementById("loanReader").value);

      const bookId = Number(document.getElementById("loanBook").value);

      const book = data.books.find((item) => item.id === bookId);

      if (!book || book.quantity <= 0) {
        alert("Sách đã hết.");
        return;
      }

      book.quantity--;

      data.loans.push({
        id: nextId(data.loans),
        readerId: readerId,
        bookId: bookId,
        borrowDate: today(),
        dueDate: dueDate(),
        returnDate: "",
        status: "borrowed",
      });

      saveData(data);

      loadOptions();

      renderLoans();

      alert("Tạo phiếu mượn thành công!");
    };
  }

  // Xác nhận trả sách
  window.returnBook = function (id) {
    const data = getData();

    const loan = data.loans.find((item) => item.id === id);

    if (!loan || loan.status !== "borrowed") {
      return;
    }

    if (!isAdmin() && loan.readerId !== user.id) {
      alert("Bạn không có quyền trả phiếu mượn này.");
      return;
    }

    loan.status = "returned";

    loan.returnDate = today();

    const book = data.books.find((item) => item.id === loan.bookId);

    if (book) {
      book.quantity++;
    }

    saveData(data);

    renderLoans();

    alert("Đã xác nhận trả sách!");
  };

  renderLoans();
});
