// Chức năng tra cứu, thêm, sửa và xóa sách.

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

document.addEventListener("DOMContentLoaded", () => {
  initBooks();
  initOnlineBookSearch();
});


// Tìm kiếm sách trực tuyến bằng Google Books API và cho phép thêm vào thư viện.
function initOnlineBookSearch() {
  const form = document.getElementById("onlineSearchForm");
  if (!form) return;
  const panel = form.closest(".online-search-panel");
  if (!isAdmin()) { if (panel) panel.remove(); return; }

  const input = document.getElementById("onlineKeyword");
  const results = document.getElementById("onlineBookResults");
  const message = document.getElementById("onlineSearchMessage");
  const button = document.getElementById("onlineSearchButton");
  const categories = [
    "Văn học",
    "Kỹ năng sống",
    "Tiểu thuyết",
    "Công nghệ",
    "Khoa học & khám phá",
    "Nghệ thuật",
    "Sức khỏe",
  ];
  let foundBooks = [];

  const getCover = (info) => {
    const links = info.imageLinks || {};
    return (links.extraLarge || links.large || links.medium || links.thumbnail || links.smallThumbnail || "")
      .replace(/^http:/i, "https:")
      .replace(/&edge=curl/g, "");
  };

  const safeText = (value) => escapeHTML(value || "Chưa cập nhật");

  function renderResults(items) {
    foundBooks = items;
    if (!items.length) {
      results.innerHTML = '<div class="empty">Không tìm thấy sách phù hợp. Cậu thử từ khóa khác nhé.</div>';
      return;
    }

    results.innerHTML = items.map((item, index) => {
      const info = item.volumeInfo || {};
      const authors = (info.authors || ["Chưa cập nhật tác giả"]).join(", ");
      const cover = getCover(info);
      const year = (info.publishedDate || "").slice(0, 4);
      const description = (info.description || "Chưa có mô tả.").replace(/<[^>]*>/g, " ").slice(0, 260);
      return `<article class="online-book-card">
        <div class="online-cover-wrap">${cover ? `<img src="${escapeHTML(cover)}" alt="Bìa ${safeText(info.title)}" loading="lazy">` : '<div class="online-no-cover">Chưa có ảnh bìa</div>'}</div>
        <div class="online-book-info">
          <h3>${safeText(info.title)}</h3>
          <p><b>Tác giả:</b> ${safeText(authors)}</p>
          <p><b>Năm xuất bản:</b> ${safeText(year || "Chưa cập nhật")}</p>
          <p class="online-description">${safeText(description)}</p>
          <label class="online-category-label" for="onlineCategory${index}">Danh mục trong thư viện</label>
          <select id="onlineCategory${index}" class="online-category">${categories.map((c) => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join("")}</select>
          ${isAdmin() ? `<button type="button" class="online-add-button" data-online-index="${index}">＋ Thêm vào thư viện</button>` : `<p class="online-admin-note">Chỉ quản trị viên mới có quyền thêm sách vào thư viện.</p>`}
        </div>
      </article>`;
    }).join("");
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const keyword = input.value.trim();
    if (!keyword) return;
    button.disabled = true;
    button.textContent = "Đang tìm...";
    message.textContent = "Đang tìm sách từ Open Library...";
    results.innerHTML = "";

    try {
      const query = /^\d{10,13}$/.test(keyword) ? `isbn:${keyword}` : keyword;
      let items = [];
      let source = "Open Library";
      const isbnSearch = /^\d{10,13}$/.test(keyword);
      // Nguồn chính: Open Library
      try {
        const openQuery = isbnSearch ? `isbn=${encodeURIComponent(keyword)}` : `q=${encodeURIComponent(keyword)}`;
        const response = await fetch(`https://openlibrary.org/search.json?${openQuery}&limit=20`, {signal: AbortSignal.timeout(12000), headers:{Accept:"application/json"}});
        if (!response.ok) throw new Error(`Open Library ${response.status}`);
        const data = await response.json();
        items = (data.docs || []).filter(doc => doc.title).map(doc => ({
          id: `openlibrary:${doc.key || doc.title}`,
          volumeInfo: {
            title: doc.title, authors: doc.author_name || [],
            publishedDate: doc.first_publish_year ? String(doc.first_publish_year) : "",
            description: doc.first_sentence || "",
            publisher: (doc.publisher || [])[0] || "",
            imageLinks: doc.cover_i ? {thumbnail:`https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`} : {},
            industryIdentifiers: (doc.isbn || []).slice(0,5).map(isbn => ({type:isbn.length===13?"ISBN_13":"ISBN_10",identifier:isbn})),
            openLibraryKey: doc.key || ""
          }
        }));
      } catch (openError) {
        // Dự phòng: Internet Archive
        source = "Internet Archive";
        const q = encodeURIComponent(isbnSearch ? `isbn:${keyword}` : keyword);
        const response = await fetch(`https://archive.org/advancedsearch.php?q=${q}&fl[]=identifier,title,creator,year,description&rows=20&page=1&output=json`, {signal:AbortSignal.timeout(12000)});
        if (!response.ok) throw new Error(`Open Library và Internet Archive đều không phản hồi (${openError.message}; ${response.status})`);
        const data = await response.json();
        items = (data.response?.docs || []).filter(doc=>doc.title).map(doc=>({
          id:`archive:${doc.identifier}`,
          volumeInfo:{title:doc.title,authors:Array.isArray(doc.creator)?doc.creator:(doc.creator?[doc.creator]:[]),publishedDate:String(doc.year||""),description:typeof doc.description==="string"?doc.description:"",imageLinks:{thumbnail:`https://archive.org/services/img/${encodeURIComponent(doc.identifier)}`},industryIdentifiers:[],archiveIdentifier:doc.identifier}
        }));
      }

      message.textContent = items.length
        ? `Tìm thấy ${items.length} kết quả từ ${source}.`
        : "Không tìm thấy sách phù hợp ở Open Library và Internet Archive. Cậu thử tên sách hoặc ISBN khác nhé.";
      renderResults(items);
    } catch (error) {
      const detail = error.name === "AbortError"
        ? "Kết nối quá thời gian chờ."
        : (error.message || "Không rõ nguyên nhân.");
      message.textContent = `Chưa kết nối được Open Library hoặc Internet Archive (${detail}). Cậu kiểm tra Internet hoặc thử lại nhé.`;
      results.innerHTML = '<div class="empty">Chưa tải được kết quả trực tuyến. Nếu cậu đang mở file trực tiếp bằng máy tính, hãy thử chạy website qua GitHub Pages hoặc máy chủ cục bộ.</div>';
    } finally {
      button.disabled = false;
      button.textContent = "Tìm sách trực tuyến";
    }
  });

  results.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-online-index]");
    if (!addButton) return;
    if (!isAdmin()) { message.textContent = "Chỉ quản trị viên mới có quyền thêm sách."; return; }
    const index = Number(addButton.dataset.onlineIndex);
    const item = foundBooks[index];
    if (!item) return;

    const info = item.volumeInfo || {};
    const title = (info.title || "").trim();
    const author = (info.authors || ["Chưa cập nhật tác giả"]).join(", ");
    if (!title) return;

    const data = getData();
    const alreadyExists = data.books.some((book) =>
      (book.externalBookId && book.externalBookId === item.id) ||
      (book.isbn && (info.industryIdentifiers || []).some(x => x.identifier === book.isbn)) ||
      (normalizeBookText(book.title) === normalizeBookText(title) &&
       normalizeBookText(book.author) === normalizeBookText(author))
    );
    if (alreadyExists) {
      message.textContent = `“${title}” đã có trong thư viện rồi.`;
      return;
    }

    const categorySelect = document.getElementById(`onlineCategory${index}`);
    const coverUrl = getCover(info);
    const book = {
      id: nextId(data.books),
      title,
      author,
      category: categorySelect ? categorySelect.value : "Văn học",
      year: Number((info.publishedDate || "").slice(0, 4)) || "",
      // Đây mới là bản ghi tra cứu trực tuyến, chưa xác nhận có sách vật lý trong kho.
      // Quản trị viên cập nhật số lượng thực tế sau khi thư viện có bản sách.
      quantity: 0,
      description: (info.description || "").replace(/<[^>]*>/g, " ").trim(),
      coverUrl,
      externalBookId: item.id,
      metadataSource: item.id.startsWith("archive:") ? "Internet Archive" : "Open Library",
      isbn: (info.industryIdentifiers || []).find((id) => id.type === "ISBN_13")?.identifier ||
            (info.industryIdentifiers || []).find((id) => id.type === "ISBN_10")?.identifier || "",
    };
    data.books.push(book);
    saveData(data);
    message.textContent = `Đã thêm “${title}” vào danh mục thư viện. Số lượng đang là 0; quản trị viên có thể cập nhật khi thư viện có sách thật.`;
    addButton.disabled = true;
    addButton.textContent = "✓ Đã thêm";
  });
}
