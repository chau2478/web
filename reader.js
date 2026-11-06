document.addEventListener("DOMContentLoaded", function () {
  const adminArea = document.getElementById("readerAdmin");

  const message = document.getElementById("readerMessage");

  const form = document.getElementById("readerForm");

  const list = document.getElementById("readerList");

  const search = document.getElementById("readerSearch");

  if (!isAdmin()) {
    return;
  }

  adminArea.classList.remove("hidden");

  message.classList.add("hidden");

  // Hiển thị danh sách độc giả
  function renderReaders() {
    const data = getData();

    const keyword = search.value.trim().toLowerCase();

    const readers = data.readers.filter(
      (reader) =>
        reader.role === "reader" &&
        (reader.name.toLowerCase().includes(keyword) ||
          (reader.email || "").toLowerCase().includes(keyword) ||
          (reader.phone || "").includes(keyword)),
    );

    list.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Họ tên</th>
                        <th>Tên đăng nhập</th>
                        <th>Email</th>
                        <th>Điện thoại</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>

                <tbody>
                    ${readers
                      .map(
                        (reader) => `
                        <tr>
                            <td>${escapeHTML(reader.name)}</td>
                            <td>${escapeHTML(reader.username)}</td>
                            <td>${escapeHTML(reader.email || "")}</td>
                            <td>${escapeHTML(reader.phone || "")}</td>

                            <td>
                                <button class="danger"
                                    onclick="deleteReader(${reader.id})">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    `,
                      )
                      .join("")}
                </tbody>
            </table>
        `;
  }

  // Thêm độc giả
  form.onsubmit = function (event) {
    event.preventDefault();

    const data = getData();

    data.readers.push({
      id: nextId(data.readers),
      name: document.getElementById("readerName").value.trim(),
      username: "reader" + Date.now(),
      password: "",
      role: "reader",
      email: document.getElementById("readerEmail").value.trim(),
      phone: document.getElementById("readerPhone").value.trim(),
    });

    saveData(data);

    form.reset();

    renderReaders();

    alert("Đã thêm độc giả!");
  };

  // Xóa độc giả
  window.deleteReader = function (id) {
    if (!confirm("Bạn có chắc muốn xóa độc giả này?")) {
      return;
    }

    const data = getData();

    const hasUnreturnedBook = data.loans.some(
      (loan) => loan.readerId === id && loan.status === "borrowed",
    );

    if (hasUnreturnedBook) {
      alert("Độc giả còn sách chưa trả, không thể xóa.");
      return;
    }

    data.readers = data.readers.filter((reader) => reader.id !== id);

    saveData(data);

    renderReaders();
  };

  search.addEventListener("input", renderReaders);

  renderReaders();
});
