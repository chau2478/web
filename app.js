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
// Không phụ thuộc ảnh bìa lưu trong repository: dùng placeholder SVG nhúng trực tiếp.
function fallbackCoverForBook(book) {
  const title = escapeHTML(book?.title || "Chưa có ảnh bìa");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="600" viewBox="0 0 420 600"><rect width="420" height="600" rx="24" fill="#ffe6f0"/><rect x="34" y="34" width="352" height="532" rx="18" fill="#fff8fb" stroke="#e9a9c5" stroke-width="5"/><text x="210" y="230" text-anchor="middle" font-size="92">📚</text><text x="210" y="315" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="#a92566">THƯ VIỆN</text><foreignObject x="65" y="350" width="290" height="120"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Arial,sans-serif;font-size:20px;text-align:center;color:#80566b;overflow-wrap:anywhere;">${title}</div></foreignObject></svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}
function coverForBook(book) {
  return book.coverUrl || fallbackCoverForBook(book);
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
// Tra cứu lần lượt Open Library, Google Books và Internet Archive.
// Lưu cache để hạn chế số lần gọi API; không phụ thuộc ảnh nằm trong repository.
const bookMetadataJobs = new Map();
async function findOnlineBookMetadata(title, author) {
  const cacheKey = "bookMetadata:" + normalizeBookText(title + " " + author);
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (!parsed?.notFound && parsed.coverUrl) return parsed;
      localStorage.removeItem(cacheKey);
    } catch (_) { localStorage.removeItem(cacheKey); }
  }
  if (bookMetadataJobs.has(cacheKey)) return bookMetadataJobs.get(cacheKey);
  const job = (async () => {
    const targetTitle = normalizeBookText(title);
    const targetAuthor = normalizeBookText(author);
    const score = (candidateTitle, candidateAuthors) => {
      const t = normalizeBookText(candidateTitle);
      const a = normalizeBookText((candidateAuthors || []).join(" "));
      if (!t) return 0;
      let value = t === targetTitle ? 0.72 : (t.includes(targetTitle) || targetTitle.includes(t) ? 0.48 : 0);
      if (targetAuthor && a) {
        if (a.includes(targetAuthor) || targetAuthor.includes(a)) value += 0.28;
        else if (targetAuthor.split(" ").some(w => w.length > 2 && a.includes(w))) value += 0.08;
      }
      return value;
    };
    const getJson = async (url) => {
      const response = await fetch(url, {headers:{Accept:"application/json"}, signal:AbortSignal.timeout(10000)});
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    };
    let match = null;
    // 1. Open Library
    try {
      const data = await getJson(`https://openlibrary.org/search.json?q=${encodeURIComponent(title + " " + author)}&fields=key,title,author_name,first_publish_year,publisher,first_sentence,number_of_pages_median,isbn,cover_i&limit=15`);
      const docs = (data.docs || []).map(doc => ({
        source:"Open Library", externalId:doc.key || "",
        title:doc.title, authors:doc.author_name || [], year:doc.first_publish_year || "",
        publisher:(doc.publisher || [])[0] || "",
        description:Array.isArray(doc.first_sentence) ? doc.first_sentence.join(" ") : (doc.first_sentence || ""),
        pageCount:doc.number_of_pages_median || "",
        coverUrl:doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg?default=false` : "",
        isbn:doc.isbn?.[0] || ""
      })).map(x => ({...x, score:score(x.title,x.authors)})).sort((a,b)=>b.score-a.score);
      match = docs.find(x => x.score >= 0.62) || null;
    } catch (_) {}
    // 2. Google Books (fallback, API có thể giới hạn lượt truy cập)
    if (!match) {
      try {
        const data = await getJson(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent("intitle:" + title + " inauthor:" + author)}&maxResults=10`);
        const docs = (data.items || []).map(item => {
          const info = item.volumeInfo || {};
          const ids = info.industryIdentifiers || [];
          const links = info.imageLinks || {};
          return {
            source:"Google Books", externalId:item.id || "", title:info.title || "",
            authors:info.authors || [], year:(info.publishedDate || "").slice(0,4),
            publisher:info.publisher || "", description:info.description || "",
            pageCount:info.pageCount || "",
            coverUrl:(links.extraLarge || links.large || links.medium || links.thumbnail || links.smallThumbnail || "").replace(/^http:/i,"https:").replace(/&edge=curl/g,""),
            isbn:ids.find(x=>x.type==="ISBN_13")?.identifier || ids.find(x=>x.type==="ISBN_10")?.identifier || ""
          };
        }).map(x=>({...x,score:score(x.title,x.authors)})).sort((a,b)=>b.score-a.score);
        match = docs.find(x=>x.score>=0.62) || null;
      } catch (_) {}
    }
    // 3. Internet Archive
    if (!match) {
      try {
        const q = `title:"${title.replace(/["']/g," ")}" AND creator:"${author.replace(/["']/g," ")}"`;
        const data = await getJson(`https://archive.org/advancedsearch.php?q=${encodeURIComponent(q)}&fl[]=identifier,title,creator,year,description&rows=12&output=json`);
        const docs = (data.response?.docs || []).map(doc => ({
          source:"Internet Archive", externalId:doc.identifier || "", title:doc.title || "",
          authors:Array.isArray(doc.creator) ? doc.creator : (doc.creator ? [doc.creator] : []),
          year:String(doc.year || ""), publisher:"", description:typeof doc.description==="string" ? doc.description : "",
          pageCount:"", coverUrl:doc.identifier ? `https://archive.org/services/img/${encodeURIComponent(doc.identifier)}` : "", isbn:""
        })).map(x=>({...x,score:score(x.title,x.authors)})).sort((a,b)=>b.score-a.score);
        match = docs.find(x=>x.score>=0.62) || null;
      } catch (_) {}
    }
    if (!match) {
      localStorage.setItem(cacheKey, JSON.stringify({notFound:true, checkedAt:Date.now()}));
      return null;
    }
    const metadata = {
      source:match.source, externalId:match.externalId || "", title:match.title || title,
      author:(match.authors || []).join(", ") || author, publisher:match.publisher || "",
      year:String(match.year || "").slice(0,4),
      description:String(match.description || "").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim(),
      coverUrl:match.coverUrl || "", isbn:match.isbn || "", pageCount:match.pageCount || ""
    };
    localStorage.setItem(cacheKey, JSON.stringify(metadata));
    return metadata;
  })();
  bookMetadataJobs.set(cacheKey, job);
  try { return await job; } finally { bookMetadataJobs.delete(cacheKey); }
}

async function loadRealBookCovers(root = document) {
  const imgs = [...root.querySelectorAll("img[data-book-title]")];
  for (const img of imgs) {
    if (img.dataset.coverLoaded === "1") continue;
    img.dataset.coverLoaded = "1";
    const bookId = Number(img.dataset.bookId || 0);
    const title = img.dataset.bookTitle || "";
    const author = img.dataset.bookAuthor || "";
    const fallback = fallbackCoverForBook({title});
    const current = getData().books.find(b => b.id === bookId);

    // Tải thử một URL; nếu URL cũ đã bị xóa/hỏng thì trả về false để tìm nguồn khác.
    const tryImage = url => new Promise(resolve => {
      if (!url) return resolve(false);
      const probe = new Image();
      probe.onload = () => { img.src = url; resolve(true); };
      probe.onerror = () => resolve(false);
      probe.src = url;
    });

    img.onerror = () => {
      // Không để ảnh hỏng lặp vô hạn; placeholder là SVG nhúng, không cần file trong repo.
      img.onerror = null;
      img.src = fallback;
    };

    // Thử URL đã lưu trước, nhưng không giữ lại đường dẫn ảnh cục bộ cũ.
    let savedUrl = current?.coverUrl || "";
    if (savedUrl && !/^https?:\/\//i.test(savedUrl) && !savedUrl.startsWith("data:image/")) {
      savedUrl = "";
      if (current) {
        const data = getData();
        const book = data.books.find(b => b.id === bookId);
        if (book) { book.coverUrl = ""; saveData(data); }
      }
    }
    if (savedUrl && await tryImage(savedUrl)) continue;

    // URL đã lưu bị lỗi: xóa để lần sau không tiếp tục ưu tiên ảnh hỏng.
    if (current && current.coverUrl) {
      const data = getData();
      const book = data.books.find(b => b.id === bookId);
      if (book) { book.coverUrl = ""; saveData(data); }
    }

    try {
      const metadata = await findOnlineBookMetadata(title, author);
      if (!metadata) { img.src = fallback; continue; }

      const onlineCover = metadata.coverUrl || "";
      if (onlineCover && await tryImage(onlineCover)) {
        if (bookId) {
          const data = getData();
          const book = data.books.find(b => b.id === bookId);
          if (book) book.coverUrl = onlineCover;
          saveData(data);
        }
      } else {
        img.src = fallback;
      }

      if (bookId) {
        const data = getData();
        const book = data.books.find(b => b.id === bookId);
        if (book) {
          if (metadata.description) book.description = metadata.description;
          if (metadata.publisher) book.publisher = metadata.publisher;
          if (metadata.isbn) book.isbn = metadata.isbn;
          if (metadata.pageCount) book.pageCount = metadata.pageCount;
          if (metadata.year && !book.year) book.year = Number(metadata.year) || book.year;
          if (metadata.source) book.metadataSource = metadata.source;
          saveData(data);
          const descriptionEl = document.querySelector(`[data-book-description="${bookId}"]`);
          if (descriptionEl && metadata.description) descriptionEl.textContent = metadata.description;
          if (metadata.description) document.querySelectorAll(`[data-book-summary="${bookId}"]`).forEach(el => el.textContent = metadata.description.slice(0,150));
          const publisherEl = document.querySelector(`[data-book-publisher="${bookId}"]`);
          if (publisherEl && metadata.publisher) publisherEl.textContent = metadata.publisher;
          const isbnEl = document.querySelector(`[data-book-isbn="${bookId}"]`);
          if (isbnEl && metadata.isbn) isbnEl.textContent = metadata.isbn;
        }
      }
    } catch (_) {
      img.src = fallback;
    }
  }
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
  return `<article class="book-item"><a href="book-detail.html?id=${book.id}"><img class="book-cover" src="${coverForBook(book)}" data-book-id="${book.id}" data-book-title="${escapeHTML(book.title)}" data-book-author="${escapeHTML(book.author)}" data-cover-url="${escapeHTML(book.coverUrl || "")}" alt="Bìa thật của ${escapeHTML(book.title)}"></a><div class="book-info"><h3><a href="book-detail.html?id=${book.id}">${escapeHTML(book.title)}</a></h3><p><b>Tác giả:</b> ${escapeHTML(book.author)}</p><p><b>Thể loại:</b> ${escapeHTML(book.category)}</p><p><b>Năm:</b> ${escapeHTML(book.year || "Chưa cập nhật")}</p><p class="book-description" data-book-summary="${book.id}">${escapeHTML((book.description || "Đang cập nhật mô tả từ thư viện trực tuyến...").slice(0,150))}</p><p class="${book.quantity > 0 ? "status" : "status out"}">${book.quantity > 0 ? "Còn " + book.quantity + " cuốn" : "Đã hết sách"}</p><div class="actions"><a class="button" href="book-detail.html?id=${book.id}">Chi tiết</a>${user && book.quantity > 0 ? `<button onclick="borrowBook(${book.id})">Mượn</button>` : ""}${user ? `<button class="favorite-button ${saved ? "saved" : ""}" onclick="toggleFavorite(${book.id})">${saved ? "♥ Đã thích" : "♡ Yêu thích"}</button>` : ""}${isAdmin() ? `<button class="secondary" onclick="editBook(${book.id})">Sửa</button><button class="danger" onclick="deleteBook(${book.id})">Xóa</button>` : ""}</div></div></article>`;
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
  el.innerHTML = `<div class="detail-layout"><img class="detail-cover" src="${coverForBook(b)}" data-book-id="${b.id}" data-book-title="${escapeHTML(b.title)}" data-book-author="${escapeHTML(b.author)}" data-cover-url="${escapeHTML(b.coverUrl || "")}" alt="Bìa thật của ${escapeHTML(b.title)}"><section class="detail-card"><p class="info-kicker">THÔNG TIN SÁCH</p><h1>${escapeHTML(b.title)}</h1><div class="detail-meta"><p><b>Tác giả:</b> ${escapeHTML(b.author)}</p><p><b>Thể loại:</b> ${escapeHTML(b.category)}</p><p><b>Năm xuất bản:</b> ${escapeHTML(b.year || "Chưa cập nhật")}</p><p><b>Số lượng còn:</b> ${b.quantity}</p><p><b>Trạng thái:</b> ${b.quantity > 0 ? "Có thể mượn" : "Tạm hết sách"}</p></div><h3>Mô tả sách</h3><p data-book-description="${b.id}">${escapeHTML(b.description || "Đang cập nhật mô tả từ thư viện trực tuyến...")}</p><p><b>Nhà xuất bản:</b> <span data-book-publisher="${b.id}">${escapeHTML(b.publisher || "Đang cập nhật")}</span></p><p><b>ISBN:</b> <span data-book-isbn="${b.id}">${escapeHTML(b.isbn || "Đang cập nhật")}</span></p><div class="actions">${u && b.quantity > 0 ? `<button onclick="borrowBook(${b.id})">Mượn sách</button>` : ""}${u ? `<button class="favorite-button ${saved ? "saved" : ""}" onclick="toggleFavorite(${b.id})">${saved ? "♥ Bỏ yêu thích" : "♡ Thêm yêu thích"}</button>` : '<a class="button" href="login.html">Đăng nhập để mượn sách</a>'}<a class="button secondary" href="book.html">Quay lại danh sách</a></div></section></div>`;
  loadRealBookCovers(el);
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
  initDetail();
  initAccount();
});
