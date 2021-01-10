const nodelist = document.getElementsByTagName("LI");

for (let i = 0; i < nodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nodelist[i].appendChild(span);
}

const close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {                                                                                                                                                                                                                                                                                                                                                                                                     
    const div = this.parentElement;
    div.style.display = "none";
  }
}

const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myinput").value;
  const inputValue1 = document.getElementById("input").value;
  const inputValue2 = inputValue +" "+"-" +" "+ inputValue1
  const t = document.createTextNode(inputValue2);
  li.appendChild(t);
  if (inputValue2 === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myul").appendChild(li);
  }
  document.getElementById("myinput").value = "";
  document.getElementById("input").value = "";
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}