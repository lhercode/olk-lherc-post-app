# 🏆 Cómo Agregar Certificaciones

Esta guía te explica cómo agregar tus certificaciones con sus insignias a tu página web.

## Vista Previa

La sección de certificaciones se muestra entre tus redes sociales y el timeline. Es una sección **colapsable** (como el timeline) con un diseño horizontal de tarjetas que incluye:
- Botón toggle para mostrar/ocultar las certificaciones
- Insignia circular de la certificación (80px)
- Nombre de la certificación
- Organización emisora
- Fecha de obtención
- Enlace a la credencial verificable
- Diseño responsive que se adapta a móviles

## Pasos para Agregar una Nueva Certificación

### 1. Obtén la Imagen de tu Insignia

**Opciones para conseguir tu insignia:**

- **Credly**: Si tu certificación está en Credly, descarga la imagen desde tu perfil
- **AWS**: https://aws.amazon.com/certification/ (descarga desde tu cuenta)
- **Google Cloud**: https://cloud.google.com/certification
- **Microsoft Azure**: https://learn.microsoft.com/en-us/certifications/
- **Docker**: https://www.docker.com/certification/
- **Kubernetes (CNCF)**: https://www.cncf.io/certification/
- **Proveedor directo**: Busca en el sitio oficial de la certificación

**Formatos recomendados:**
- PNG con transparencia (preferido)
- JPG/JPEG
- SVG (ideal para calidad perfecta)
- Tamaño: 500x500 píxeles o mayor

### 2. Agrega la Imagen al Proyecto

1. Copia tu archivo de imagen a: `static/images/badges/`
2. Usa un nombre descriptivo en minúsculas con guiones
   - ✅ `aws-developer-associate.png`
   - ✅ `azure-fundamentals.svg`
   - ❌ `Badge1.png`

### 3. Actualiza el Archivo `config.toml`

Abre el archivo `config.toml` y agrega una nueva entrada en la sección de certificaciones:

```toml
[[params.certifications]]
name = "Nombre Completo de la Certificación"
issuer = "Organización que Emite"
date = "Mes Año"
badge = "images/badges/nombre-archivo.svg"
credential_url = "https://url-de-tu-credencial.com"
```

**Ejemplo real:**

```toml
[[params.certifications]]
name = "AWS Developer Associate"
issuer = "Amazon Web Services"
date = "Diciembre 2025"
badge = "images/badges/aws-developer-associate.png"
credential_url = "https://www.credly.com/badges/tu-credencial-id"
```

### 4. Regenera el Sitio

Ejecuta en la terminal:

```bash
hugo
```

### 5. Previsualiza Localmente (Opcional)

Para ver los cambios antes de publicar:

```bash
hugo server -D
```

Abre tu navegador en `http://localhost:1313/olk-lherc-post-app/`

### 6. Publica los Cambios

```bash
git add .
git commit -m "Agregar certificación: [Nombre de la certificación]"
git push origin main
```

GitHub Actions se encargará automáticamente de desplegar tu sitio actualizado.

## Ejemplo Completo: Agregar una Certificación

Supongamos que obtuviste la **Microsoft Azure Fundamentals (AZ-900)**.

### Paso a Paso:

1. **Descarga la insignia** desde tu cuenta de Microsoft Learn
2. **Guárdala como**: `static/images/badges/azure-fundamentals.png`
3. **Edita `config.toml`** y agrega:

```toml
[[params.certifications]]
name = "Azure Fundamentals (AZ-900)"
issuer = "Microsoft"
date = "Enero 2026"
badge = "images/badges/azure-fundamentals.png"
credential_url = "https://learn.microsoft.com/en-us/users/tu-usuario/credentials/codigo-credencial"
```

4. **Regenera y publica**:

```bash
hugo
git add .
git commit -m "Agregar certificación: Azure Fundamentals AZ-900"
git push origin main
```

## Modificar o Eliminar Certificaciones

### Modificar una certificación existente:

1. Busca la entrada en `config.toml`
2. Edita los campos que desees cambiar
3. Regenera con `hugo` y publica los cambios

### Eliminar una certificación:

1. Busca y elimina toda la entrada `[[params.certifications]]` correspondiente en `config.toml`
2. (Opcional) Elimina la imagen de `static/images/badges/`
3. Regenera con `hugo` y publica los cambios

## Funcionalidad de Toggle (Mostrar/Ocultar)

La sección de certificaciones viene **oculta por defecto** (como el timeline). Los visitantes pueden hacer clic en el botón de flecha para expandir y ver tus certificaciones.

Si prefieres que esté **visible por defecto**:

1. Abre `layouts/index.html`
2. Busca la línea:
   ```html
   <div class="certifications-content" id="certifications-content" style="display: none;">
   ```
3. Cámbiala a:
   ```html
   <div class="certifications-content" id="certifications-content" style="display: block;">
   ```
4. Regenera el sitio con `hugo` y publica los cambios

## Personalizar el Diseño

Si deseas cambiar el aspecto de las certificaciones, edita los estilos en:
- `static/css/style.css` (busca la sección `/* Certifications Section */`)
- `static/js/script.js` (busca la función `toggleCertifications()` para modificar la animación)

## Troubleshooting

**Las insignias no se muestran:**
- Verifica que el nombre del archivo coincida exactamente (incluyendo extensión)
- Asegúrate de que la ruta no tenga `/` al inicio
- Ejemplo correcto: `badge = "images/badges/mi-badge.png"`
- Ejemplo incorrecto: `badge = "/images/badges/mi-badge.png"`

**La certificación no aparece:**
- Verifica que hayas regenerado el sitio con `hugo`
- Revisa que no haya errores de sintaxis en `config.toml`
- Asegúrate de haber cerrado todos los corchetes y comillas

**Errores al hacer push:**
- Verifica que hayas agregado todos los archivos con `git add .`
- Asegúrate de tener permisos para subir cambios al repositorio

## Recursos Adicionales

- **Hugo Documentation**: https://gohugo.io/documentation/
- **TOML Syntax**: https://toml.io/
- **Insignias gratuitas**: https://www.credly.com/ (muchas certificaciones están aquí)

---

¿Necesitas ayuda? Revisa los ejemplos en el archivo `config.toml` o consulta el archivo `static/images/badges/README.md`

