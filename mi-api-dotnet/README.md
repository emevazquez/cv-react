# Mi API .NET Core 7 con Autenticación JWT

Este proyecto es una API construida con .NET Core 7 que implementa autenticación utilizando tokens JWT. La API permite a los usuarios registrarse e iniciar sesión, generando tokens que contienen roles y otros claims.

## Estructura del Proyecto

El proyecto contiene los siguientes archivos y carpetas:

- **Controllers/AuthController.cs**: Controlador que maneja las solicitudes de autenticación. Incluye métodos para `Login` y `Register`.
- **Models/UserModel.cs**: Modelo que representa la estructura de un usuario, incluyendo propiedades como `Id`, `Username`, `Password` y `Roles`.
- **Services/JwtService.cs**: Servicio que se encarga de la generación y validación de tokens JWT. Incluye métodos como `GenerateToken` y `ValidateToken`.
- **Program.cs**: Punto de entrada de la aplicación que configura y arranca el servidor web.
- **Startup.cs**: Configura los servicios y el middleware de la aplicación, incluyendo la autenticación JWT.
- **appsettings.json**: Archivo de configuración que contiene la cadena de conexión a la base de datos y la configuración de JWT.

## Instrucciones para Configurar y Ejecutar la API

1. **Clonar el Repositorio**: Clona este repositorio en tu máquina local.
   ```
   git clone <url-del-repositorio>
   ```

2. **Instalar Dependencias**: Navega a la carpeta del proyecto y ejecuta el siguiente comando para restaurar las dependencias.
   ```
   dotnet restore
   ```

3. **Configurar appsettings.json**: Asegúrate de configurar correctamente el archivo `appsettings.json` con la cadena de conexión a tu base de datos y la clave secreta para JWT.

4. **Ejecutar la Aplicación**: Usa el siguiente comando para ejecutar la API.
   ```
   dotnet run
   ```

5. **Probar la API**: Puedes usar herramientas como Postman o cURL para probar los endpoints de autenticación.

## Ejemplos de Uso

- **Registro de Usuario**: Envía una solicitud POST a `/api/auth/register` con los datos del usuario.
- **Inicio de Sesión**: Envía una solicitud POST a `/api/auth/login` con las credenciales del usuario para obtener un token JWT.

## Notas

Asegúrate de tener instalado .NET Core 7 en tu máquina para poder ejecutar este proyecto.