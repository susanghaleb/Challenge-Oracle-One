(() => {
  const input = document.getElementById("box");
  input.value = "";
  const textInfoLabel = document.querySelector(".text-info-label");
  const textDescriptionCaption = document.querySelector(
    ".text-description-caption"
  );
  const textSalida = document.getElementById("text-input-salida");
  const muneco = document.getElementById("muneco");

  const buttonEncriptar = document.getElementById("encriptar");
  const buttonDesEncriptar = document.getElementById("desencriptar");
  const buttonCopy = document.getElementById("copy");

  function encriptar() {
    const textoCifrado = input.value
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    document.getElementById("text-input-salida").value = textoCifrado;
    textInfoLabel.classList.add("hidden");
    textDescriptionCaption.classList.add("hidden");
    buttonCopy.classList.remove("hidden");
    textSalida.classList.remove("hidden");
    buttonCopy.classList.add("show");
    muneco.classList.add("hidden");
    input.value = "";
  }

  function desEncriptar() {
    const texto = input.value;
    const textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    document.getElementById("text-input-salida").value = textoCifrado;
    input.value = "";
  }

  function copiar() {
    var copyText = document.getElementById("text-input-salida");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
  }

  function changeInput() {
    if (input.value.length > 0) {
      buttonEncriptar.disabled = false;
      buttonDesEncriptar.disabled = false;
    } else {
      buttonEncriptar.disabled = true;
      buttonDesEncriptar.disabled = true;
    }
  }

  buttonEncriptar.addEventListener("click", encriptar);
  buttonDesEncriptar.addEventListener("click", desEncriptar);
  buttonCopy.addEventListener("click", copiar);
  input.addEventListener("input", changeInput);
})();
