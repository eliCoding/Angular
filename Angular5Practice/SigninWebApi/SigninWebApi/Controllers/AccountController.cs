using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using SigninWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SigninWebApi.Controllers
{
    public class AccountController : ApiController
    {

        [Route("api/User/Sigin")]
        [HttpPost]

        public IdentityResult Signin(Account model)
        {

            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            var manager = new UserManager<ApplicationUser>(userStore);

            // create an object of application user
            var user = new ApplicationUser() { UserName = model.UserName };

       

            //to create the user with the given details (password)
            IdentityResult result = manager.Create(user, model.Password);


            return result;
        }

    }
}
