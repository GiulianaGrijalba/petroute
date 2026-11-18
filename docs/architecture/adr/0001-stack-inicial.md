# ADR 0001 — Stack inicial

- Estado: Aceptado
- Fecha: 2026-11-18

## Contexto

PetRoute tiene que ser un proyecto de portfolio que demuestre desarrollo backend con C#/.NET y aproveche la experiencia existente en React/Next.js.

## Decisión

- Next.js + TypeScript para el frontend responsive/PWA.
- ASP.NET Core Web API en .NET 10 LTS para el backend.
- PostgreSQL como base de datos.
- Entity Framework Core como ORM.
- Docker para entorno local reproducible.
- xUnit para pruebas automatizadas.

## Consecuencias

El frontend y el backend pueden desplegarse y escalarse de forma independiente. El backend mantiene la lógica de negocio y las reglas; Next.js no duplicará ni sustituirá esa lógica.
