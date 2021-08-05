// Login page validation
function authenticateUser() {
  userName = document.getElementById("userName");
  userPassword = document.getElementById("userPassword");
  errorMessageName = document.getElementById("errorMessageName");
  errorMessagePassword = document.getElementById("errorMessagePassword");
  errorMessagePassword.innerHTML = "";
  errorMessageName.innerHTML = "";
  errorFlag = false;

  if (userName.value == "") {
    errorMessageName.innerHTML += "Username cannot be blank";
    userName.classList.add("border-danger");
    errorFlag = true;
  }

  if (userPassword.value == "") {
    errorMessagePassword.innerHTML += "Password cannot be blank";
    userPassword.classList.add("border-danger");
    errorFlag = true;
  }


  if (errorFlag == false) {
    message = "Login Succesful! Welcome "
    alert(message + userName.value);
    location.href = "./index.html";
  }

}

// Article post validation
function authenticatePost() {
  articleTitle = document.getElementById("articleTitle");
  articleContent = document.getElementById("articleContent");
  errorFlag = false;
  errorMessageTitle = document.getElementById("postTitleErrorMessage");
  errorMessageContent = document.getElementById("postContentErrorMessage");
  errorMessageTitle.innerHTML = "";
  errorMessageContent.innerHTML = "";

  if (articleTitle.value == "") {
    errorMessageTitle.innerHTML += "Article title cannot be blank";
    articleTitle.classList.add("border-danger");
    errorFlag = true;
  }

  if (articleContent.value == "") {
    errorMessageContent.innerHTML += "Article content cannot be blank";
    articleContent.classList.add("border-danger");
    errorFlag = true;
  }


  if (errorFlag == false) {
    message = "Thanks for your post on ";
    alert(message + articleTitle.value);
    location.href = "./welcome.html#blog";
  }
}


// <!-- Transparent Nav Bar & Current Nav link background switch in Post Blog page-->
const navBar = document.getElementById('page-header');

let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navBar.classList.remove('bg-dark');
    navBar.classList.add('nav-transparent');

  }

  else {

    navBar.classList.add('bg-dark');
    scrolled = false;

  }
};
