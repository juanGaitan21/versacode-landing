# Juan Gaitán — Página web de servicios tecnológicos personales

Sitio web interactivo para ofrecer soluciones de tecnología: inventarios, pedidos, catálogos, chatbots, facturación electrónica, georeferenciación y más.

## Ver en local

### Opción 1: Abrir directamente
Abre `index.html` en tu navegador (doble clic o arrastrar al navegador).

### Opción 2: Servidor local (recomendado)
```bash
cd "/Users/juangaitan/Documents/trasoft/Pagina web juan"
python3 -m http.server 8080
```
Luego visita: **http://localhost:8080**

### Opción 3: Live Server (VS Code / Cursor)
Instala la extensión "Live Server" y haz clic en "Go Live".

## Estructura

```
├── index.html      # Página principal
├── css/
│   └── styles.css  # Estilos y animaciones
├── js/
│   └── main.js     # Interactividad (tabs, demos, formulario)
└── README.md
```

## Secciones

- **Hero** — Panel animado con métricas simuladas
- **Servicios** — 8 módulos con enlace a demos
- **Sectores** — Salud, contadores, abogados, empresas
- **Demos** — Animaciones de inventario, pedidos, chatbot, facturación y GPS
- **Contacto** — Formulario (demo local; conectar backend al desplegar)

## Desplegar en tu servidor

1. Sube todos los archivos por FTP/SFTP o panel de hosting.
2. Apunta el dominio a la carpeta donde está `index.html`.
3. Actualiza en `index.html` el correo y teléfono de contacto.
4. (Opcional) Conecta el formulario a un backend o servicio como Formspree, EmailJS o tu API.

## Personalizar

- **Marca:** Busca "Juan Gaitán" en `index.html` si quieres otro nombre o correo.
- **Colores:** Edita las variables CSS en `:root` dentro de `css/styles.css`.
- **Videos reales:** Puedes reemplazar las demos animadas por `<video>` en la sección `#demos`.
