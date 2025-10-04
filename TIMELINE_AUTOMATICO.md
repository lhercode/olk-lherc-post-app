# 🚀 Timeline Automático - Guía Completa

## 📝 **Problema Identificado:**
Hugo no está leyendo automáticamente los archivos MD del directorio `content/timeline/` debido a problemas con el filtro de sección. Por ahora, necesitas agregar las tareas manualmente al archivo `layouts/index.html`.

## 🎯 **Solución Actual (Funcional):**

### **1. Agregar Tareas Manualmente al Timeline:**

**Ubicación:** `layouts/index.html` (línea ~67)

**Método:** Agregar el código HTML de la nueva tarea antes del cierre del `</div>` del timeline-quarter:

```html
<!-- Nueva Tarea -->
<div class="timeline-item" data-status="todo">
    <div class="timeline-date">
        <span class="date">Dec 29, 2025</span>
        <span class="week-number">Semana 4</span>
    </div>
    <div class="timeline-content">
        <div class="timeline-status">
            <span class="status-badge status-todo">
                <i class="fas fa-circle"></i> Pendiente
            </span>
        </div>
        <h3 class="timeline-item-title">Mi Nueva Tarea</h3>
        <p class="timeline-item-description">Descripción de mi nueva tarea</p>
        <div class="timeline-item-meta">
            <span class="timeline-category">Proyecto</span>
            <button class="timeline-link" onclick="openTimelineModal('Mi Nueva Tarea', 'Descripción de mi nueva tarea', 'Proyecto', 'Dec 29, 2025', 'todo')">
                <i class="fas fa-info-circle"></i> Ver más
            </button>
        </div>
    </div>
</div>
```

### **2. Estados Disponibles:**

#### **Pendiente (Gris):**
```html
<span class="status-badge status-todo">
    <i class="fas fa-circle"></i> Pendiente
</span>
```

#### **En Proceso (Amarillo):**
```html
<span class="status-badge status-inprocess">
    <i class="fas fa-clock"></i> En Proceso
</span>
```

#### **Completado (Verde - se oculta automáticamente):**
```html
<span class="status-badge status-done">
    <i class="fas fa-check"></i> Completado
</span>
```

### **3. Categorías Disponibles:**
- **Proyecto**: Nuevos proyectos y desarrollos
- **Educación**: Cursos y aprendizaje
- **Blog**: Artículos y publicaciones
- **Certificación**: Certificaciones obtenidas
- **Conferencia**: Eventos y presentaciones
- **Logro**: Logros profesionales

### **4. Pasos para Agregar Tarea:**

1. **Abre** `layouts/index.html`
2. **Busca** la línea ~67 (timeline-quarter)
3. **Agrega** el código HTML de la nueva tarea
4. **Cambia** los valores según necesites:
   - `data-status`: "todo", "inprocess", "done"
   - `date`: Fecha en formato "Dec 29, 2025"
   - `week-number`: Número de semana
   - `timeline-item-title`: Título de la tarea
   - `timeline-item-description`: Descripción
   - `timeline-category`: Categoría
5. **Reconstruye** con `hugo --buildDrafts`
6. **Verifica** en `http://localhost:1313/`

## 🔧 **Ejemplo Completo:**

```html
<!-- Tarea de Ejemplo -->
<div class="timeline-item" data-status="inprocess">
    <div class="timeline-date">
        <span class="date">Dec 29, 2025</span>
        <span class="week-number">Semana 4</span>
    </div>
    <div class="timeline-content">
        <div class="timeline-status">
            <span class="status-badge status-inprocess">
                <i class="fas fa-clock"></i> En Proceso
            </span>
        </div>
        <h3 class="timeline-item-title">Desarrollo de API REST</h3>
        <p class="timeline-item-description">Estoy desarrollando una API REST avanzada con autenticación JWT y rate limiting</p>
        <div class="timeline-item-meta">
            <span class="timeline-category">Proyecto</span>
            <button class="timeline-link" onclick="openTimelineModal('Desarrollo de API REST', 'Estoy desarrollando una API REST avanzada con autenticación JWT y rate limiting', 'Proyecto', 'Dec 29, 2025', 'inprocess')">
                <i class="fas fa-info-circle"></i> Ver más
            </button>
        </div>
    </div>
</div>
```

## 🚀 **Verificar Resultado:**

1. **Reconstruye** el sitio: `hugo --buildDrafts`
2. **Ve a** `http://localhost:1313/`
3. **Haz click** en el botón del timeline
4. **Verifica** que la nueva tarea aparezca
5. **Prueba** el modal con "Ver más"

## 📝 **Nota Importante:**

Este es un método temporal. En el futuro, se puede implementar un sistema automático que lea los archivos MD, pero por ahora este método funciona perfectamente.

## 🎯 **Ventajas del Método Actual:**

- ✅ **Funciona inmediatamente**
- ✅ **Control total sobre el contenido**
- ✅ **Fácil de personalizar**
- ✅ **No depende de filtros de Hugo**
- ✅ **Timeline completamente funcional**

## 🔮 **Futuro Mejorable:**

En el futuro se puede implementar:
- Lectura automática de archivos MD
- Sistema de plantillas para tareas
- Interfaz de administración
- Sincronización con base de datos

¡Tu timeline funcionará perfectamente agregando tareas manualmente! 🎉
