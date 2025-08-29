# CODERHOUSE
Curso de React JS  
Comisión  81735 
Alumno: Lucas Curto  

Proyecto:  
Preentrega 1 - **Crea tu Landing**


## Descripción del proyecto

Este proyecto corresponde a la primera preentrega del curso de React JS.  
La consigna consiste en crear los primeros componentes base de un e-commerce: una barra de navegación, un widget de carrito y un contenedor para mostrar un mensaje de bienvenida.

La aplicación utiliza **React + Vite** y está organizada en componentes dentro de la carpeta `src/components`.  
Se implementaron librerías externas como **React-Bootstrap** y **React Icons** para simplificar el maquetado y darle estilos.


## Funcionalidades

- **Componente `NavBar`**  
  - Muestra el logo de la tienda.  
  - Incluye enlaces de navegación simulando categorías de productos.  
  - Renderiza dentro suyo al componente `CartWidget`.  

- **Componente `CartWidget`**  
  - Muestra un ícono de carrito de compras.  
  - Contiene una burbuja con un número **estático** .  

- **Componente `ItemListContainer`**  
  - Se renderiza debajo de la barra de navegación.  
  - Recibe una **prop** llamada `mensaje` desde `App.jsx`.  
  - Muestra en pantalla ese mensaje (ej. “Bienvenidos a la Tienda Online de Poseidón”).  

- **Archivo `App.jsx`**  
  - Renderiza en orden `NavBar` y luego `ItemListContainer`.  
  - Se asegura la correcta jerarquía de componentes según lo pedido.  


## Nota

La idea es que esta base funcione como **landing inicial del e-commerce**, y que en futuras entregas los componentes evolucionen. 