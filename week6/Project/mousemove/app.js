var box = document.querySelector(".red-box")
box.addEventListener("mousemove", function(e){
    box.innerText = `X: ${e.x} - Y: ${e.y}`;
});