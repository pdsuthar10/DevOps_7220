using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace rockstar_webapi.Controllers
{
    [ApiController]
    public class MusicController : ControllerBase
    {
        private readonly Music _myMusic = new Music();

        private readonly ILogger<MusicController> _logger;

        public MusicController(ILogger<MusicController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("[controller]")]
        public String Get()
        {
            return "<h1>My Jukebox!</h1>";
        }

        [HttpGet]
        [Route("[controller]/o-sanam")]
        public String GetOSanam()
        {
            return _myMusic.OSanam;
        }

        [HttpGet]
        [Route("[controller]/laari-chootee")]
        public String GetLaariChooti()
        {
            return _myMusic.LaariChooti;
        }

        [HttpGet]
        [Route("[controller]/despacito")]
        public String GetDespacito()
        {
            return _myMusic.Despacito;
        }

        [HttpGet]
        [Route("/health")]
        public String GetHealth()
        {
            return "Hello from Rockstar Dotnet WebAPI! Have a good day ahead!";
        }

    }
}
