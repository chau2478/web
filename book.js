document.addEventListener("DOMContentLoaded", function () {
  const keyword = document.getElementById("keyword");
  const results = document.getElementById("bookResults");

  const adminArea = document.getElementById("adminArea");
  const bookForm = document.getElementById("bookForm");

  const addButton = document.getElementById("addButton");
  const cancelButton = document.getElementById("cancelButton");

  // Hiển thị nút thêm sách nếu là quản trị viên
  if (isAdmin()) {
    addButton.classList.remove("hidden");
  }

  // Đọc từ khóa trên đường dẫn
  const params = new URLSearchParams(location.search);

  keyword.value = params.get("q") || "";

  // Hiển thị danh sách sách
  function renderBooks() {
    const data = getData();

    const search = keyword.value.trim().toLowerCase();

    const books = data.books.filter((book) => {
      return (
        book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search) ||
        book.category.toLowerCase().includes(search)
      );
    });

    if (books.length === 0) {
      results.innerHTML = "<p>Không tìm thấy sách phù hợp.</p>";
      return;
    }

    results.innerHTML = books
      .map(
        (book) => `
            <article class="book-item">
                <img class="book-cover" src="${coverForBook(book)}" alt="Bìa sách ${escapeHTML(book.title)}" loading="lazy" onerror="this.style.display='none'">
                <div class="book-info">
                <h3>${escapeHTML(book.title)}</h3>

                <p>Tác giả: ${escapeHTML(book.author)}</p>

                <p>Thể loại: ${escapeHTML(book.category)}</p>

                <p>Năm xuất bản: ${escapeHTML(book.year)}</p>

                <p class="${book.quantity > 0 ? "status" : "status out"}">
                    ${
                      book.quantity > 0
                        ? "Còn " + book.quantity + " cuốn"
                        : "Đã hết sách"
                    }
                </p>

                <div class="actions">

                    ${
                      getUser() && book.quantity > 0
                        ? `
                        <button onclick="borrowBook(${book.id})">
                            Mượn sách
                        </button>
                    `
                        : ""
                    }

                    ${
                      isAdmin()
                        ? `
                        <button class="secondary"
                            onclick="editBook(${book.id})">
                            Sửa
                        </button>

                        <button class="danger"
                            onclick="deleteBook(${book.id})">
                            Xóa
                        </button>
                    `
                        : ""
                    }

                </div>
                </div>
            </article>
        `,
      )
      .join("");
  }

  // Tìm kiếm sách
  document
    .getElementById("searchForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      renderBooks();
    });

  keyword.addEventListener("input", renderBooks);

  document.getElementById("clearButton").onclick = function () {
    keyword.value = "";
    renderBooks();
  };

  // Mở biểu mẫu thêm sách
  addButton.onclick = function () {
    bookForm.reset();

    document.getElementById("bookId").value = "";

    document.getElementById("formTitle").textContent = "Thêm sách";

    adminArea.classList.remove("hidden");
  };

  // Hủy biểu mẫu
  cancelButton.onclick = function () {
    adminArea.classList.add("hidden");
  };

  // Thêm hoặc cập nhật sách
  bookForm.onsubmit = function (event) {
    event.preventDefault();

    if (!isAdmin()) {
      alert("Bạn cần đăng nhập bằng tài khoản quản trị viên.");
      return;
    }

    const data = getData();

    const id = Number(document.getElementById("bookId").value);

    const book = {
      id: id || nextId(data.books),
      title: document.getElementById("title").value.trim(),
      author: document.getElementById("author").value.trim(),
      category: document.getElementById("category").value.trim(),
      year: Number(document.getElementById("year").value) || "",
      quantity: Number(document.getElementById("quantity").value),
    };

    if (id) {
      data.books = data.books.map((item) => (item.id === id ? book : item));
    } else {
      data.books.push(book);
    }

    saveData(data);

    adminArea.classList.add("hidden");

    renderBooks();

    alert("Đã lưu thông tin sách!");
  };

  // Sửa sách
  window.editBook = function (id) {
    if (!isAdmin()) {
      alert("Bạn không có quyền sửa sách.");
      return;
    }

    const book = getData().books.find((item) => item.id === id);

    if (!book) return;

    document.getElementById("bookId").value = book.id;
    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("category").value = book.category;
    document.getElementById("year").value = book.year;
    document.getElementById("quantity").value = book.quantity;

    document.getElementById("formTitle").textContent = "Sửa sách";

    adminArea.classList.remove("hidden");
  };

  // Xóa sách
  window.deleteBook = function (id) {
    if (!isAdmin()) {
      alert("Bạn không có quyền xóa sách.");
      return;
    }

    if (!confirm("Bạn có chắc muốn xóa sách này?")) return;

    const data = getData();

    if (
      data.loans.some(
        (loan) => loan.bookId === id && loan.status === "borrowed",
      )
    ) {
      alert("Không thể xóa sách đang được mượn.");
      return;
    }

    data.books = data.books.filter((book) => book.id !== id);

    saveData(data);

    renderBooks();
  };

  // Độc giả mượn sách
  window.borrowBook = function (id) {
    const user = getUser();

    if (!user) {
      alert("Vui lòng đăng nhập trước khi mượn sách.");
      location.href = "login.html";
      return;
    }

    const data = getData();

    const book = data.books.find((item) => item.id === id);

    if (!book || book.quantity <= 0) {
      alert("Sách hiện đã hết.");
      return;
    }

    const now = new Date();

    const dueDate = new Date();

    dueDate.setDate(dueDate.getDate() + 14);

    const formatDate = (date) => date.toISOString().slice(0, 10);

    book.quantity--;

    data.loans.push({
      id: nextId(data.loans),
      bookId: book.id,
      readerId: user.id,
      borrowDate: formatDate(now),
      dueDate: formatDate(dueDate),
      returnDate: "",
      status: "borrowed",
    });

    saveData(data);

    alert("Mượn sách thành công!");

    renderBooks();
  };

  renderBooks();
});
