// Chức năng mượn sách và trả sách.

function borrowBook(id) {
  const user = getUser();
  if (!user) {
    alert("Cậu hãy đăng nhập trước khi mượn sách nhé!");
    location.href = "login.html";
    return;
  }
  const data = getData(),
    book = data.books.find((b) => b.id === id);
  if (!book || book.quantity <= 0) {
    alert("Sách hiện đã hết.");
    return;
  }
  if (
    data.loans.some(
      (l) => l.userId === user.id && l.bookId === id && l.status === "borrowed",
    )
  ) {
    alert("Cậu đang mượn cuốn sách này rồi.");
    return;
  }
  book.quantity--;
  data.loans.push({
    id: nextId(data.loans),
    bookId: id,
    userId: user.id,
    borrowDate: currentDate(),
    dueDate: dateAfter(14),
    returnDate: "",
    status: "borrowed",
  });
  saveData(data);
  alert("Mượn sách thành công! Hạn trả sau 14 ngày.");
  location.reload();
}

function returnBook(id) {
  const user = getUser(),
    data = getData(),
    loan = data.loans.find((l) => l.id === id);
  if (!loan || loan.status !== "borrowed") return;
  if (!isAdmin() && loan.userId !== user?.id) {
    alert("Cậu không có quyền trả phiếu mượn này.");
    return;
  }
  if (!confirm("Xác nhận trả cuốn sách này?")) return;
  loan.status = "returned";
  loan.returnDate = currentDate();
  const book = data.books.find((b) => b.id === loan.bookId);
  if (book) book.quantity++;
  saveData(data);
  location.reload();
}

function initLoans() {
  const list = document.getElementById("loanList");
  if (!list) return;
  const user = getUser(),
    msg = document.getElementById("loanMessage");
  if (!user || !isAdmin()) {
    if (msg) { msg.classList.remove("hidden"); msg.textContent = user ? "Trang quản lý mượn / trả chỉ dành cho quản trị viên." : "Vui lòng đăng nhập bằng tài khoản quản trị viên để xem trang này."; }
    list.innerHTML = ""; return;
  }
  if (msg) msg.classList.add("hidden");
  function render() {
    const d = getData(),
      loans = d.loans;
    if (!loans.length) {
      list.innerHTML = '<div class="empty">Chưa có lịch sử mượn sách.</div>';
      return;
    }
    list.innerHTML = `<table><thead><tr><th>Tên sách</th><th>Tài khoản</th><th>Ngày mượn</th><th>Hạn trả</th><th>Ngày trả</th><th>Trạng thái</th><th>Thao tác</th></tr></thead><tbody>${loans
      .map((l) => {
        const b = d.books.find((x) => x.id === l.bookId),
          owner = d.users.find((x) => x.id === l.userId);
        return `<tr><td><a href="book-detail.html?id=${l.bookId}">${escapeHTML(b?.title || "Sách đã xóa")}</a></td><td>${escapeHTML(owner?.name || "Không rõ")}</td><td>${escapeHTML(l.borrowDate)}</td><td>${escapeHTML(l.dueDate)}</td><td>${escapeHTML(l.returnDate || "—")}</td><td>${l.status === "returned" ? "Đã trả" : "Đang mượn"}</td><td>${l.status === "borrowed" ? `<button onclick="returnBook(${l.id})">Trả sách</button>` : "—"}</td></tr>`;
      })
      .join("")}</tbody></table>`;
  }
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  initLoans();
});
