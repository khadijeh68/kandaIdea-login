const register = document.getElementById("register-btn");
register.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/profile.html";
})

const account = document.getElementById("account-btn");
account.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/index.html";
})

let users = [];

register.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const familyname = document.getElementById("familyname").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;

  const user = {
    name:name,
    familyname: familyname,
    username: username,
    password: password,
    email: email,
    tel: tel,
  };
  users.push(user);

  localStorage.setItem("user", JSON.stringify(users));

  if (localStorage.getItem("user")) {
    let checkUser = JSON.parse(localStorage.getItem("user") || []);
    console.log(checkUser)
  }
});

// function register() {
//     let info = `
//     <div>
//     <span>نام : </span>
//     <span id="name">${name}</span>
//   </div>
//   <div>
//     <span>نام خانوادگی: </span>
//     <span id="familyName">${familyname}</span>
//   </div>
//   <div>
//     <span>نام کاربری : </span>
//     <span id="username">${username}</span>
//   </div>
//   <div>
//     <span>کلمه عبور : </span>
//     <span id="password">${password}</span>
//   </div>
//   <div>
//     <span>ایمیل : </span>
//     <span id="email">${password}</span>
//   </div>
//   <div>
//     <span>شماره تماس : </span>
//     <span id="tel">${tel}</span>
//   </div>`
// }