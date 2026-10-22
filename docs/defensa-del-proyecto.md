# Guía para defender el proyecto

Esta guía sirve para preparar una exposición y una demostración del formulario
de registro de Spider-Verse Archives. Está escrita para explicar el proyecto con
claridad, incluyendo qué hace, cómo se construyó y qué limitaciones tiene.

## 1. Resumen del proyecto

Spider-Verse Archives es una pequeña experiencia web de registro y bienvenida.
Tiene dos páginas conectadas:

- `index.html`: presenta el formulario para crear una cuenta.
- `bienvenida.html`: presenta el mensaje de bienvenida cuando el formulario se
  completa correctamente.

El diseño está en `style.css` y el comportamiento está en `script.js`. Al
registrarse, el navegador guarda el nombre y el correo en su almacenamiento
local, valida que los campos estén completos y que ambas contraseñas coincidan,
y después navega a la bienvenida.

Es importante describirlo como una **demostración de interfaz y almacenamiento
en el navegador**, no como un sistema real de autenticación. No hay servidor,
base de datos ni creación de cuentas protegida.

## 2. Guion breve para la exposición

Se puede presentar el proyecto con estas palabras:

> Mi proyecto es una página de registro con una pantalla de bienvenida. Separé
> la estructura en dos documentos HTML, los estilos en una hoja CSS y la lógica
> en un archivo JavaScript. El formulario valida los campos, muestra mensajes
> debajo de cada entrada cuando hay errores y compara la contraseña con su
> confirmación. Si los datos son válidos, guarda el nombre y el correo en el
> almacenamiento local del navegador y abre la página de bienvenida. No guardo
> la contraseña. La protección de la bienvenida es demostrativa y solo funciona
> en el navegador donde se completó el formulario; no reemplaza una autenticación
> de servidor.

Después del resumen, conviene demostrar el flujo en el navegador y explicar
brevemente el propósito de cada archivo.

## 3. Cómo está organizado

### `index.html`: formulario de registro

Contiene la estructura de la página: metadatos, cabecera, navegación, contenido
principal, campos del formulario y pie de página. Las etiquetas `label` nombran
sus entradas, y cada `id` permite asociar la etiqueta y su campo.

El formulario pide:

1. Nombre.
2. Correo electrónico.
3. Contraseña.
4. Confirmación de contraseña.

El atributo `novalidate` permite que el proyecto muestre sus propios mensajes de
validación debajo de las entradas en vez de depender únicamente de los globos
predeterminados del navegador. Los atributos `required`, `type="email"` y
`minlength="8"` documentan las reglas de los campos en el HTML; la función de
JavaScript implementa los mensajes visibles del formulario.

Los botones y entradas llaman al JavaScript con atributos `onclick` y `oninput`,
según las indicaciones del proyecto.

### `bienvenida.html`: pantalla de bienvenida

Presenta el mensaje de bienvenida y el enlace «Salir». Al cargarse, llama a la
comprobación de acceso. Si no encuentra el permiso guardado por el formulario,
redirige a `index.html`.

El enlace «Salir» vuelve al formulario y elimina el permiso de bienvenida. El
nombre y el correo se conservan; salir no es una eliminación completa de los
datos guardados.

### `style.css`: aspecto visual

Define el tema visual oscuro, los colores, las fuentes, la distribución de las
páginas, los campos, los mensajes de error y los ajustes para pantallas
pequeñas. Las variables CSS están agrupadas en `:root` para que los valores
principales se puedan identificar y reutilizar.

### `script.js`: validación, almacenamiento y navegación

El archivo contiene las funciones que conectan las páginas con el
comportamiento:

- `registrarUsuario` obtiene los campos, comprueba los datos, muestra o limpia
  advertencias, guarda nombre, correo y permiso de navegación, y abre la
  bienvenida.
- `mostrarAdvertencia` escribe el texto de error, controla su visibilidad y
  actualiza `aria-invalid`.
- `limpiarAdvertencia` oculta el error de un campo cuando la persona lo edita.
- `verificarAccesoBienvenida` comprueba el permiso de acceso al cargar la
  página.
- `registrarSalida` elimina ese permiso antes de regresar al formulario.

El código sigue las convenciones de `AGENT.md`: usa funciones flecha, nombres y
mensajes en español, selección del DOM mediante `getElementById`, `localStorage`
en lugar de `sessionStorage` y no utiliza `else`.

## 4. Qué se guarda en el navegador

Después de un registro válido, en las herramientas de desarrollo del navegador
se pueden encontrar estas claves:

| Clave | Contenido | Para qué sirve |
|---|---|---|
| `usuarioSpiderVerse` | Nombre escrito en el formulario | Conserva el nombre de la persona en este navegador. |
| `correoUsuario` | Correo escrito en el formulario | Conserva el correo en una clave independiente. |
| `bienvenidaPermitida` | El texto `"true"` | Permite que la página de bienvenida se muestre en este navegador. |

La contraseña y su confirmación **no** se guardan. Solo se usan durante la
validación en la página. El proyecto tampoco crea una cuenta en un servidor.

Para consultar las claves, después de enviar el formulario se puede abrir la
consola del navegador y ejecutar:

```js
localStorage.getItem("usuarioSpiderVerse")
localStorage.getItem("correoUsuario")
localStorage.getItem("bienvenidaPermitida")
```

Las claves pertenecen al origen de la página. Por ejemplo, `file://` y
`http://127.0.0.1:5500` son orígenes distintos y tienen almacenamientos
separados. Para la demostración, hay que abrir y probar ambas páginas bajo la
misma dirección y el mismo origen.

## 5. Demostración paso a paso

### Preparación

1. Abrir el proyecto desde un servidor local, por ejemplo la extensión Live
   Server de Visual Studio Code.
2. Abrir `index.html` desde la dirección del servidor, no alternar entre esa
   dirección y `file://`.
3. Abrir las herramientas de desarrollo del navegador. En la pestaña
   **Application** o **Almacenamiento**, localizar **Local Storage** y el origen
   actual.

### Mostrar validaciones

1. Pulsar «Crear cuenta» sin completar los campos.
2. Mostrar que cada entrada pendiente recibe su propio mensaje debajo.
3. Escribir un correo sin formato válido y volver a enviar para mostrar el
   mensaje correspondiente.
4. Escribir una contraseña de menos de ocho caracteres para mostrar la regla
   mínima.
5. Escribir contraseñas distintas para mostrar «Las contraseñas no coinciden».
6. Corregir el campo y mostrar que su advertencia se oculta al editarlo.

### Mostrar un registro válido

1. Completar todos los campos con datos de prueba.
2. Escribir la misma contraseña, de al menos ocho caracteres, en ambos campos.
3. Pulsar «Crear cuenta» y mostrar que se abre `bienvenida.html`.
4. Volver a **Local Storage** y señalar `usuarioSpiderVerse`, `correoUsuario` y
   `bienvenidaPermitida`.
5. Comprobar que no hay ninguna clave que contenga la contraseña. No mostrar ni
   usar contraseñas personales durante la exposición.

### Mostrar la restricción de bienvenida

1. Pulsar «Salir». La aplicación quita `bienvenidaPermitida` y vuelve al
   formulario.
2. Escribir directamente la dirección de `bienvenida.html` en la barra del
   navegador.
3. Mostrar que, sin el permiso, la página regresa al formulario.

## 6. Preguntas que podrían hacer y respuestas sugeridas

### ¿Por qué dividiste el proyecto en varios archivos?

Para separar responsabilidades. El HTML define la estructura, el CSS controla
la presentación y el JavaScript contiene las validaciones, el almacenamiento y
la navegación. Así resulta más fácil localizar y mantener cada parte.

### ¿Qué ocurre cuando un campo está vacío?

La función `registrarUsuario` prepara un mensaje para cada campo, lo muestra
debajo de la entrada y detiene el proceso. No guarda los datos ni abre la
bienvenida hasta que todos los mensajes de validación estén vacíos.

### ¿Cómo compruebas que las contraseñas coinciden?

JavaScript compara el valor del campo de contraseña con el de confirmación. Si
son distintos, muestra una advertencia junto a la confirmación y no continúa
con el registro.

### ¿La contraseña se almacena?

No. Se utiliza solo para comprobar que tenga al menos ocho caracteres y coincida
con la confirmación. El código guarda el nombre y el correo, pero no la
contraseña.

### ¿Qué es `localStorage`?

Es un almacenamiento que ofrece el navegador para conservar valores de texto
asociados al origen de un sitio. En este proyecto se usa para la demostración del
registro. No es una base de datos ni verifica la identidad de una persona.

### ¿La página de bienvenida está protegida de forma segura?

No de forma robusta. La clave `bienvenidaPermitida` sirve para demostrar una
condición de navegación en el lado del cliente. Una persona puede inspeccionar o
modificar `localStorage`, por lo que esto no debe presentarse como un control de
acceso real. Una aplicación real tendría que validar la sesión en un servidor.

### ¿Por qué el almacenamiento puede aparecer vacío?

Hay que revisar que se haya completado un envío válido y que las dos páginas se
estén abriendo con el mismo origen. El almacenamiento de `file://` no es el
mismo que el de Live Server u otra dirección local. También conviene revisar
que el navegador no esté bloqueando el almacenamiento.

### ¿Qué hace «Salir»?

Quita el permiso local para mostrar la bienvenida y navega al formulario. No
borra el nombre ni el correo.

### ¿Qué agregarías en una versión futura?

Una API y una base de datos para registrar cuentas de verdad; manejo de sesión
en el servidor; una pantalla de inicio de sesión; y mensajes de estado más
completos. Esas mejoras requieren diseñar y probar también la parte del servidor.

## 7. Límites que conviene reconocer

Reconocer los límites demuestra que se entiende lo que el código hace y lo que
no hace:

- El proyecto es una demostración del lado del cliente; no tiene backend.
- Guardar información en `localStorage` no crea una cuenta real.
- El permiso de bienvenida se puede cambiar desde las herramientas del
  navegador y no es un mecanismo de seguridad.
- El nombre y el correo permanecen en el navegador hasta que se borren los
  datos del sitio o se eliminen desde el almacenamiento.
- El enlace «Salir» elimina el permiso, pero no borra nombre ni correo.
- La validación del navegador mejora la experiencia, pero una aplicación real
  también debe validar los datos en el servidor.

## 8. Consejos para la defensa

- Explicar el recorrido completo: formulario, validación, almacenamiento y
  bienvenida.
- Mostrar una validación fallida antes de mostrar un envío válido.
- Señalar los nombres exactos de las claves en Local Storage; no afirmar que se
  guarda la contraseña.
- Si preguntan por seguridad, distinguir entre una demostración de navegación y
  una autenticación real.
- Usar datos de prueba y no compartir datos personales ni contraseñas.
- Si algo no funciona durante la presentación, comprobar primero el origen y la
  validez de los campos antes de modificar el código en vivo.
