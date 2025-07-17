# te-lo-vendo-sass

# Te lo Vendo - Sitio Web

##Integrantes:

-María Teresa de la Fuente
-Roberto Escobar Vivallo
-Esteban Varela
-Gonzalo Román Reyes

## Ruta de repositorio:https://github.com/mt-dafonte/te-lo-vendo-sass


# 🛍️ TeLoVendo - Implementación con SASS

Este proyecto consiste en el desarrollo de una tienda de moda llamada **TeLoVendo**, utilizando **SASS** como preprocesador de CSS. Se implementa siguiendo el patrón de arquitectura **7-1** para asegurar una estructura organizada, mantenible y escalable.

---

## ✨ Características principales

- 🎨 Uso de **SASS** para escribir CSS más eficiente.
- 🏗️ Arquitectura **7-1** para una organización modular del código.
- 💡 **Variables SASS** reutilizables para mantener consistencia.
- 🔄 **Nesting** para aplicar estilos a pseudo-selectores y estados.
- 🧩 Uso de **parciales** (`_archivo.scss`) para separar responsabilidades.
- 📱 Diseño **responsive** mediante media queries.

---

## 📁 Estructura de Carpetas SASS (Patrón 7-1)

```
sass/
├── abstracts/            // Variables y mixins globales
│   ├── _mixins.scss
│   └── _variables.scss
│
├── base/                 // Estilos base del proyecto
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _utilities.scss
│
├── components/           // Componentes reutilizables
│   ├── _button.scss
│   ├── _card.scss
│   ├── _feature.scss
│   ├── _icons.scss
│   ├── _modal.scss
│   └── _product-cards.scss
│
├── layout/               // Distribución del sitio
│   ├── _categories.scss
│   ├── _featured.scss
│   ├── _footer.scss
│   ├── _header.scss
│   ├── _hero.scss
│   └── _presentation.scss
│
├── pages/                // Estilos específicos por página
│   ├── _about-us.scss
│   ├── _catalogue.scss
│   └── _contact.scss
│
├── themes/               // Temas visuales
│   └── # TODAVÍA NO EXISTE
│
├── vendors/              // Librerías de terceros
│   └── # TODAVÍA NO EXISTE   
│
└── main.scss             // Archivo principal que importa todos los parciales
```

---

## 🛠️ Implementación de Requerimientos

### 1. Variables SASS reutilizables

```scss
// abstracts/_variables.scss
$color-primary: #2a7f62;
$color-secondary: #e8491d;
$color-light: #f4f4f4;
```

### 2. Nesting para pseudo-selectores

```scss
// components/_buttons.scss
.btn {
  display: inline-flex;
  align-items: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
}
```

### 3. Nesting con `&` para estados

```scss
// layout/_navigation.scss
nav ul li {
  a {
    font-weight: 600;
    color: $color-dark;

    &:hover,
    &.current {
      color: $color-primary;
    }
  }
}
```

### 4. Uso de parciales y manifiesto

```scss
// main.scss
@import 'abstracts/variables';
@import 'abstracts/mixins';
// ...otros parciales
```

## 🧱 Estructura HTML

```
├── index.html            # Página de inicio
├── catalogue.html        # Catálogo de productos
├── about-us.html         # Página "Sobre Nosotros"
├── contact.html          # Página de contacto

├── css/
│   └── styles.css        # Estilos compilados
├── js/
│   └── main.js           # JavaScript principal
└── img/                  # Imágenes del sitio
```

---

## ✅ Conclusión

Este proyecto implementa correctamente los requerimientos solicitados, utilizando **SASS** para construir una arquitectura de estilos **modular, mantenible y escalable**, siguiendo las mejores prácticas de desarrollo frontend moderno.

---


Se actualiza sitio según Requerimientos de actividad M3AE4-ABPRO4:

• Incorporar sección de productos, la cual se deberá visualizar con una
imagen y una descripción, incluyendo un mínimo de 12 productos
distribuidos horizontalmente y considerando que se deben observar 4
productos hacia abajo y un producto al lado del otro.
• Implementar el menú fijo en el borde superior utilizando el 100% del
ancho.
• Incorpora en el footer agrega los íconos de redes sociales, los cuales
deberán verse al lado derecho de la página.
• Agregar un formulario de contacto, que contenga , nombre, apellido,
comentario
