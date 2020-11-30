var newP = document.createElement("h1")
newP.textContent = "Understanding Javascript in my Own Words"
newP.style.textAlign = "center"
document.body.append(newP)

var a = document.createElement ("a")
a.textContent = "Bing"
a.href =" bing.com "
document.body.append(a)

var newP = document.createElement("p")
newP.textContent = "JavaScript was discovered by a team within Netscape in 10 days and almost 15 years later it is the foundation mostly all of the programming in the web development industry.  JavaScript was strictly used as a client-side programming language for form validation. JavaScript is a scripting engine that resides within the realm of a browser. There is no link between Java and JavaScript.  Most of the web-development jobs will ask and or require JavaScript experience. If your interested in a career in web development, take the first steps below to start today!  "
newP.style.textAlign = "center"
document.body.append(newP)
 
var newLi1 = document.createElement("li")
newLi1.style.textAlign = "center"
newLi1.textContent = "Research Top 10 Web Development Programs"

var newLi2 = document.createElement("li")
newLi2.style.textAlign = "center"
newLi2.textContent = "Consult with school of choices Academic Advisor"

var newLi3 = document.createElement("li")
newLi3.style.textAlign = "center"
newLi3.textContent = "File out Application and apply for financial aid"

var footer = document.createElement("footer")
footer.textContent = "Created by Jerome Blackwell"

var ol = document.createElement("ol")
ol.append(newLi1,newLi2,newLi3,footer)
document.body.append(ol)