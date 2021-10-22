let modal = document.getElementById("modal");
let btn = document.getElementById("footer__block-form-info-btn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function validate() {
    let name = document.getElementById("fullname");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if(!name.value) {
        name.style.border = "2px solid red";
        return false;
    }
    if(!email.value) {
        email.style.border = "2px solid red";
        return false;
    }
    if(!message.value) {
        message.style.border = "2px solid red";
        return false;
    }
    return true;
}