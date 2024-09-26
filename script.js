function toggleMenu() {
  var menuIcon = document.querySelector(".menu-icon");
  var navList = document.getElementById("nav-list");
  menuIcon.classList.toggle("change");
  navList.classList.toggle("show");
}
function sentemail(){

  Email.send({
    Host: "smtp.gmail.com",
    Username: "username",
    Password: "password",
    To: "tijoroyputhenpurayil19@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
