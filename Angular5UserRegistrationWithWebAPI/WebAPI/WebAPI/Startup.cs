using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(WebAPI.Startup))]

namespace WebAPI
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
           
        }
    }
}
