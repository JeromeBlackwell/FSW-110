const h2 = document.createElement ("h2")
h2.className = "border"
h2.textContent = "Changing Styles and Classes using JS";
h2.style.fontFamily = "sans-serif";
h2.style.fontWeight = "lighter";
h2.style.fontSize = "20px";
h2.style.color = "cornflowerblue";
document.body.append(h2)

for (let i = 0; i < 5; i ++) {   
    const ele = document.createElement("h1");
    ele.innerHTML = "The World of JavaScript";
    document.body.append(ele);
    ele.style.fontFamily = "papyrus"
    ele.style.color = "purple";
    ele.style.background = "black";
    ele.style.fontSize = "50px";
    ele.style.fontWeight = "lighter";
    }
