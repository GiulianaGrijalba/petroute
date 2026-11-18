# Publicar PetRoute en GitHub

El scaffold está listo para subirlo a un repositorio GitHub nuevo. El repositorio remoto no se crea automáticamente desde este entorno.

## 1. Crear el repositorio

En GitHub, crear un repositorio llamado `petroute`. Para evitar conflictos con el scaffold local, crearlo vacío: no agregar README, licencia ni `.gitignore` desde GitHub.

## 2. Preparar el proyecto local

Extraer el ZIP y abrir una terminal en la carpeta `petroute/`:

```bash
git init -b main
git add .
git commit -m "chore: bootstrap PetRoute monorepo"
```

## 3. Conectar el repositorio remoto

Reemplazar `<tu-usuario>` por el usuario u organización de GitHub:

```bash
git remote add origin https://github.com/<tu-usuario>/petroute.git
git push -u origin main
```

## 4. Primer setup en tu equipo

```bash
cd frontend
npm install
cp .env.example .env.local
```

Guardar `frontend/package-lock.json` en el siguiente commit. Luego, desde la carpeta `backend/`, ejecutar `dotnet restore PetRoute.sln` y `dotnet build PetRoute.sln` con .NET SDK 10 instalado.

## 5. Verificar CI

Al hacer push a `main` o abrir un pull request, `.github/workflows/ci.yml` ejecuta lint, typecheck y build del frontend, además de restore, build y tests del backend.
