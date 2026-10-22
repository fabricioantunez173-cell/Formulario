# 🛠️ Guía de Estándares y Directrices para Desarrollo en JavaScript

Para asegurar la coherencia, mantenibilidad y calidad del código en este proyecto, el agente de IA deberá seguir estrictamente las siguientes reglas al escribir o refactorizar código JavaScript:

### 1. Sintaxis y Funciones
* **Funciones Flecha:** Utiliza exclusivamente funciones flecha (`arrow functions`) para la declaración de funciones en todo el proyecto.

### 2. Paradigma y Estilo de Código
* **Programación Declarativa:** Prioriza un enfoque declarativo sobre el imperativo, enfocándote en *qué* se debe hacer mediante el uso de métodos de arreglos (`map`, `filter`, `reduce`, etc.) en lugar de bucles manuales.
* **Condicionales sin `else`:** Estructura los bloques de control de flujo utilizando retornos tempranos (*early returns*) o guardas, evitando por completo el uso de la estructura `else`.

### 3. Manipulación del DOM
* **Selección de Elementos:** Para interactuar con los elementos del documento HTML, utiliza siempre el método `getElementById`. Está prohibido el uso de `querySelector` o `querySelectorAll`.

### 4. Persistencia de Datos
* **Almacenamiento Local:** Utiliza estrictamente `localStorage` para guardar cualquier dato necesario en el cliente. Queda prohibido el uso de `sessionStorage`.

### 5. Depuración y Logs
* **Mensajes en Consola:** Agrega de forma estratégica `console.log`, `console.warn` o `console.error` según corresponda dentro de los condicionales o bloques de código que requieran seguimiento o manejo de errores.

### 6. Idioma y Nomenclatura
* **Idioma Español:** Todos los nombres de variables, funciones, constantes, mensajes de error, alertas y comentarios deben estar redactados en **español**.