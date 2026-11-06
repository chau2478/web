// ================== DU LIEU THU VIEN ==================
const defaultData = {
  books: [
    {
      id: 1,
      title: "Dế Mèn phiêu lưu ký",
      author: "Tô Hoài",
      category: "Văn học",
      year: 1941,
      quantity: 5,
      description:
        "Tác phẩm thiếu nhi kinh điển kể về hành trình trưởng thành, khám phá thế giới và bài học về tình bạn của chú Dế Mèn.",
    },
    {
      id: 2,
      title: "Tôi thấy hoa vàng trên cỏ xanh",
      author: "Nguyễn Nhật Ánh",
      category: "Văn học",
      year: 2010,
      quantity: 4,
      description:
        "Câu chuyện tuổi thơ trong trẻo, tình cảm gia đình và những rung động đầu đời ở miền quê Việt Nam.",
    },
    {
      id: 3,
      title: "Lão Hạc",
      author: "Nam Cao",
      category: "Văn học",
      year: 1943,
      quantity: 4,
      description:
        "Truyện ngắn giàu giá trị nhân đạo về số phận người nông dân nghèo trước Cách mạng.",
    },
    {
      id: 4,
      title: "Vợ nhặt",
      author: "Kim Lân",
      category: "Văn học",
      year: 1962,
      quantity: 3,
      description:
        "Tác phẩm tái hiện nạn đói và khát vọng sống, tình người trong hoàn cảnh khắc nghiệt.",
    },
    {
      id: 5,
      title: "Cho tôi xin một vé đi tuổi thơ",
      author: "Nguyễn Nhật Ánh",
      category: "Văn học",
      year: 2008,
      quantity: 5,
      description:
        "Hành trình trở về thế giới tuổi thơ với góc nhìn hóm hỉnh và đầy hoài niệm.",
    },
    {
      id: 6,
      title: "Đắc nhân tâm",
      author: "Dale Carnegie",
      category: "Kỹ năng sống",
      year: 1936,
      quantity: 3,
      description:
        "Những nguyên tắc giao tiếp, thấu hiểu và xây dựng mối quan hệ tích cực.",
    },
    {
      id: 7,
      title: "Tuổi trẻ đáng giá bao nhiêu",
      author: "Rosie Nguyễn",
      category: "Kỹ năng sống",
      year: 2016,
      quantity: 4,
      description:
        "Gợi ý cách học hỏi, trải nghiệm và đầu tư cho bản thân trong những năm tháng tuổi trẻ.",
    },
    {
      id: 8,
      title: "Đi tìm lẽ sống",
      author: "Viktor E. Frankl",
      category: "Kỹ năng sống",
      year: 1946,
      quantity: 3,
      description:
        "Suy ngẫm về ý nghĩa cuộc sống và sức mạnh tinh thần trong nghịch cảnh.",
    },
    {
      id: 24,
      title: "Tư duy nhanh và chậm",
      author: "Daniel Kahneman",
      category: "Kỹ năng sống",
      year: 2011,
      quantity: 3,
      description:
        "Khám phá hai hệ thống tư duy ảnh hưởng đến cách con người phán đoán và ra quyết định.",
    },
    {
      id: 25,
      title: "7 thói quen hiệu quả",
      author: "Stephen R. Covey",
      category: "Kỹ năng sống",
      year: 1989,
      quantity: 4,
      description:
        "Bảy thói quen nền tảng giúp phát triển bản thân và làm việc hiệu quả.",
    },
    {
      id: 9,
      title: "Nhà giả kim",
      author: "Paulo Coelho",
      category: "Tiểu thuyết",
      year: 1988,
      quantity: 2,
      description:
        "Cuộc hành trình theo đuổi kho báu cũng là hành trình khám phá ước mơ và bản thân.",
    },
    {
      id: 10,
      title: "Bố già",
      author: "Mario Puzo",
      category: "Tiểu thuyết",
      year: 1969,
      quantity: 3,
      description:
        "Tiểu thuyết nổi tiếng về gia đình, quyền lực, lòng trung thành và những lựa chọn đạo đức.",
    },
    {
      id: 11,
      title: "Không gia đình",
      author: "Hector Malot",
      category: "Tiểu thuyết",
      year: 1878,
      quantity: 4,
      description:
        "Hành trình phiêu lưu và trưởng thành đầy cảm động của cậu bé Rémi.",
    },
    {
      id: 12,
      title: "Rừng Na Uy",
      author: "Haruki Murakami",
      category: "Tiểu thuyết",
      year: 1987,
      quantity: 2,
      description:
        "Tiểu thuyết về tuổi trẻ, tình yêu, mất mát và những biến động nội tâm.",
    },
    {
      id: 28,
      title: "Tội ác và hình phạt",
      author: "Fyodor Dostoevsky",
      category: "Tiểu thuyết",
      year: 1866,
      quantity: 2,
      description:
        "Tác phẩm kinh điển đào sâu tâm lý, tội lỗi và sự chuộc lỗi của con người.",
    },
    {
      id: 13,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Công nghệ",
      year: 2008,
      quantity: 3,
      description:
        "Các nguyên tắc viết mã nguồn rõ ràng, dễ đọc, dễ bảo trì và có chất lượng.",
    },
    {
      id: 15,
      title: "Lập trình Java cơ bản",
      author: "Nguyễn Văn Ba",
      category: "Công nghệ",
      year: 2022,
      quantity: 4,
      description:
        "Tài liệu nhập môn Java với cú pháp, kiểu dữ liệu, cấu trúc điều khiển và hướng đối tượng.",
    },
    {
      id: 16,
      title: "HTML và CSS: Thiết kế website",
      author: "Jon Duckett",
      category: "Công nghệ",
      year: 2011,
      quantity: 3,
      description:
        "Giới thiệu cách xây dựng cấu trúc và trình bày website bằng HTML, CSS.",
    },
    {
      id: 17,
      title: "JavaScript cho người mới bắt đầu",
      author: "Nguyễn Minh Tuấn",
      category: "Công nghệ",
      year: 2023,
      quantity: 4,
      description: "Nhập môn JavaScript và cách tạo tương tác cho trang web.",
    },
    {
      id: 27,
      title: "Python cơ bản",
      author: "Al Sweigart",
      category: "Công nghệ",
      year: 2015,
      quantity: 3,
      description:
        "Hướng dẫn lập trình Python qua các ví dụ và bài tập thực hành.",
    },
    {
      id: 18,
      title: "Lược sử thời gian",
      author: "Stephen Hawking",
      category: "Khoa học & khám phá",
      year: 1988,
      quantity: 3,
      description:
        "Cuốn sách phổ biến khoa học về vũ trụ, thời gian và những câu hỏi lớn của vật lý.",
    },
    {
      id: 19,
      title: "Vũ trụ trong vỏ hạt dẻ",
      author: "Stephen Hawking",
      category: "Khoa học & khám phá",
      year: 2001,
      quantity: 2,
      description:
        "Khám phá các ý tưởng hiện đại về không gian, thời gian và vũ trụ.",
    },
    {
      id: 20,
      title: "Gen: Lịch sử và tương lai của nhân loại",
      author: "Siddhartha Mukherjee",
      category: "Khoa học & khám phá",
      year: 2016,
      quantity: 2,
      description:
        "Lịch sử nghiên cứu gene và tác động của di truyền học đối với con người.",
    },
    {
      id: 21,
      title: "Sapiens: Lược sử loài người",
      author: "Yuval Noah Harari",
      category: "Khoa học & khám phá",
      year: 2011,
      quantity: 5,
      description:
        "Một góc nhìn tổng quan về hành trình tiến hóa và phát triển của loài người.",
    },
    {
      id: 22,
      title: "Thế giới phẳng",
      author: "Thomas L. Friedman",
      category: "Khoa học & khám phá",
      year: 2005,
      quantity: 3,
      description:
        "Phân tích toàn cầu hóa và những thay đổi của thế giới hiện đại.",
    },
    {
      id: 29,
      title: "Nghệ thuật tối giản",
      author: "Dominic Bradbury",
      category: "Nghệ thuật",
      year: 2018,
      quantity: 3,
      description:
        "Giới thiệu tinh thần tối giản trong thiết kế, kiến trúc và nghệ thuật.",
    },
    {
      id: 30,
      title: "Lịch sử mỹ thuật thế giới",
      author: "E. H. Gombrich",
      category: "Nghệ thuật",
      year: 1950,
      quantity: 3,
      description:
        "Hành trình khái quát lịch sử nghệ thuật qua các thời kỳ và nền văn hóa.",
    },
    {
      id: 31,
      title: "Tư duy thiết kế",
      author: "Tim Brown",
      category: "Nghệ thuật",
      year: 2009,
      quantity: 4,
      description:
        "Cách vận dụng tư duy thiết kế để sáng tạo và giải quyết vấn đề.",
    },
    {
      id: 32,
      title: "Hội họa căn bản",
      author: "Hazel Harrison",
      category: "Nghệ thuật",
      year: 2002,
      quantity: 2,
      description:
        "Những kiến thức nền tảng về màu sắc, bố cục và kỹ thuật hội họa.",
    },
    {
      id: 33,
      title: "Nhiếp ảnh dành cho người mới",
      author: "Henry Carroll",
      category: "Nghệ thuật",
      year: 2014,
      quantity: 3,
      description:
        "Các nguyên tắc cơ bản để quan sát, bố cục và tạo nên bức ảnh đẹp.",
    },
    {
      id: 34,
      title: "Ăn uống lành mạnh",
      author: "Michael Pollan",
      category: "Sức khỏe",
      year: 2008,
      quantity: 4,
      description:
        "Những gợi ý thực tế về lựa chọn thực phẩm và xây dựng thói quen ăn uống cân bằng.",
    },
    {
      id: 35,
      title: "Sức khỏe tinh thần",
      author: "Guy Winch",
      category: "Sức khỏe",
      year: 2013,
      quantity: 3,
      description:
        "Những góc nhìn về chăm sóc cảm xúc và sức khỏe tâm lý trong đời sống.",
    },
    {
      id: 36,
      title: "Why We Sleep – Vì sao chúng ta ngủ",
      author: "Matthew Walker",
      category: "Sức khỏe",
      year: 2017,
      quantity: 3,
      description:
        "Tìm hiểu vai trò của giấc ngủ đối với trí nhớ, cơ thể và sức khỏe.",
    },
    {
      id: 37,
      title: "Dinh dưỡng khoa học",
      author: "Walter Willett",
      category: "Sức khỏe",
      year: 2015,
      quantity: 3,
      description: "Các nguyên tắc dinh dưỡng dựa trên nghiên cứu khoa học.",
    },
    {
      id: 38,
      title: "Vận động và sức khỏe",
      author: "Kelly McGonigal",
      category: "Sức khỏe",
      year: 2019,
      quantity: 3,
      description:
        "Khám phá lợi ích thể chất và tinh thần của việc vận động thường xuyên.",
    },
  ],
  users: [
    {
      id: 1,
      name: "Quản trị viên",
      username: "admin",
      password: "admin123",
      role: "admin",
    },
    {
      id: 2,
      name: "Châu",
      username: "chau",
      password: "chau123",
      role: "user",
    },
  ],
  loans: [],
  favorites: [],
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}
function getData() {
  const raw = localStorage.getItem("libraryData");
  if (!raw) {
    localStorage.setItem("libraryData", JSON.stringify(defaultData));
    return clone(defaultData);
  }
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    data = clone(defaultData);
  }
  data.books = data.books || [];
  data.loans = data.loans || [];
  data.favorites = data.favorites || [];
  data.deletedBookIds = data.deletedBookIds || [];
  // Chuyen du lieu tai khoan cu (readers) sang users, giu nguyen lich su muon.
  if (!data.users) {
    data.users = (data.readers || []).map((u) => ({
      ...u,
      role: u.role === "admin" ? "admin" : "user",
    }));
  }
  if (!data.users.length) data.users = clone(defaultData.users);
  defaultData.books.forEach((sample) => {
    if (
      !data.deletedBookIds.includes(sample.id) &&
      !data.books.some((b) => b.id === sample.id || b.title === sample.title)
    )
      data.books.push(clone(sample));
  });
  data.loans.forEach((l) => {
    if (l.userId == null && l.readerId != null) l.userId = l.readerId;
  });
  delete data.readers;
  saveData(data);
  return data;
}
function saveData(data) {
  delete data.readers;
  localStorage.setItem("libraryData", JSON.stringify(data));
}
function getUser() {
  try {
    return JSON.parse(sessionStorage.getItem("libraryUser") || "null");
  } catch (e) {
    return null;
  }
}
function isAdmin() {
  const u = getUser();
  return !!u && u.role === "admin";
}
function nextId(items) {
  return items.length
    ? Math.max(...items.map((x) => Number(x.id) || 0)) + 1
    : 1;
}
function escapeHTML(v) {
  return String(v ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}
// Ảnh bìa được lấy trực tiếp từ Internet qua Google Books API, dò theo tên sách và tác giả.
// Không dùng các ảnh bìa minh họa/tải sẵn trong thư mục dự án.
function coverForBook(book) {
  return "images/cover-loading.svg";
}
function normalizeBookText(value) {
  return String(value || "")
    .toLocaleLowerCase("vi")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
async function loadRealBookCovers(root = document) {
  const imgs = [...root.querySelectorAll("img[data-book-title]")];
  await Promise.all(
    imgs.map(async (img) => {
      if (img.dataset.coverLoaded === "1") return;
      img.dataset.coverLoaded = "1";
      const title = img.dataset.bookTitle || "",
        author = img.dataset.bookAuthor || "";
      const key = "realBookCover:" + normalizeBookText(title + " " + author);
      const showPlaceholder = () => {
        img.onerror = null;
        img.src = "images/cover-loading.svg";
        img.classList.add("cover-not-found");
      };
      img.onerror = showPlaceholder;
      const cached = sessionStorage.getItem(key);
      if (cached) {
        if (cached !== "none") img.src = cached;
        else showPlaceholder();
        return;
      }
      try {
        const queries = [
          `intitle:${title} inauthor:${author}`,
          `\"${title}\" ${author}`,
        ];
        let items = [];
        for (const query of queries) {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=10&printType=books`,
          );
          if (!response.ok) continue;
          const result = await response.json();
          items = result.items || [];
          if (items.some((item) => item.volumeInfo?.imageLinks)) break;
        }
        const wantedTitle = normalizeBookText(title),
          wantedAuthor = normalizeBookText(author);
        const titleWords = wantedTitle
          .split(" ")
          .filter((word) => word.length > 2);
        const ranked = items
          .map((item) => {
            const info = item.volumeInfo || {},
              foundTitle = normalizeBookText(info.title || ""),
              foundAuthors = normalizeBookText((info.authors || []).join(" "));
            const titleScore = titleWords.length
              ? titleWords.filter((word) => foundTitle.includes(word)).length /
                titleWords.length
              : 0;
            const authorScore = wantedAuthor
              ? foundAuthors.includes(wantedAuthor) ||
                wantedAuthor.includes(foundAuthors)
                ? 1
                : 0
              : 0;
            return { info, score: titleScore * 0.8 + authorScore * 0.2 };
          })
          .sort((a, b) => b.score - a.score);
        const match = ranked.find(
          (item) => item.score >= 0.58 && item.info.imageLinks,
        );
        let image =
          match?.info.imageLinks?.large ||
          match?.info.imageLinks?.medium ||
          match?.info.imageLinks?.small ||
          match?.info.imageLinks?.thumbnail ||
          match?.info.imageLinks?.smallThumbnail ||
          "";
        if (image) {
          image = image.replace(/^http:/, "https:").replace("&edge=curl", "");
          sessionStorage.setItem(key, image);
          img.src = image;
        } else {
          sessionStorage.setItem(key, "none");
          showPlaceholder();
        }
      } catch (error) {
        showPlaceholder();
      }
    }),
  );
}
function updateCategoryCounts() {
  const books = getData().books;
  document.querySelectorAll("[data-category-count]").forEach((el) => {
    const category = el.dataset.categoryCount;
    el.textContent =
      books.filter((book) => book.category === category).length + " cuốn";
  });
  const total = document.getElementById("introBookCount");
  if (total) total.textContent = books.length;
}
function currentDate() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function dateAfter(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function bookCard(book, opts = {}) {
  const user = getUser(),
    data = getData(),
    saved =
      user &&
      data.favorites.some((f) => f.userId === user.id && f.bookId === book.id);
  return `<article class="book-item"><a href="book-detail.html?id=${book.id}"><img class="book-cover" src="${coverForBook(book)}" data-book-title="${escapeHTML(book.title)}" data-book-author="${escapeHTML(book.author)}" alt="Bìa thật của ${escapeHTML(book.title)}"></a><div class="book-info"><h3><a href="book-detail.html?id=${book.id}">${escapeHTML(book.title)}</a></h3><p><b>Tác giả:</b> ${escapeHTML(book.author)}</p><p><b>Thể loại:</b> ${escapeHTML(book.category)}</p><p><b>Năm:</b> ${escapeHTML(book.year || "Chưa cập nhật")}</p><p class="${book.quantity > 0 ? "status" : "status out"}">${book.quantity > 0 ? "Còn " + book.quantity + " cuốn" : "Đã hết sách"}</p><div class="actions"><a class="button" href="book-detail.html?id=${book.id}">Chi tiết</a>${user && book.quantity > 0 ? `<button onclick="borrowBook(${book.id})">Mượn</button>` : ""}${user ? `<button class="favorite-button ${saved ? "saved" : ""}" onclick="toggleFavorite(${book.id})">${saved ? "♥ Đã thích" : "♡ Yêu thích"}</button>` : ""}${isAdmin() ? `<button class="secondary" onclick="editBook(${book.id})">Sửa</button><button class="danger" onclick="deleteBook(${book.id})">Xóa</button>` : ""}</div></div></article>`;
}
function renderHeader() {
  const area = document.getElementById("accountArea");
  if (!area) return;
  const user = getUser();
  if (!user) {
    area.innerHTML = '<a href="login.html">Đăng nhập</a>';
    return;
  }
  area.innerHTML = `<button class="account-name" id="accountToggle">${escapeHTML(user.name)} ▾</button><div class="account-menu"><a href="account.html">Thông tin tài khoản</a><a href="loan.html">Sách đang mượn</a><a href="#" id="logoutButton">Đăng xuất</a></div>`;
  document.getElementById("accountToggle").onclick = () =>
    area.classList.toggle("open");
  document.getElementById("logoutButton").onclick = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("libraryUser");
    location.href = "index.html";
  };
  document.addEventListener("click", (e) => {
    if (!area.contains(e.target)) area.classList.remove("open");
  });
}
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
function toggleFavorite(id) {
  const user = getUser();
  if (!user) {
    alert("Vui lòng đăng nhập để lưu sách yêu thích.");
    location.href = "login.html";
    return;
  }
  const data = getData(),
    i = data.favorites.findIndex(
      (f) => f.userId === user.id && f.bookId === id,
    );
  if (i >= 0) data.favorites.splice(i, 1);
  else data.favorites.push({ userId: user.id, bookId: id });
  saveData(data);
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
function editBook(id) {
  if (!isAdmin()) return;
  const b = getData().books.find((x) => x.id === id);
  if (!b) return;
  ["bookId", "title", "author", "category", "year", "quantity"].forEach(
    (key, i) =>
      (document.getElementById(key).value = [
        b.id,
        b.title,
        b.author,
        b.category,
        b.year,
        b.quantity,
      ][i]),
  );
  document.getElementById("formTitle").textContent = "Chỉnh sửa thông tin sách";
  document.getElementById("adminArea").classList.remove("hidden");
  window.scrollTo({
    top: document.getElementById("adminArea").offsetTop - 130,
    behavior: "smooth",
  });
}
function deleteBook(id) {
  if (!isAdmin() || !confirm("Cậu chắc chắn muốn xóa sách này?")) return;
  const data = getData();
  if (data.loans.some((l) => l.bookId === id && l.status === "borrowed")) {
    alert("Không thể xóa sách đang được mượn.");
    return;
  }
  data.books = data.books.filter((b) => b.id !== id);
  data.deletedBookIds = [...new Set([...(data.deletedBookIds || []), id])];
  data.favorites = data.favorites.filter((f) => f.bookId !== id);
  saveData(data);
  location.reload();
}
function initHome() {
  const list = document.getElementById("bookList");
  if (!list) return;
  const d = getData();
  document.getElementById("totalBooks").textContent = d.books.length;
  document.getElementById("availableBooks").textContent = d.books.reduce(
    (s, b) => s + Number(b.quantity || 0),
    0,
  );
  document.getElementById("borrowedBooks").textContent = d.loans.filter(
    (l) => l.status === "borrowed",
  ).length;
  list.innerHTML = d.books
    .slice(0, 6)
    .map((b) => bookCard(b))
    .join("");
  loadRealBookCovers(list);
  updateCategoryCounts();
  const form = document.getElementById("searchForm");
  if (form)
    form.onsubmit = (e) => {
      e.preventDefault();
      location.href =
        "book.html?q=" +
        encodeURIComponent(document.getElementById("searchInput").value);
    };
}
function initBooks() {
  const results = document.getElementById("bookResults");
  if (!results) return;
  const key = document.getElementById("keyword"),
    params = new URLSearchParams(location.search),
    categoryFilter = document.getElementById("categoryFilter"),
    authorFilter = document.getElementById("authorFilter");
  key.value = params.get("q") || "";
  const admin = document.getElementById("adminArea"),
    add = document.getElementById("addButton"),
    form = document.getElementById("bookForm");
  if (isAdmin()) add.classList.remove("hidden");
  function fillFilters() {
    const books = getData().books;
    if (categoryFilter) {
      const selected = categoryFilter.value;
      const cats = [
        ...new Set(books.map((b) => b.category).filter(Boolean)),
      ].sort((a, b) => a.localeCompare(b, "vi"));
      categoryFilter.innerHTML =
        '<option value="">Tất cả danh mục</option>' +
        cats
          .map(
            (c) => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`,
          )
          .join("");
      categoryFilter.value = selected;
    }
    if (authorFilter) {
      const selected = authorFilter.value;
      const authors = [
        ...new Set(books.map((b) => b.author).filter(Boolean)),
      ].sort((a, b) => a.localeCompare(b, "vi"));
      authorFilter.innerHTML =
        '<option value="">Tất cả tác giả</option>' +
        authors
          .map(
            (a) => `<option value="${escapeHTML(a)}">${escapeHTML(a)}</option>`,
          )
          .join("");
      authorFilter.value = selected;
    }
  }
  function render() {
    const q = key.value.trim().toLocaleLowerCase("vi"),
      category = categoryFilter?.value || "",
      author = authorFilter?.value || "";
    const books = getData().books.filter(
      (b) =>
        (!q ||
          [b.title, b.author, b.category].some((v) =>
            String(v).toLocaleLowerCase("vi").includes(q),
          )) &&
        (!category || b.category === category) &&
        (!author || b.author === author),
    );
    results.innerHTML = books.length
      ? books.map((b) => bookCard(b)).join("")
      : '<div class="empty">Không tìm thấy sách phù hợp.</div>';
    loadRealBookCovers(results);
  }
  document.getElementById("searchForm").onsubmit = (e) => {
    e.preventDefault();
    render();
  };
  key.oninput = render;
  if (categoryFilter) categoryFilter.onchange = render;
  if (authorFilter) authorFilter.onchange = render;
  document.getElementById("clearButton").onclick = () => {
    key.value = "";
    if (categoryFilter) categoryFilter.value = "";
    if (authorFilter) authorFilter.value = "";
    render();
  };
  add.onclick = () => {
    form.reset();
    document.getElementById("bookId").value = "";
    document.getElementById("formTitle").textContent = "Thêm sách mới";
    admin.classList.remove("hidden");
  };
  document.getElementById("cancelButton").onclick = () =>
    admin.classList.add("hidden");
  form.onsubmit = (e) => {
    e.preventDefault();
    if (!isAdmin()) return;
    const d = getData(),
      id = Number(document.getElementById("bookId").value),
      b = {
        id: id || nextId(d.books),
        title: document.getElementById("title").value.trim(),
        author: document.getElementById("author").value.trim(),
        category: document.getElementById("category").value.trim(),
        year: Number(document.getElementById("year").value) || "",
        quantity: Number(document.getElementById("quantity").value),
        description: "",
      };
    if (id) d.books = d.books.map((x) => (x.id === id ? { ...x, ...b } : x));
    else d.books.push(b);
    saveData(d);
    fillFilters();
    admin.classList.add("hidden");
    render();
    alert("Đã lưu thông tin sách!");
  };
  fillFilters();
  render();
}
function initLogin() {
  const login = document.getElementById("loginForm"),
    register = document.getElementById("registerForm");
  if (!login) return;
  const loginPanel = document.getElementById("loginPanel"),
    registerPanel = document.getElementById("registerPanel");
  document.getElementById("showRegister").onclick = () => {
    loginPanel.classList.add("hidden");
    registerPanel.classList.remove("hidden");
  };
  document.getElementById("showLogin").onclick = () => {
    registerPanel.classList.add("hidden");
    loginPanel.classList.remove("hidden");
  };
  login.onsubmit = (e) => {
    e.preventDefault();
    const d = getData(),
      username = document.getElementById("username").value.trim().toLowerCase(),
      password = document.getElementById("password").value,
      u = d.users.find(
        (x) => x.username.toLowerCase() === username && x.password === password,
      );
    const msg = document.getElementById("loginMessage");
    if (!u) {
      msg.textContent = "Tên đăng nhập hoặc mật khẩu chưa chính xác.";
      return;
    }
    sessionStorage.setItem(
      "libraryUser",
      JSON.stringify({
        id: u.id,
        name: u.name,
        username: u.username,
        role: u.role,
      }),
    );
    location.href = "index.html";
  };
  register.onsubmit = (e) => {
    e.preventDefault();
    const d = getData(),
      name = document.getElementById("registerName").value.trim(),
      username = document.getElementById("registerUsername").value.trim(),
      password = document.getElementById("registerPassword").value;
    const msg = document.getElementById("registerMessage");
    if (
      d.users.some((u) => u.username.toLowerCase() === username.toLowerCase())
    ) {
      msg.textContent = "Tên đăng nhập đã được sử dụng.";
      return;
    }
    const u = { id: nextId(d.users), name, username, password, role: "user" };
    d.users.push(u);
    saveData(d);
    sessionStorage.setItem(
      "libraryUser",
      JSON.stringify({
        id: u.id,
        name: u.name,
        username: u.username,
        role: u.role,
      }),
    );
    location.href = "index.html";
  };
}
function initDetail() {
  const el = document.getElementById("bookDetail");
  if (!el) return;
  const id = Number(new URLSearchParams(location.search).get("id")),
    b = getData().books.find((x) => x.id === id);
  if (!b) {
    el.innerHTML = '<div class="empty">Không tìm thấy thông tin sách.</div>';
    return;
  }
  const u = getUser(),
    d = getData(),
    saved = u && d.favorites.some((f) => f.userId === u.id && f.bookId === id);
  el.innerHTML = `<div class="detail-layout"><img class="detail-cover" src="${coverForBook(b)}" data-book-title="${escapeHTML(b.title)}" data-book-author="${escapeHTML(b.author)}" alt="Bìa thật của ${escapeHTML(b.title)}"><section class="detail-card"><p class="info-kicker">THÔNG TIN SÁCH</p><h1>${escapeHTML(b.title)}</h1><div class="detail-meta"><p><b>Tác giả:</b> ${escapeHTML(b.author)}</p><p><b>Thể loại:</b> ${escapeHTML(b.category)}</p><p><b>Năm xuất bản:</b> ${escapeHTML(b.year || "Chưa cập nhật")}</p><p><b>Số lượng còn:</b> ${b.quantity}</p><p><b>Trạng thái:</b> ${b.quantity > 0 ? "Có thể mượn" : "Tạm hết sách"}</p></div><h3>Mô tả sách</h3><p>${escapeHTML(b.description || "Chưa có mô tả cho cuốn sách này.")}</p><div class="actions">${u && b.quantity > 0 ? `<button onclick="borrowBook(${b.id})">Mượn sách</button>` : ""}${u ? `<button class="favorite-button ${saved ? "saved" : ""}" onclick="toggleFavorite(${b.id})">${saved ? "♥ Bỏ yêu thích" : "♡ Thêm yêu thích"}</button>` : '<a class="button" href="login.html">Đăng nhập để mượn sách</a>'}<a class="button secondary" href="book.html">Quay lại danh sách</a></div></section></div>`;
  loadRealBookCovers(el);
}
function initLoans() {
  const list = document.getElementById("loanList");
  if (!list) return;
  const user = getUser(),
    msg = document.getElementById("loanMessage");
  if (!user) {
    msg.classList.remove("hidden");
    list.innerHTML = "";
    return;
  }
  msg.classList.add("hidden");
  function render() {
    const d = getData(),
      loans = d.loans.filter((l) => isAdmin() || l.userId === user.id);
    if (!loans.length) {
      list.innerHTML = '<div class="empty">Chưa có lịch sử mượn sách.</div>';
      return;
    }
    list.innerHTML = `<table><thead><tr><th>Tên sách</th>${isAdmin() ? "<th>Tài khoản</th>" : ""}<th>Ngày mượn</th><th>Hạn trả</th><th>Ngày trả</th><th>Trạng thái</th><th>Thao tác</th></tr></thead><tbody>${loans
      .map((l) => {
        const b = d.books.find((x) => x.id === l.bookId),
          owner = d.users.find((x) => x.id === l.userId);
        return `<tr><td><a href="book-detail.html?id=${l.bookId}">${escapeHTML(b?.title || "Sách đã xóa")}</a></td>${isAdmin() ? `<td>${escapeHTML(owner?.name || "")}</td>` : ""}<td>${escapeHTML(l.borrowDate)}</td><td>${escapeHTML(l.dueDate)}</td><td>${escapeHTML(l.returnDate || "—")}</td><td>${l.status === "returned" ? "Đã trả" : "Đang mượn"}</td><td>${l.status === "borrowed" ? `<button onclick="returnBook(${l.id})">Trả sách</button>` : "—"}</td></tr>`;
      })
      .join("")}</tbody></table>`;
  }
  render();
}
function initAccount() {
  const el = document.getElementById("accountContent");
  if (!el) return;
  const u = getUser();
  if (!u) {
    el.innerHTML =
      '<div class="empty">Cậu cần <a href="login.html">đăng nhập</a> để xem thông tin tài khoản.</div>';
    return;
  }
  const d = getData(),
    loans = d.loans.filter((l) => l.userId === u.id),
    favorites = d.favorites
      .filter((f) => f.userId === u.id)
      .map((f) => d.books.find((b) => b.id === f.bookId))
      .filter(Boolean),
    borrowed = loans.filter((l) => l.status === "borrowed");
  el.innerHTML = `<section class="info-card account-info"><h2>Thông tin cá nhân</h2><p><b>Họ và tên:</b> ${escapeHTML(u.name)}</p><p><b>Tên đăng nhập:</b> ${escapeHTML(u.username)}</p><p><b>Vai trò:</b> ${u.role === "admin" ? "Quản trị viên" : "Người dùng"}</p><p><b>Tổng lượt mượn:</b> ${loans.length}</p><p><b>Sách đang mượn:</b> ${borrowed.length}</p></section><div class="account-grid"><section><h2 class="section-title">📖 Sách đang mượn</h2>${
    borrowed.length
      ? `<div class="book-list">${borrowed
          .map((l) => {
            const b = d.books.find((x) => x.id === l.bookId);
            return b ? bookCard(b) : "";
          })
          .join("")}</div>`
      : '<div class="empty">Cậu chưa mượn cuốn sách nào.</div>'
  }</section><section><h2 class="section-title">💗 Sách yêu thích</h2>${favorites.length ? `<div class="book-list">${favorites.map((b) => bookCard(b)).join("")}</div>` : '<div class="empty">Chưa có sách yêu thích. Hãy chọn biểu tượng ♡ ở sách cậu thích nhé.</div>'}</section></div>`;
  loadRealBookCovers(el);
}
document.addEventListener("DOMContentLoaded", () => {
  getData();
  renderHeader();
  initHome();
  initBooks();
  initLogin();
  initDetail();
  initLoans();
  initAccount();
});
