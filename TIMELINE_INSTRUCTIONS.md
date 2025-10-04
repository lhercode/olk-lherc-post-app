# 📅 Timeline - Instrucciones de Uso

## 🎯 **Nuevo Diseño Implementado:**

### ✅ **Header Rediseñado:**
- **Foto de perfil** ahora está arriba
- **Nombre y título** están abajo
- **Diseño centrado** y más limpio

### ✅ **Timeline Integrado:**
- **Sección de timeline** después de los links
- **Actualizable con archivos MD** en `content/timeline/`
- **Diseño moderno** con línea de tiempo visual

## 📝 **Cómo Agregar Entradas al Timeline:**

### 1. **Crear un nuevo archivo MD** en `content/timeline/`:

```markdown
---
title: "Título de tu entrada"
date: 2024-12-01T00:00:00Z
draft: false
type: "timeline"
description: "Descripción corta de la entrada"
category: "Categoría"
url: "#"  # URL opcional
---

# Contenido de tu entrada

Aquí puedes escribir el contenido completo de tu entrada.
```

### 2. **Campos Requeridos:**
- `title`: Título de la entrada
- `date`: Fecha de la entrada (formato ISO)
- `type`: Debe ser "timeline"
- `description`: Descripción corta
- `category`: Categoría (Proyecto, Blog, Certificación, etc.)

### 3. **Campos Opcionales:**
- `url`: Enlace externo (usar "#" si no hay enlace)
- `draft`: false para publicar, true para borrador

## 🎨 **Categorías Disponibles:**

- **Proyecto**: Nuevos proyectos y desarrollos
- **Blog**: Artículos y publicaciones
- **Certificación**: Certificaciones obtenidas
- **Conferencia**: Eventos y presentaciones
- **Logro**: Logros profesionales
- **Educación**: Cursos y aprendizaje

## 📁 **Estructura de Archivos:**

```
content/
└── timeline/
    ├── nuevo-proyecto.md
    ├── articulo-blog.md
    ├── certificacion-aws.md
    └── conferencia-tech.md
```

## 🚀 **Ejemplos de Entradas:**

### **Nuevo Proyecto:**
```markdown
---
title: "Mi Nuevo Proyecto"
date: 2024-12-01T00:00:00Z
draft: false
type: "timeline"
description: "Lanzamiento de mi nuevo proyecto"
category: "Proyecto"
url: "#"
---
```

### **Artículo de Blog:**
```markdown
---
title: "Mi Nuevo Artículo"
date: 2024-11-15T00:00:00Z
draft: false
type: "timeline"
description: "Publicación de mi nuevo artículo"
category: "Blog"
url: "#"
---
```

### **Certificación:**
```markdown
---
title: "Nueva Certificación"
date: 2024-10-20T00:00:00Z
draft: false
type: "timeline"
description: "Obtuve una nueva certificación"
category: "Certificación"
url: "#"
---
```

## 🎯 **Características del Timeline:**

- **Orden cronológico** automático (más reciente primero)
- **Diseño visual** con línea de tiempo
- **Categorías con colores** distintivos
- **Enlaces opcionales** a recursos externos
- **Responsive** para móviles y desktop
- **Animaciones suaves** al hacer hover

## 📱 **Responsive Design:**

- **Desktop**: Timeline con línea vertical completa
- **Móvil**: Timeline adaptado con espaciado optimizado
- **Tablet**: Diseño intermedio con mejor legibilidad

## 🔄 **Actualización Automática:**

1. **Agrega** un nuevo archivo MD en `content/timeline/`
2. **Hugo** detecta automáticamente el cambio
3. **Timeline** se actualiza automáticamente
4. **Deploy** automático con GitHub Actions

¡Tu timeline está listo y funcionando! 🎉
