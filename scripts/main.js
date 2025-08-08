// Actualizar año automáticamente
document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Función para copiar teléfono
function copiarTelefono() {
  const telefono = "+51947620202";

  // Usar la API moderna del Clipboard si está disponible
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(telefono)
      .then(function () {
        mostrarNotificacion("📱 Número copiado: " + telefono);
      })
      .catch(function (err) {
        console.error("Error al copiar: ", err);
        copiarTelefonoFallback(telefono);
      });
  } else {
    // Fallback para navegadores más antiguos
    copiarTelefonoFallback(telefono);
  }
}

// Función fallback para copiar teléfono
function copiarTelefonoFallback(telefono) {
  const textArea = document.createElement("textarea");
  textArea.value = telefono;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
    mostrarNotificacion("📱 Número copiado: " + telefono);
  } catch (err) {
    console.error("Error al copiar: ", err);
    mostrarNotificacion("❌ Error al copiar. Número: " + telefono);
  }

  document.body.removeChild(textArea);
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
  // Crear el elemento de notificación
  const notificacion = document.createElement("div");
  notificacion.className = "notificacion";
  notificacion.textContent = mensaje;

  // Agregar al DOM
  document.body.appendChild(notificacion);

  // Mostrar con animación
  setTimeout(() => {
    notificacion.classList.add("mostrar");
  }, 100);

  // Ocultar después de 3 segundos
  setTimeout(() => {
    notificacion.classList.remove("mostrar");
    setTimeout(() => {
      if (document.body.contains(notificacion)) {
        document.body.removeChild(notificacion);
      }
    }, 300);
  }, 3000);
}
