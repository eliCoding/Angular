using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Collections.Generic;
using System.Security.Claims;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class AccountController : ApiController
    {
      
     
        [HttpPost]
        [Route("api/User/Register")]
        [AllowAnonymous]
        public IdentityResult Register(AccountModel model)

        {
            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            var manager = new UserManager<ApplicationUser>(userStore);

            // create an object of application user
            var user = new ApplicationUser() { UserName = model.UserName, Email = model.Email };

            // in order to pass value for extra parameters
            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            // inordfer to modify default password validation 
            manager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 3

            };


            //to create the user with the given details (password)
            IdentityResult result = manager.Create(user, model.Password);

            // add new user in the UserRole table
            manager.AddToRoles(user.Id, model.Roles);

            return result;



        }


        //this api method returns the claims of current user
        [HttpGet]
        [Route("api/GetUserClaims")]
    

        public AccountModel GetUserClaims()
       {
            var identityClaims = (ClaimsIdentity)User.Identity;
            IEnumerable<Claim> claims = identityClaims.Claims;
            AccountModel model = new AccountModel()
            {
                UserName = identityClaims.FindFirst("Username").Value,
                Email = identityClaims.FindFirst("Email").Value,
                FirstName = identityClaims.FindFirst("FirstName").Value,
                LastName = identityClaims.FindFirst("LastName").Value,
                LoggedOn = identityClaims.FindFirst("LoggedOn").Value
            };
            return model;


        }
    }
}
