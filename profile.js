const backToLogin_btn = document.getElementById("backToLogin");

backToLogin_btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/index.html";
})

  function login() {
    document.getElementById('name').innerText = localStorage.getItem('name');
    document.getElementById('familyname').innerText = localStorage.getItem('familyname');
    document.getElementById('username').innerText = localStorage.getItem('username');
    document.getElementById('password').innerText = localStorage.getItem('password');
    document.getElementById('email').innerText = localStorage.getItem('email');
    document.getElementById('tel').innerText = localStorage.getItem('tel');
  }