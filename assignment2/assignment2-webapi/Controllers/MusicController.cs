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
        [Route("[controller]/OSanam")]
        public String GetOSanam()
        {
            return _myMusic.OSanam;
        }

        [HttpGet]
        [Route("[controller]/LaariChootee")]
        public String GetLaariChooti()
        {
            return _myMusic.LaariChooti;
        }

    }
}
