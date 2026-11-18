# Arquitectura inicial

## Decisiones

- Repositorio único (monorepo) con aplicaciones separadas.
- Frontend: Next.js App Router + TypeScript.
- Backend: ASP.NET Core Web API en .NET 10 LTS.
- Persistencia prevista: PostgreSQL + Entity Framework Core.
- Contrato de integración: HTTP/REST con OpenAPI.
- PWA: manifest desde el inicio; service worker, offline y push se implementarán cuando existan flujos que lo necesiten.

## Límites

```text
Browser / PWA
    |
    | HTTPS + JSON
    v
PetRoute.Api  ---> PetRoute.Application ---> PetRoute.Domain
    |
    v
PetRoute.Infrastructure ---> PostgreSQL
```

- `Domain`: entidades, value objects y reglas de dominio; sin dependencias de infraestructura.
- `Application`: casos de uso, contratos y orquestación.
- `Infrastructure`: persistencia e integraciones externas.
- `Api`: endpoints HTTP, autenticación, configuración, OpenAPI y composición de dependencias.
- `UnitTests`: pruebas de dominio y aplicación. Se agregarán tests de integración para la API.

## Regla crítica de confianza

Una regla de viaje sólo podrá publicarse como confirmada si tiene fuente identificable, jurisdicción, ámbito de aplicación, fecha efectiva y fecha de última verificación. Las reglas sin esos datos deben quedar en estado no verificado y no generar una conclusión de elegibilidad.
