
document.getElementById("form-doacao").addEventListener("submit", function(event) {
  event.preventDefault();

  if (this.checkValidity()){
    document.getElementById("popup-container").classList.add("abrir-popup-container");
    document.getElementById("popup").classList.add("abrir-popup");
  } else {
    this.reportValidity();
  }
});

function fecharPopup(){
  popup.classList.remove("abrir-popup");
  document.getElementById("popup-container").classList.remove("abrir-popup-container");
}