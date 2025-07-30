using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using mi_api_dotnet.Services;

namespace mi_api_dotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly JwtService _jwtService;

        // Usuarios dummy
        private static readonly List<UserModel> DummyUsers = new List<UserModel>
        {
            new UserModel { Username = "admin", Password = "admin123", Role = "Admin" },
            new UserModel { Username = "user", Password = "user123", Role = "User" }
        };

        public AuthController(JwtService jwtService)
        {
            _jwtService = jwtService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] UserModel userModel)
        {
            var user = DummyUsers.FirstOrDefault(u =>
                u.Username == userModel.Username && u.Password == userModel.Password);

            if (user == null)
                return Unauthorized(new { Message = "Credenciales inválidas." });

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role)
            };

            var token = _jwtService.GenerateToken(claims);

            return Ok(new { Token = token });
        }

        [HttpGet("admin-only")]
        [Authorize(Roles = "Admin")]
        public IActionResult AdminOnly()
        {
            return Ok(new { Message = "¡Acceso concedido solo para Admin!" });
        }
    }
}