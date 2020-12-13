var h1 = document.createElement("h1")
h1.innerText = "FSW-100 Week 4 Pause and Practice: Adding Event Listeners";
document.body.append(h1);
h1.style.fontsize = "40px";
h1.style.fontweight = "lighter";
h1.style.fontfamily = "sans-serif";
h1.style.color = "cornflowerblue";

var h2 = document.createElement("div")
h2.innterHTML = "Welcome";
document.body.append(h2);
h2.style.padding = "100px";
h2.style.border = "8px solid black";
h2.style.height = "300px";
h2.style.width = "250px";

h2.addEventListener("mouseover", function(){
    h2.style.backgroundColor = "blue";
});

h2.addEventListener("mousedown", function(){
    h2.style.backgroundColor = "red";
});

h2.addEventListener("mouseup", function(){
    h2.style.backgroundColor = "yellow";
});

h2.addEventListener("dblclick", function(){

    h2.style.backgroundColor = "green";
});

document.addEventListener("scroll", function(){
console.log("Hello")  
    h2.style.backgroundColor = "orange";
});


window.addEventListener("keydown", event => {
    if (event.key == "r"){
    h2.style.backgroundColor = "red";
    }
});

window.addEventListener("keyup", event => {
    if (event.key == "r") {
        h2.style.backgroundColor = "";
    }
});