/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */
document.addEventListener("keydown", function(event) {
    document.getElementById("output").innerHTML = `
      <b>key:</b> ${event.key}<br>
      <b>which:</b> ${event.which}<br>
      <b>keyCode:</b> ${event.keyCode}<br>
      <b>shiftKey:</b> ${event.shiftKey}<br>
      <b>altKey:</b> ${event.altkey}<br>
      <b>ctrlKey:</b> ${event.ctrlKey}<br>
      <b>metaKey:</b> ${event.metaKey}<br>
    `;
});