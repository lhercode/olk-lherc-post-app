# Badges de Certificaciones

Este directorio contiene las insignias (badges) de tus certificaciones.

## Cómo agregar una nueva certificación

1. **Obtén la imagen de tu insignia**: 
   - Descarga la imagen oficial de tu certificación desde el proveedor (AWS, Google Cloud, etc.)
   - Formatos recomendados: PNG con transparencia o JPG
   - Tamaño recomendado: 500x500 píxeles o mayor

2. **Agrega la imagen a este directorio**:
   - Copia tu archivo de imagen a: `static/images/badges/`
   - Usa nombres descriptivos (ej: `aws-solutions-architect.png`)

3. **Actualiza el archivo config.toml**:
   ```toml
   [[params.certifications]]
   name = "Nombre de la Certificación"
   issuer = "Organización que la emite"
   date = "Mes Año"
   badge = "/images/badges/nombre-archivo.png"
   credential_url = "https://url-credencial.com"
   ```

## Dónde conseguir las insignias

- **AWS**: https://aws.amazon.com/certification/
- **Google Cloud**: https://cloud.google.com/certification
- **Microsoft Azure**: https://learn.microsoft.com/en-us/certifications/
- **Docker**: https://www.docker.com/certification/
- **Kubernetes**: https://www.cncf.io/certification/
- **Credly**: Si tus certificaciones están en Credly, puedes descargar las insignias desde tu perfil

## Placeholder temporal

Si aún no tienes las imágenes de tus insignias, puedes usar servicios como:
- https://via.placeholder.com/500x500
- Crear insignias temporales con herramientas de diseño

Las insignias se mostrarán automáticamente en la sección de certificaciones de tu página.

