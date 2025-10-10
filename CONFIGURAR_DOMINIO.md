# 🌐 Configurar Dominio Personalizado

Esta guía te ayudará a configurar tu dominio personalizado `lherc.com` para que apunte a tu sitio de GitHub Pages.

## ✅ Cambios Completados en el Repositorio

- ✓ `baseURL` actualizado a `https://lherc.com/`
- ✓ Archivo `CNAME` creado con `lherc.com`
- ✓ Sitio regenerado con las nuevas URLs

## 🔧 Configuración Requerida en tu Proveedor de DNS

Ahora necesitas configurar los registros DNS en tu proveedor de dominio (GoDaddy, Namecheap, Cloudflare, etc.).

### Opción 1: Dominio Apex (lherc.com - Recomendado)

Agrega los siguientes registros DNS:

#### Registros A (Apex Domain)
```
Tipo: A
Host: @
Valor: 185.199.108.153
TTL: 3600 (o automático)

Tipo: A
Host: @
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Host: @
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Host: @
Valor: 185.199.111.153
TTL: 3600
```

#### Registro CNAME (www)
```
Tipo: CNAME
Host: www
Valor: lhercode.github.io
TTL: 3600
```

### Opción 2: Solo Subdominio www (www.lherc.com)

Si prefieres usar solo el subdominio www:

```
Tipo: CNAME
Host: www
Valor: lhercode.github.io
TTL: 3600
```

Y actualiza el archivo `config.toml`:
```toml
baseURL = 'https://www.lherc.com/'
```

Y el archivo `static/CNAME`:
```
www.lherc.com
```

## 🔒 Configurar HTTPS en GitHub Pages

1. Ve a tu repositorio en GitHub
2. Navega a **Settings** → **Pages**
3. En **Custom domain**, ingresa: `lherc.com`
4. Haz clic en **Save**
5. Espera unos minutos y marca la opción **Enforce HTTPS**

## ⏱️ Tiempo de Propagación

- **DNS**: 5 minutos a 48 horas (típicamente 1-2 horas)
- **HTTPS**: 10-30 minutos después de la propagación DNS

## 🧪 Verificar la Configuración

### 1. Verificar DNS (después de propagar)

En tu terminal, ejecuta:
```bash
# Verificar registros A
dig lherc.com +short

# Verificar CNAME de www
dig www.lherc.com +short
```

Deberías ver las IPs de GitHub Pages o `lhercode.github.io`.

### 2. Verificar en el Navegador

Abre estas URLs:
- https://lherc.com
- https://www.lherc.com
- http://lherc.com (debería redirigir a https)

## 📝 Ejemplos por Proveedor

### GoDaddy
1. Inicia sesión en GoDaddy
2. Ve a **My Products** → **DNS**
3. Agrega los registros A y CNAME como se indicó arriba

### Namecheap
1. Inicia sesión en Namecheap
2. Ve a **Domain List** → selecciona tu dominio → **Advanced DNS**
3. Agrega los registros A y CNAME

### Cloudflare
1. Inicia sesión en Cloudflare
2. Selecciona tu dominio
3. Ve a **DNS** → **Records**
4. Agrega los registros A y CNAME
5. **Importante**: Desactiva el proxy (nube gris) para los registros al inicio
6. Después de verificar que funciona, puedes activar el proxy

### Google Domains / Cloud DNS
1. Inicia sesión en Google Domains
2. Ve a **DNS**
3. En **Registros de recursos personalizados**, agrega los registros

## 🚨 Problemas Comunes

### "Domain's DNS record could not be retrieved"
- **Causa**: Los registros DNS aún no se han propagado
- **Solución**: Espera 1-2 horas y vuelve a intentar

### "HTTPS not available yet"
- **Causa**: El certificado SSL aún se está generando
- **Solución**: Espera 10-30 minutos después de que el DNS se haya propagado

### El sitio muestra 404
- **Causa**: El archivo CNAME no está en la carpeta `public/`
- **Solución**: Verifica que existe `static/CNAME`, regenera con `hugo` y haz push

### Redirige a GitHub Pages
- **Causa**: GitHub Pages aún no reconoce el dominio personalizado
- **Solución**: Ve a Settings → Pages y configura el custom domain manualmente

## 📊 Checklist Final

Antes de considerar la configuración completa:

- [ ] Registros DNS agregados en el proveedor
- [ ] DNS propagado (verificado con `dig`)
- [ ] Custom domain configurado en GitHub Pages
- [ ] HTTPS activado en GitHub Settings → Pages
- [ ] https://lherc.com carga correctamente
- [ ] https://www.lherc.com carga correctamente
- [ ] CSS y recursos se cargan correctamente
- [ ] Certificaciones e imágenes visibles

## 🔄 Reverting (Volver a GitHub Pages)

Si necesitas volver al dominio de GitHub Pages:

1. Edita `config.toml`:
   ```toml
   baseURL = 'https://lhercode.github.io/olk-lherc-post-app/'
   ```

2. Elimina el archivo `static/CNAME`:
   ```bash
   rm static/CNAME
   ```

3. Regenera y publica:
   ```bash
   hugo
   git add .
   git commit -m "Revertir a dominio de GitHub Pages"
   git push origin main
   ```

4. En GitHub Settings → Pages, elimina el custom domain

## 📚 Referencias Útiles

- [GitHub Pages - Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages - IP Addresses](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)
- [Hugo - BaseURL Configuration](https://gohugo.io/getting-started/configuration/#baseurl)

---

**Nota**: Recuerda que después de cambiar el dominio, todas las URLs antiguas con `lhercode.github.io/olk-lherc-post-app/` dejarán de funcionar. Actualiza cualquier enlace que hayas compartido.

