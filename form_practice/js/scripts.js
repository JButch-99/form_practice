window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(e) {
    const textInput = document.getElementById("textInput").value;

    document.querySelector("span#sentenceUC").innerText = textInput.toUpperCase();

    e.preventDefault();
  }
}