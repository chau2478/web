document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  const registerForm = document.getElementById("registerForm");

  // Đăng nhập
  loginForm.onsubmit = function (event) {
    event.preventDefault();

    const data = getData();

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value;

    const user = data.readers.find(
      (item) => item.username === username && item.password === password,
    );

    if (!user) {
      document.getElementById("loginMessage").textContent =
        "Tên đăng nhập hoặc mật khẩu không đúng.";

      return;
    }

    sessionStorage.setItem(
      "libraryUser",
      JSON.stringify({
        id: user.id,
        name: user.name,
        username: user.username,
        role: user.role,
      }),
    );

    alert("Đăng nhập thành công!");

    location.href = "index.html";
  };

  // Đăng ký
  registerForm.onsubmit = function (event) {
    event.preventDefault();

    const data = getData();

    const name = document.getElementById("registerName").value.trim();

    const username = document.getElementById("registerUsername").value.trim();

    const password = document.getElementById("registerPassword").value;

    const exists = data.readers.some(
      (user) => user.username.toLowerCase() === username.toLowerCase(),
    );

    if (exists) {
      document.getElementById("registerMessage").textContent =
        "Tên đăng nhập đã tồn tại.";

      return;
    }

    const user = {
      id: nextId(data.readers),
      name: name,
      username: username,
      password: password,
      role: "reader",
    };

    data.readers.push(user);

    saveData(data);

    sessionStorage.setItem(
      "libraryUser",
      JSON.stringify({
        id: user.id,
        name: user.name,
        username: user.username,
        role: user.role,
      }),
    );

    alert("Đăng ký thành công!");

    location.href = "index.html";
  };
});
