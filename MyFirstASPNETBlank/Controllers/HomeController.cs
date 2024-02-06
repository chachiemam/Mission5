using Microsoft.AspNetCore.Mvc;

namespace MyFirstASPNETBlank.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calculator()
        {
            return View();
        }
    }
}
