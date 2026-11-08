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


// Tìm kiếm sách trực tuyến từ Open Library, Google Books và Internet Archive.
function initOnlineBookSearch() {
  const form = document.getElementById("onlineSearchForm");
  if (!form) return;
  const panel = form.closest(".online-search-panel");
  if (!isAdmin()) { if (panel) panel.remove(); return; }

  const input = document.getElementById("onlineKeyword");
  const results = document.getElementById("onlineBookResults");
  const message = document.getElementById("onlineSearchMessage");
  const button = document.getElementById("onlineSearchButton");
  const categories = ["Văn học","Kỹ năng sống","Tiểu thuyết","Công nghệ","Khoa học & khám phá","Nghệ thuật","Sức khỏe"];
  let foundBooks = [];

  const safeText = value => escapeHTML(value || "Chưa cập nhật");
  const cleanDescription = value => String(value || "").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim().slice(0,260);
  const json = async url => {
    const response = await fetch(url,{headers:{Accept:"application/json"},signal:AbortSignal.timeout(12000)});
    if (!response.ok) throw new Error("HTTP " + response.status);
    return response.json();
  };

  function renderResults(items) {
    foundBooks = items;
    if (!items.length) {
      results.innerHTML = '<div class="empty">Không tìm thấy sách phù hợp. Cậu thử tên sách hoặc ISBN khác nhé.</div>';
      return;
    }
    results.innerHTML = items.map((item,index) => {
      const info=item.volumeInfo||{};
      const authors=(info.authors||["Chưa cập nhật tác giả"]).join(", ");
      const cover=info.imageLinks?.thumbnail||"";
      const year=(info.publishedDate||"").slice(0,4);
      const description=cleanDescription(info.description)||"Chưa có mô tả.";
      return `<article class="online-book-card">
        <div class="online-cover-wrap">${cover ? `<img src="${escapeHTML(cover)}" alt="Bìa ${safeText(info.title)}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=&quot;online-no-cover&quot;>Chưa có ảnh bìa</div>'">` : '<div class="online-no-cover">Chưa có ảnh bìa</div>'}</div>
        <div class="online-book-info">
          <h3>${safeText(info.title)}</h3>
          <p><b>Tác giả:</b> ${safeText(authors)}</p>
          <p><b>Năm xuất bản:</b> ${safeText(year)}</p>
          <p><b>Nguồn:</b> ${safeText(item.sourceName)}</p>
          <p class="online-description">${safeText(description)}</p>
          <label class="online-category-label" for="onlineCategory${index}">Danh mục trong thư viện</label>
          <select id="onlineCategory${index}" class="online-category">${categories.map(c=>`<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join("")}</select>
          <button type="button" class="online-add-button" data-online-index="${index}">＋ Thêm vào thư viện</button>
        </div>
      </article>`;
    }).join("");
  }

  form.addEventListener("submit", async event => {
    event.preventDefault();
    const keyword=input.value.trim();
    if(!keyword)return;
    button.disabled=true; button.textContent="Đang tìm...";
    message.textContent="Đang tìm trên Open Library, Google Books và Internet Archive...";
    results.innerHTML="";
    const isbnSearch=/^\d{10,13}$/.test(keyword);
    const tasks=[
      (async()=>{
        const query=isbnSearch?`isbn=${encodeURIComponent(keyword)}`:`q=${encodeURIComponent(keyword)}`;
        const data=await json(`https://openlibrary.org/search.json?${query}&fields=key,title,author_name,first_publish_year,publisher,first_sentence,isbn,cover_i&limit=15`);
        return (data.docs||[]).filter(d=>d.title).map(d=>({
          id:"openlibrary:"+ (d.key||d.title),sourceName:"Open Library",
          volumeInfo:{title:d.title,authors:d.author_name||[],publishedDate:d.first_publish_year?String(d.first_publish_year):"",description:Array.isArray(d.first_sentence)?d.first_sentence.join(" "):(d.first_sentence||""),publisher:(d.publisher||[])[0]||"",imageLinks:d.cover_i?{thumbnail:`https://covers.openlibrary.org/b/id/${d.cover_i}-M.jpg?default=false`}:{},industryIdentifiers:(d.isbn||[]).slice(0,8).map(x=>({type:x.length===13?"ISBN_13":"ISBN_10",identifier:x}))}
        }));
      })(),
      (async()=>{
        const q=isbnSearch?`isbn:${keyword}`:keyword;
        const data=await json(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&maxResults=15`);
        return (data.items||[]).map(item=>{
          const v=item.volumeInfo||{},links=v.imageLinks||{};
          return {id:"googlebooks:"+item.id,sourceName:"Google Books",volumeInfo:{title:v.title||"",authors:v.authors||[],publishedDate:v.publishedDate||"",description:v.description||"",publisher:v.publisher||"",imageLinks:{thumbnail:(links.thumbnail||links.smallThumbnail||"").replace(/^http:/i,"https:").replace(/&edge=curl/g,"")},industryIdentifiers:v.industryIdentifiers||[]}};
        }).filter(x=>x.volumeInfo.title);
      })(),
      (async()=>{
        const q=encodeURIComponent(isbnSearch?`isbn:${keyword}`:keyword);
        const data=await json(`https://archive.org/advancedsearch.php?q=${q}&fl[]=identifier,title,creator,year,description&rows=15&page=1&output=json`);
        return (data.response?.docs||[]).filter(d=>d.title&&d.identifier).map(d=>({
          id:"archive:"+d.identifier,sourceName:"Internet Archive",
          volumeInfo:{title:d.title,authors:Array.isArray(d.creator)?d.creator:(d.creator?[d.creator]:[]),publishedDate:String(d.year||""),description:typeof d.description==="string"?d.description:"",imageLinks:{thumbnail:`https://archive.org/services/img/${encodeURIComponent(d.identifier)}`},industryIdentifiers:[],archiveIdentifier:d.identifier}
        }));
      })()
    ];
    const settled=await Promise.allSettled(tasks);
    let items=[];
    settled.forEach(result=>{if(result.status==="fulfilled")items.push(...result.value);});
    // Gộp trùng theo tên sách + tác giả, ưu tiên kết quả có ảnh bìa và metadata đầy đủ.
    const unique=new Map();
    for(const item of items){
      const v=item.volumeInfo||{};
      const key=normalizeBookText(v.title)+"|"+normalizeBookText((v.authors||[]).join(" "));
      if(!key||key==="|")continue;
      const old=unique.get(key);
      const quality=(v.imageLinks?.thumbnail?4:0)+(v.description?2:0)+(v.publishedDate?1:0)+(v.publisher?1:0);
      const oldQuality=old?((old.volumeInfo.imageLinks?.thumbnail?4:0)+(old.volumeInfo.description?2:0)+(old.volumeInfo.publishedDate?1:0)+(old.volumeInfo.publisher?1:0)):-1;
      if(!old||quality>oldQuality)unique.set(key,item);
    }
    items=[...unique.values()].slice(0,30);
    const successful=settled.filter(x=>x.status==="fulfilled").length;
    const sources=[...new Set(items.map(x=>x.sourceName))];
    message.textContent=items.length
      ? `Tìm thấy ${items.length} kết quả. Nguồn: ${sources.join(", ")}.`
      : successful ? "Không tìm thấy kết quả ở các nguồn trực tuyến. Cậu thử từ khóa khác nhé." : "Các nguồn tìm kiếm tạm thời không phản hồi. Cậu thử lại sau nhé.";
    renderResults(items);
    button.disabled=false; button.textContent="Tìm sách trực tuyến";
  });

  results.addEventListener("click",event=>{
    const addButton=event.target.closest("[data-online-index]");
    if(!addButton)return;
    if(!isAdmin()){message.textContent="Chỉ quản trị viên mới có quyền thêm sách.";return;}
    const item=foundBooks[Number(addButton.dataset.onlineIndex)];
    if(!item)return;
    const info=item.volumeInfo||{};
    const title=(info.title||"").trim();
    const author=(info.authors||["Chưa cập nhật tác giả"]).join(", ");
    if(!title)return;
    const data=getData();
    const identifiers=info.industryIdentifiers||[];
    const isbn=identifiers.find(x=>x.type==="ISBN_13")?.identifier||identifiers.find(x=>x.type==="ISBN_10")?.identifier||"";
    const duplicate=data.books.some(book=>
      (book.externalBookId&&book.externalBookId===item.id)||
      (isbn&&book.isbn===isbn)||
      (normalizeBookText(book.title)===normalizeBookText(title)&&normalizeBookText(book.author)===normalizeBookText(author))
    );
    if(duplicate){message.textContent=`“${title}” đã có trong thư viện rồi.`;return;}
    const categorySelect=document.getElementById(`onlineCategory${Number(addButton.dataset.onlineIndex)}`);
    const book={
      id:nextId(data.books),title,author,category:categorySelect?categorySelect.value:"Văn học",
      year:Number((info.publishedDate||"").slice(0,4))||"",
      quantity:0,description:cleanDescription(info.description),
      coverUrl:info.imageLinks?.thumbnail||"",externalBookId:item.id,
      metadataSource:item.sourceName,isbn
    };
    data.books.push(book); saveData(data);
    message.textContent=`Đã thêm “${title}” vào thư viện. Số lượng đang là 0; cậu có thể cập nhật khi có sách thật.`;
    addButton.disabled=true; addButton.textContent="✓ Đã thêm";
  });
}
