using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Logging;
using mvc.Models;

namespace mvc.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [Route("/{id?}")]
        [Route("/Home/Index")]
        public IActionResult Index(string id)
        {
            ViewBag.name = id;
            return View();
        }
        
        [Route("/Home/Privacy")]
        public IActionResult Privacy()
        {
            return View();
        }

        [Route("/Home/OSanam")]
        public IActionResult OSanam()
        {
            return View();
        }
        
        [Route("/Home/LaariChootee")]
        public IActionResult LaariChootee()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
