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

    name.style.border= null;
    email.style.border = null;
    message.style.border = null;

    let result = true;
    if(!name.value) {
        name.style.border = "2px solid red";
        result = false;
    }
    if(!email.value) {
        email.style.border = "2px solid red";
        result = false;
    }
    if(!message.value) {
        message.style.border = "2px solid red";
        result = false;
    }
    return result;
}
let popup = document.getElementById("popup");
let button = document.getElementById("modal-form-btn");

button.onclick = function(event) {
    event.preventDefault();
    fetch('example.com', {
        method: 'POST',
    }).then(function(response){
    }).catch(function(error){
    });
    if (validate()) {
        popup.style.display = "block";
    }
}
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}