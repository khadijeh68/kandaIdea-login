const login = document.getElementById("login-btn");
const newAccount = document.getElementById("account-btn");

let users = [];

login.addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = {
    
    username: username,
    password: password,
  };
  users.push(user);

  localStorage.setItem("user", JSON.stringify(users));

  if (localStorage.getItem("user")) {
    let checkUser = JSON.parse(localStorage.getItem("user") || []);
  }
//   window.location.href = "/profile.html";

});

///
newAccount.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/secondPage.html";
});


