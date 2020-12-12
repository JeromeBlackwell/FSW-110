function add(){
    c=parseInt(myform.c.value);
    d=parseInt(myform.d.value);
    result=c+d;
    myform.result.value=result;
}
function subtract(){
    a=parseInt(myform.a.value);
    b=parseInt(myform.b.value);
    result=a+b;
    myform1.result.value=result;
}
function multiply(){
    c=parseInt(myform.c.value);
    d=parseInt(myform.d.value);
    result=c+d;
    myform2.result.value=result;
}
function divide(){
    e=parseInt(myform.e.value);
    f=parseInt(myform.f.value);
    result=e+f;
    myform3.result.value=result;
}
document.getElementById("myform").style.cssText = "border: 2px solid black; padding: 20px; background-color = yellow";
myform.addEventListener("mouseover", function(){
    myform.style.backgroundColor = "red";
});
document.getElementById("myform1").style.cssText = "border: 2px solid black; padding: 20px; background-color = yellow";
myform1.addEventListener("mouseover", function(){
    myform1.style.backgroundColor = "green";
});
document.getElementById("myform2").style.cssText = "border: 2px solid black; padding: 20px; background-color = yellow";
myform2.addEventListener("mouseover", function(){
    myform2.style.backgroundColor = "orange";
});
document.getElementById("myform3").style.cssText = "border: 2px solid black; padding: 20px; background-color = yellow";
myform3.addEventListener("mouseover", function(){
    myform3.style.backgroundColor = "dodgerblue";
});


