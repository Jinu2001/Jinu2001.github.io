function loading(){
    alert("Hello! welcome to my profile");
}
function validateForm() {
    let x = document.forms["userform"]["textarea"].value;
   if (x.length == 0) {
       alert("this field must be filled out");
       return false;
    }
}