# PetRoute 🐾

**Planificá viajes con tu perro o gato, con requisitos claros y fuentes visibles.**

PetRoute es una aplicación en desarrollo para ayudar a organizar viajes con mascotas desde, hacia y dentro de Argentina. Su objetivo es reunir en un mismo itinerario los requisitos sanitarios, la documentación, las condiciones de cada transportista y los plazos de preparación.

> **Estado:** scaffold inicial. La pantalla actual es una base visual; todavía no calcula requisitos reales ni ofrece asesoramiento veterinario o legal.

## Stack

- Frontend: Next.js 16, React 19, TypeScript y Tailwind CSS 4.
- Backend: ASP.NET Core Web API, C# y .NET 10 LTS.
- Persistencia prevista: PostgreSQL + Entity Framework Core.
- Calidad: xUnit, ESLint, TypeScript y GitHub Actions (CI de frontend y backend).
- Entorno local: Docker Compose.

## Estructura

```text
petroute/
├── frontend/
│   ├── app/                     # Next.js App Router
│   ├── lib/api/                 # Cliente HTTP tipado
│   └── public/                  # Recursos PWA
├── backend/
│   ├── src/
│   │   ├── PetRoute.Api/        # HTTP, OpenAPI y composición
│   │   ├── PetRoute.Application/# Casos de uso y contratos
│   │   ├── PetRoute.Domain/     # Modelo y reglas del dominio
│   │   └── PetRoute.Infrastructure/ # Persistencia e integraciones
│   └── tests/
├── docs/                        # Visión, arquitectura y fuentes
└── docker-compose.yml           # PostgreSQL local
```

## Requisitos locales

- Node.js 22 o superior.
- npm 10 o superior.
- .NET SDK 10.0.404 o un parche posterior de .NET 10.
- Docker Desktop (opcional, para PostgreSQL).

## Ejecutar frontend

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

`npm install` generará `frontend/package-lock.json`; guardar ese archivo en Git para builds reproducibles.

Abrir `http://localhost:3000`.

## Ejecutar API

Desde la carpeta `backend/`:

```bash
dotnet restore PetRoute.sln
dotnet run --project src/PetRoute.Api/PetRoute.Api.csproj --launch-profile http
```

La API queda disponible en `http://localhost:5041`.

- Health check: `GET /api/v1/health`
- OpenAPI en desarrollo: `/openapi/v1.json`

## Base de datos local

Desde la raíz, copiar la configuración de ejemplo y levantar PostgreSQL:

```bash
cp .env.example .env
docker compose up -d postgres
```

La contraseña de ejemplo es sólo para desarrollo local. No reutilizarla en producción.

La conexión y el `DbContext` se incorporarán en el siguiente paso, cuando definamos el primer modelo de dominio y sus migraciones.

## Comprobaciones frontend

Desde `frontend/`:

```bash
npm run lint
npm run typecheck
npm run build
```

## Principios de confianza

- Cada requisito debe mostrar su fuente y fecha de última revisión.
- Los requisitos oficiales y las políticas de transportistas se mantienen separados.
- Una regla sin verificar nunca se presenta como confirmada.
- PetRoute no emite certificados ni garantiza el embarque o el ingreso fronterizo.

Ver [visión del producto](docs/product/vision.md), [arquitectura](docs/architecture/overview.md) y [gobierno de fuentes](docs/data-governance/rule-sources.md).

## Publicar en GitHub

Seguir la [guía de publicación](docs/contributing/github-setup.md) para crear el repositorio remoto y subir la rama `main`.
