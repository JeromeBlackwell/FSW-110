// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
document.getElementById("name").setAttribute("name", "user_name")
document.getElementById("name").setAttribute("id", "first-name")
8:51
var form = document.getElementById("submit-me");
form.addEventListener("submit", function(e){
    e.preventDefault()
})