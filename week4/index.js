var h1 = document.createElement("h1")
h1.innterHTML = "";
document.body.append(h1);
h1.style.fontsize = "40px";
h1.style.fontweight = "lighter";
h1.style.fontfamily = "sans-serif";
h1.style.color = "cornflowerblue";
h1.style.textalign = "center";
h1.style.padding = "100px";
h1.style.border = "8px solid black";
h1.style.height = "300px;";
h1.style.width = "250px";

h1.addEventListener("mouseover", function(){
    h1.style.backgroundColor = "blue";
});

h1.addEventListener("mousedown", function(){
    h1.style.backgroundColor = "red";
});

h1.addEventListener("mouseup", function(){
    h1.style.backgroundColor = "yellow";
});

h1.addEventListener("dblclick", function(){
    h1.style.backgroundColor = "green";
});

h1.addEventListener("scroll", function(){
    h1.style.backgroundColor = "orange";
});

window.addEventListener("keydown", event => {
    if (event.key == "r"){
    h1.style.backgroundColor = "red";
    }
});

window.addEventListener("keyup", event => {
    if (event.key == "r") {
        h1.style.backgroundColor = "";
    }
});