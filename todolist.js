function printlist() {
  var a = document.querySelector("#text_box").value;
  document.querySelector("#text_list").innerText = a;
  document.querySelector("#text_box").value = "";
  document.querySelector("#text_box").focus();
}
