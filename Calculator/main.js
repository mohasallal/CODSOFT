let Display = document.querySelector(".DisplayOutput");

function Clear() {
  Display.value = "";
}

function Append(num) {
  Display.value += num;
}

function calc() {
  try {
    Display.value = eval(Display.value);
  } catch (e) {
    Display.value = "Error";
    setTimeout(Clear, 1000);
  }
}
