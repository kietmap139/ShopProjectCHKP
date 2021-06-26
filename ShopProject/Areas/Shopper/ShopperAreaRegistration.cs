using System.Web.Mvc;
using System.Web.Routing;

namespace ShopProject.Areas.Shopper
{
    public class ShopperAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Shopper";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Shopper_default",
                "Administrato/{controller}/{action}/{id}",
                new {controller ="Home",action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}