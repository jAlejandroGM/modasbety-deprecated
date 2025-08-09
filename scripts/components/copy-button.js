// Función genérica para cambiar icono con transición
function cambiarIcono(iconoSalida, iconoEntrada, nuevoTexto) {
  const buttonText = document.querySelector(".button-text");

  buttonText.textContent = nuevoTexto;
  iconoSalida.style.opacity = "0";
  iconoSalida.style.transform = "scale(0.8)";

  setTimeout(() => {
    iconoSalida.style.display = "none";
    iconoEntrada.style.display = "block";
    setTimeout(() => {
      iconoEntrada.style.opacity = "1";
      iconoEntrada.style.transform = "scale(1)";
    }, 50);
  }, 250);
}

// Función para copiar teléfono
function copiarTelefono() {
  const telefono = "+51947620202";
  const button = document.getElementById("copy-button");
  const copyIcon = document.getElementById("copy-icon");
  const checkIcon = document.getElementById("check-icon");

  // Cambiar a estado copiado
  cambiarIcono(copyIcon, checkIcon, "¡Copiado!");
  button.classList.add("copied");

  // Copiar al clipboard con fallback simple
  navigator.clipboard.writeText(telefono).catch(() => {
    // Fallback para navegadores antiguos
    const textArea = document.createElement("textarea");
    textArea.value = telefono;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  });

  setTimeout(restaurarBotonCopiar, 2000);
}

function restaurarBotonCopiar() {
  const button = document.getElementById("copy-button");
  const copyIcon = document.getElementById("copy-icon");
  const checkIcon = document.getElementById("check-icon");

  // Cambiar a estado original
  cambiarIcono(checkIcon, copyIcon, "Copiar número");
  button.classList.remove("copied");
}
