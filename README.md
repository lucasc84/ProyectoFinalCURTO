# CODERHOUSE
Curso de React JS  
Comisión  81735 
Alumno: Lucas Curto

Proyecto:  
Preentrega 2 - **Navega las rutas**

---

## Descripción del proyecto

Este proyecto corresponde a la segunda preentrega del curso de React JS.  
La consigna se centra en implementar **navegación con React Router**, rutas dinámicas por categoría y detalle de producto, además de contenedores que gestionan datos simulados de manera asíncrona.

El proyecto toma como base la **Preentrega 1**, donde se había creado la estructura inicial con NavBar, CartWidget e ItemListContainer, y evoluciona incorporando los nuevos contenidos trabajados en clase.

---

## Funcionalidades

- **Navegación principal (NavBar)**  
  - Implementada con `NavLink` para permitir navegación sin recarga.  
  - Contiene accesos a las tres categorías principales: Hombre, Mujer y Accesorios.  
  - Incluye el `CartWidget` como en la entrega anterior.

- **Catálogo de productos**  
  - `ItemListContainer` recibe parámetros de la URL con `useParams`.  
  - Filtra productos por categoría (`/category/:type`) o muestra todos (`/`).  
  - Los productos se obtienen mediante un **Promise simulado**, como se trabajó en clase.

- **Detalle de producto**  
  - `ItemDetailContainer` obtiene el producto a partir de su `id` (`/item/:id`).  
  - Muestra un componente `ItemDetail` con información detallada.  
  - Incluye un placeholder de `ItemCount` como base para la próxima entrega.

- **Rutas dinámicas y 404**  
  - `/` → listado completo.  
  - `/category/:type` → listado filtrado.  
  - `/item/:id` → detalle de producto.  
  - `*` → página de error 404 con opción de volver al inicio.

---

## Nota

Este proyecto muestra cómo se fue **escalando con los conocimientos adquiridos en clase**:  
- La Preentrega 1 sentó las bases con los primeros componentes.  
- En la Preentrega 2 incorporamos **ruteo dinámico**, **contenedores asincrónicos** y la **estructura de detalle**.  
---