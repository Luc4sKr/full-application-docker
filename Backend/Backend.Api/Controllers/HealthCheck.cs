using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers
{
    [ApiController]
[Route("api/[controller]")]
    public class HealthCheck : Controller
    {
        [HttpGet]
        public ActionResult Get()
        {
            return Ok();
        }

        [HttpGet("message")]
        public ActionResult<string> Message()
        {
            return Ok("Backend operante");
        }
    }
}