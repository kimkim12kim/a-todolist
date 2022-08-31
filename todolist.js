function show_name(e) {
  var text_list = document.getElementById("text_list");
  var text = document.getElementById("text").value;
  if (e.keyCode == 13) {
    text_list.innerHTML = "입력값: " + text;
  }
}
