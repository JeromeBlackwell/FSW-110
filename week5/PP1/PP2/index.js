const form = document.getElementById( "AvatarAirlines PreCheck" );
const submit = document.getElementById( "submit" );
const query = document.querySelector;

function formAlert() {
    const firstName = form.elements["input-firstName"].value;
    const lastName = form.elements["input-lastName"].value;
    const age = form.elements["Age"].value;
    const gender = form.elements["gender"].value;
    const location = form.elements["Destination"].value;
    const diet = [];
    if (form.elements['none'].checked) {
        diet.push(document.getElementById('none').value);
    }
    if (form.elements['gluten free'].checked) {
        diet.push(document.getElementById('gluten free').value);
    }
    if (form.elements['kosher'].checked) {
        diet.push(document.getElementById('kosher').value);
    }
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById('vegan').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);
