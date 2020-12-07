for (let i = 0; i < 5; i ++) {   
    const ele = document.createElement("h1");
    ele.innerHTML = "Changing Styles and Classes using JS";
    document.body.append(ele);
    ele.style.color = "purple";
    ele.style.background = "black";
}