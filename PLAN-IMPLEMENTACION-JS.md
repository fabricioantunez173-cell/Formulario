# Plan de implementación de JavaScript

## Objetivo

Conectar el formulario de registro de `index.html` y la acción «Salir» de
`bienvenida.html` con `script.js`. Los controles interactivos llaman a las
funciones mediante el atributo HTML `onclick`, tal como se solicitó.

La guía `AGENT.md` se respetó: se usan funciones flecha, nombres y mensajes en
español, selección de elementos con `getElementById` y `localStorage` como único
almacenamiento del navegador.

## Comportamiento implementado

### Registro (`index.html`)

1. Al pulsar «Crear cuenta», el atributo
   `onclick="return registrarUsuario()"` ejecuta la función de registro.
2. La validación propia del formulario muestra debajo de cada campo una
   advertencia específica si falta el nombre, falta el correo, el correo tiene
   formato inválido, falta la contraseña, esta tiene menos de ocho caracteres,
   falta confirmar la contraseña o las dos contraseñas no coinciden.
3. Las advertencias también actualizan `aria-invalid` y se ocultan al editar el
   campo correspondiente. El formulario usa `novalidate` para que el navegador
   no reemplace estos mensajes debajo de los campos por globos de validación.
4. Se quitan espacios al principio y al final del nombre y del correo antes de
   guardarlos.
5. El nombre se guarda en `localStorage` bajo la clave `usuarioSpiderVerse` y
   el correo, de forma independiente y visible, bajo `correoUsuario`. El código
   vuelve a leer ambos valores para comprobar que el navegador confirmó el
   guardado.
6. La contraseña y su confirmación se utilizan solo para validar el formulario.
   No se guardan ni se copian al almacenamiento local.
7. Se guarda también el permiso `bienvenidaPermitida` que utiliza la página de
   bienvenida para impedir la entrada directa a personas que no completaron el
   formulario.
8. Si el navegador impide escribir en `localStorage`, aparece una advertencia
   visible debajo del botón y el proceso se detiene.
9. Cuando el guardado termina correctamente, el navegador abre
   `bienvenida.html`.

### Salida (`bienvenida.html`)

1. El enlace «Salir» conserva su destino actual: `index.html`.
2. Su atributo `onclick="registrarSalida()"` registra en la consola que se está
   regresando al formulario.
3. La función no elimina el nombre ni el correo guardados. No se pidió borrar
   esos datos y tampoco se creó un sistema de autenticación que determine cuándo
   existe una sesión real.

### Carga del archivo

Las dos páginas cargan `script.js` al final del `<body>`. Así, el archivo externo
está disponible cuando la persona pulsa los controles, sin incluir bloques de
JavaScript dentro del HTML.

## Pasos de comprobación manual

1. Abrir `index.html` en el navegador.
2. Pulsar «Crear cuenta» con campos vacíos y comprobar que aparece una
   advertencia debajo de cada campo pendiente.
3. Introducir un correo con formato incorrecto, una contraseña de menos de
   ocho caracteres o dos contraseñas diferentes y comprobar que aparece el
   mensaje correspondiente debajo del campo.
4. Completar todos los campos correctamente, incluidas ambas contraseñas, y
   pulsar «Crear cuenta».
5. Comprobar que se abre `bienvenida.html`.
6. En las herramientas de desarrollo del navegador, abrir
   **Application/Almacenamiento > Local Storage** y verificar las claves
   `usuarioSpiderVerse` (nombre), `correoUsuario` (correo) y
   `bienvenidaPermitida` (permiso de navegación). No debe existir ninguna
   contraseña guardada.
7. También se puede consultar directamente en la consola del navegador:
   `localStorage.getItem("correoUsuario")`.
8. Pulsar «Salir» y comprobar que se vuelve a `index.html` y que la consola
   registra la acción.

## Opciones de mejora no implementadas

Estas propuestas son ideas para una siguiente etapa; no forman parte del cambio
actual y no se han programado.

### 1. Conectar el formulario a un servidor

Actualmente, guardar nombre y correo en `localStorage` solo conserva esos datos
en ese navegador. No crea una cuenta real, no valida que el correo pertenezca a
la persona y no permite iniciar sesión desde otro dispositivo. Una aplicación
real debería enviar los datos a una API por HTTPS y dejar que el servidor
gestione el registro.

### 2. No tratar `localStorage` como autenticación

Los datos de `localStorage` pueden ser leídos o modificados por quien utiliza el
navegador. Por eso, el objeto guardado es solo información de registro para este
ejercicio: no prueba la identidad del usuario. Una mejora sería usar una sesión
administrada por el servidor con mecanismos apropiados para autenticación.

### 3. Añadir una pantalla o acción de inicio de sesión

La interfaz actual tiene campos de registro, pero no ofrece un formulario real
para quienes ya tienen cuenta. Se podría diseñar el inicio de sesión cuando se
defina qué campos, mensajes y flujo debe tener.

### 4. Mostrar una confirmación accesible

Ahora los errores de almacenamiento aparecen en un aviso y en la consola. Se
podría añadir un mensaje de estado dentro de la página, con atributos de
accesibilidad como `role="status"` o `aria-live`, para que la confirmación sea
más clara y también se anuncie a tecnologías de asistencia.

### 5. Definir una política de conservación y borrado de datos

El nombre y el correo permanecen en el navegador hasta que se borre el
almacenamiento del sitio. Antes de añadir una acción de borrado, conviene decidir
qué significa «Salir», qué datos se deben conservar y cómo explicarlo a la
persona usuaria.
