using System.Web.Mvc;
using System.Web.Routing;

namespace ShopProject.Areas.Administrator
{
    public class AdministratorAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Administrator";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Administrator_default",
                "Administrator/{controller}/{action}/{id}",
                new {controller="Account", action = "Login", id = UrlParameter.Optional }
            );
        }
    }
}