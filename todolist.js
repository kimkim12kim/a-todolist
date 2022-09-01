function printlist() {
  var a = document.querySelector("#text_box").value;
  document.querySelector("#text_box").value = "";
  document.querySelector("#text_box").focus();
  for (let i = 0; i < toppings.length; i++) {
    document.querySelector("#todo-list").innerText = a;
}
}
