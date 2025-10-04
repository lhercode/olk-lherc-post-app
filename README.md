# Lherc Links - Página de Enlaces Personal

Una página de enlaces moderna y elegante construida con Hugo.

## 🎨 Características

- **Diseño Moderno**: Header con nombre y foto de perfil
- **Links Interactivos**: Click en el link para visitar, click en el ícono para ver modal
- **Modales Informativos**: Cada link tiene un modal con descripción e imagen
- **Responsive**: Se adapta perfectamente a dispositivos móviles
- **Animaciones**: Transiciones suaves y efectos hover

## 🚀 Cómo Personalizar

### 1. Cambiar Información Personal

Edita `config.toml`:

```toml
[params]
  author = "Tu Nombre"
  description = "Tu descripción"
  profileImage = "/images/profile.jpg"
```

### 2. Agregar/Modificar Links

En `config.toml`, agrega o modifica la sección `[[params.links]]`:

```toml
[[params.links]]
id = "mi-link"
title = "Mi Link"
description = "Descripción del link"
url = "https://ejemplo.com"
icon = "fab fa-github"  # Icono de Font Awesome
image = "/images/mi-imagen.jpg"
```

### 3. Agregar Imágenes

Coloca tus imágenes en `static/images/`:
- `profile.jpg` - Tu foto de perfil (120x120px)
- `github.jpg` - Imagen para el modal de GitHub
- `linkedin.jpg` - Imagen para el modal de LinkedIn
- etc.

### 4. Iconos Disponibles

Usa cualquier icono de [Font Awesome](https://fontawesome.com/icons):
- `fab fa-github` - GitHub
- `fab fa-linkedin` - LinkedIn
- `fab fa-twitter` - Twitter
- `fas fa-envelope` - Email
- `fas fa-briefcase` - Portfolio
- `fas fa-blog` - Blog

## 🛠️ Desarrollo

### Servidor Local
```bash
hugo server --buildDrafts
```

### Build para Producción
```bash
hugo --buildDrafts
```

## 📁 Estructura del Proyecto

```
├── config.toml          # Configuración principal
├── content/
│   └── _index.md        # Contenido de la página
├── layouts/
│   └── index.html       # Template principal
├── static/
│   ├── css/
│   │   └── style.css    # Estilos
│   ├── js/
│   │   └── script.js    # JavaScript
│   └── images/          # Imágenes
└── .github/workflows/
    └── hugo.yml         # GitHub Actions
```

## 🚀 Despliegue

El sitio se despliega automáticamente en GitHub Pages cuando haces push a la rama `main`.

## 📝 Licencia

MIT License - Úsalo libremente para tus proyectos.