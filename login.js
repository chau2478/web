// Chức năng đăng nhập và đăng ký tài khoản.

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

document.addEventListener("DOMContentLoaded", () => {
  initLogin();
});
