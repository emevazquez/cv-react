# Copilot Instructions for cv-react Workspace

## Arquitectura General

Este repositorio contiene dos proyectos principales:
- **cv-react/**: Frontend en React (Create React App) para un CV interactivo.
- **mi-api-dotnet/**: Backend API en .NET 7 (compatible .NET Core) con autenticación JWT basada en roles.

## mi-api-dotnet (API .NET 7)
- **Controladores**: `Controllers/AuthController.cs` maneja login y endpoints protegidos por roles usando `[Authorize(Roles = ...)]`.
- **Usuarios Dummy**: Se usan usuarios hardcodeados en `AuthController` para pruebas rápidas de autenticación y roles.
- **JWT**: El servicio `Services/JwtService.cs` genera tokens JWT con claims de rol (`ClaimTypes.Role`).
- **Configuración JWT**: Las claves y parámetros están en `appsettings.json` bajo la sección `Jwt`. La clave secreta debe tener al menos 32 caracteres para HS256.
- **Inyección de dependencias**: `JwtService` se registra como singleton y recibe `IConfiguration` para leer la configuración.
- **Swagger**: Está habilitado y configurado para permitir autenticación Bearer. Puedes probar endpoints protegidos pegando el token en el botón Authorize.
- **Program.cs**: Toda la configuración de servicios y middlewares está centralizada aquí (no se usa Startup.cs en ejecución, aunque existe).

## cv-react (Frontend React)
- Proyecto estándar Create React App. Scripts principales: `npm start`, `npm test`, `npm run build`.
- No hay integración directa con la API en el código base actual, pero la estructura permite agregar llamadas a la API fácilmente.

## Flujos de desarrollo
- **API**: 
  - Restaurar dependencias: `dotnet restore`
  - Ejecutar: `dotnet run` (desde `mi-api-dotnet`)
  - Probar endpoints: Usar Swagger en `/swagger` o herramientas como Postman/curl.
- **Frontend**:
  - Instalar dependencias: `npm install` (en `cv-react`)
  - Ejecutar: `npm start`

## Convenciones y patrones
- Los endpoints protegidos usan `[Authorize(Roles = "Admin")]` y el claim de rol se genera con `ClaimTypes.Role`.
- Los modelos están en `Models/`, los servicios en `Services/`.
- La configuración sensible (claves, issuer, audience) está en `appsettings.json`.
- No hay base de datos real: los usuarios son dummy.

## Ejemplo de flujo JWT
1. POST `/api/Auth/login` con usuario y contraseña (admin/admin123 o user/user123).
2. Copia el token JWT devuelto.
3. Haz clic en Authorize en Swagger y pega: `Bearer <token>`.
4. Prueba `/api/Auth/admin-only` (solo accesible con rol Admin).

## Dependencias externas
- `Microsoft.AspNetCore.Authentication.JwtBearer` versión 7.x
- `System.IdentityModel.Tokens.Jwt`
- Swashbuckle para Swagger

## Notas
- Si cambias la clave secreta, reinicia la API y genera nuevos tokens.
- Si ves 401 en endpoints protegidos, revisa que el claim de rol esté bien configurado y el token sea válido.

---
¿Falta algún flujo, convención o integración importante? Por favor, indícalo para mejorar estas instrucciones.
