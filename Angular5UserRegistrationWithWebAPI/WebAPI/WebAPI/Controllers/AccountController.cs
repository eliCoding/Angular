using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class AccountController : ApiController
    {
      
     
        [HttpPost]
        [Route("api/User/Register")]
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


            return result;



        }

    }
}
