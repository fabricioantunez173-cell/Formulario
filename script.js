window.registrarUsuario = () => {
  const formulario = document.getElementById("formulario-registro");
  const campoNombre = document.getElementById("nombre");
  const campoCorreo = document.getElementById("correo");
  const campoContrasena = document.getElementById("contrasena");
  const campoConfirmarContrasena = document.getElementById("confirmar-contrasena");
  const advertenciaNombre = document.getElementById("advertencia-nombre");
  const advertenciaCorreo = document.getElementById("advertencia-correo");
  const advertenciaContrasena = document.getElementById("advertencia-contrasena");
  const advertenciaConfirmarContrasena = document.getElementById("advertencia-confirmar-contrasena");
  const advertenciaGeneral = document.getElementById("advertencia-general");

  if (!formulario || !campoNombre || !campoCorreo || !campoContrasena || !campoConfirmarContrasena ||
      !advertenciaNombre || !advertenciaCorreo || !advertenciaContrasena ||
      !advertenciaConfirmarContrasena || !advertenciaGeneral) {
    console.error("No se encontró el formulario o faltan campos requeridos.");
    return false;
  }

  const nombre = campoNombre.value.trim();
  const correo = campoCorreo.value.trim();
  const contrasena = campoContrasena.value;
  const confirmarContrasena = campoConfirmarContrasena.value;
  const mensajeNombre = nombre ? "" : "Completa tu nombre.";
  const mensajeCorreo = !correo
    ? "Completa tu correo electrónico."
    : campoCorreo.validity.typeMismatch
      ? "Escribe un correo electrónico válido."
      : "";
  const mensajeContrasena = !contrasena
    ? "Completa tu contraseña."
    : contrasena.length < 8
      ? "La contraseña debe tener al menos 8 caracteres."
      : "";
  const mensajeConfirmarContrasena = !confirmarContrasena
    ? "Confirma tu contraseña."
    : contrasena !== confirmarContrasena
      ? "Las contraseñas no coinciden."
      : "";

  window.mostrarAdvertencia(campoNombre, advertenciaNombre, mensajeNombre);
  window.mostrarAdvertencia(campoCorreo, advertenciaCorreo, mensajeCorreo);
  window.mostrarAdvertencia(campoContrasena, advertenciaContrasena, mensajeContrasena);
  window.mostrarAdvertencia(campoConfirmarContrasena, advertenciaConfirmarContrasena, mensajeConfirmarContrasena);
  advertenciaGeneral.textContent = "";
  advertenciaGeneral.hidden = true;

  const formularioValido = [
    mensajeNombre,
    mensajeCorreo,
    mensajeContrasena,
    mensajeConfirmarContrasena
  ].every((mensaje) => mensaje === "");

  if (!formularioValido) {
    return false;
  }

  try {
    localStorage.setItem("usuarioSpiderVerse", nombre);
    localStorage.setItem("correoUsuario", correo);
    localStorage.setItem("bienvenidaPermitida", "true");
    const usuarioGuardado = localStorage.getItem("usuarioSpiderVerse");
    const correoGuardado = localStorage.getItem("correoUsuario");
    const permisoGuardado = localStorage.getItem("bienvenidaPermitida");

    if (usuarioGuardado !== nombre || correoGuardado !== correo || permisoGuardado !== "true") {
      throw new Error("El navegador no confirmó el guardado de los datos.");
    }
  } catch (error) {
    console.error("No se pudo guardar el registro en el almacenamiento local.", error);
    advertenciaGeneral.textContent = "No se pudieron guardar tus datos en este navegador. Comprueba la configuración de almacenamiento e inténtalo de nuevo.";
    advertenciaGeneral.hidden = false;
    return false;
  }

  console.log("Nombre y correo guardados. La contraseña no se almacena en este navegador.");
  window.location.href = "bienvenida.html";
  return false;
};

window.mostrarAdvertencia = (campo, advertencia, mensaje) => {
  advertencia.textContent = mensaje;
  advertencia.hidden = mensaje === "";
  campo.setAttribute("aria-invalid", mensaje === "" ? "false" : "true");
};

window.limpiarAdvertencia = (identificadorCampo, identificadorAdvertencia) => {
  const campo = document.getElementById(identificadorCampo);
  const advertencia = document.getElementById(identificadorAdvertencia);

  if (!campo || !advertencia) {
    console.error("No se pudo limpiar la advertencia del campo.");
    return;
  }

  window.mostrarAdvertencia(campo, advertencia, "");
};

window.verificarAccesoBienvenida = () => {
  try {
    if (localStorage.getItem("bienvenidaPermitida") === "true") {
      return;
    }
  } catch (error) {
    console.error("No se pudo comprobar el permiso de acceso a la bienvenida.", error);
  }

  console.warn("Acceso a bienvenida sin completar el registro. Regresando al formulario.");
  window.location.replace("index.html");
};

window.registrarSalida = () => {
  try {
    localStorage.removeItem("bienvenidaPermitida");
  } catch (error) {
    console.error("No se pudo cerrar el acceso a la página de bienvenida.", error);
  }

  console.log("Spider-Verse: regresando al formulario de acceso.");
};