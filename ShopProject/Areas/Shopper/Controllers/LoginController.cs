using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShopProject.Areas.Shopper.Controllers
{
    public class LoginController : Controller
    {
        // GET: Shopper/Login
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult DK()
        {
            return View();
        }
    }
}