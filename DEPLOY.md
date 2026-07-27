# Desplegar VersaCode en Dokploy

## Repo en GitHub

https://github.com/juanGaitan21/versacode-landing

## GitHub Pages (ya activo, alternativa gratis)

https://juangaitan21.github.io/versacode-landing/ (activar Pages en el repo personal si lo deseas)

---

## Pasos en Dokploy (hazlo en el navegador)

### 1. Conectar GitHub

1. Entra a tu panel Dokploy (la URL de tu servidor).
2. Ve a **Settings** → **Git** → **GitHub**.
3. Clic en **Create GitHub App**.
4. Pon un nombre único, ej: `Dokploy-Trasoft`.
5. Clic **Create GitHub App** → te lleva a instalar en GitHub.
6. En GitHub: **Install** → elige tu cuenta **juanGaitan21**.
7. Repositorios: **Only select** → marca `versacode-landing`.
8. **Install & Authorize**.

### 2. Crear la aplicación

1. En Dokploy: **Projects** → tu proyecto (o crea uno, ej. `VersaCode`).
2. **Create Service** → **Application**.
3. **General**:
   - Nombre: `versacode-web`
4. **Source**:
   - Type: **Git**
   - Provider: **GitHub**
   - Cuenta: **juanGaitan21** (Personal)
   - Repository: **versacode-landing**
   - Branch: **main**
5. **Build**:
   - Build type: **Dockerfile**
   - Dockerfile path: `./Dockerfile` (raíz)
6. **Deploy**:
   - Puerto del contenedor: **80**
   - Activa **Auto Deploy** (cada push despliega solo)

### 3. Dominio (opcional)

1. En la app → pestaña **Domains**.
2. Agrega tu dominio, ej. `versacode.tudominio.com`.
3. En tu DNS: registro **A** o **CNAME** apuntando al servidor Dokploy.
4. Activa **HTTPS** (Let's Encrypt) en Dokploy.

### 4. Desplegar

1. Clic **Deploy**.
2. Revisa **Logs** hasta ver que nginx arrancó.
3. Abre la URL que Dokploy te muestra.

---

## Si algo falla

- **No aparece el repo**: reinstala la GitHub App y da acceso a `versacode-landing`.
- **Build falla**: confirma que el Dockerfile está en la raíz del repo en GitHub.
- **Auto deploy no corre**: en GitHub App, la Webhook URL debe ser tu dominio Dokploy (no solo IP).
