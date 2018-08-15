using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class AccountController : ApiController
    {
        private ApplicationDbContext _context;

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

        //[HttpGet]
        //[Authorize(Roles = "Admin")]
        //[Route("api/ForAdminRole")]
        //public string ForAdminROle()
        //{
        //    return "for admin role";
        //}


        //[HttpGet]
        //[Authorize(Roles = "Developer")]
        //[Route("api/ForDeveloperRole")]

        //public string ForDeveloperRole()
        //{
        //    return "for developer role";
        //}



        //Get api/users
        //all users

        //[HttpGet]
        //[Authorize(Roles = "Developer")]
        //[Route("api/GetUsers")]
        //public IQueryable<ApplicationUser> GetUsers()
        //{

        //    return _context.Users;
        //}

        //Get api/user/5
        //users detail
        [ResponseType(typeof(ApplicationUser))]

        public IHttpActionResult GetUser(int id)
        {

            ApplicationUser user = _context.Users.Find(id);

            if(user == null) 
                {
                return NotFound();
            }

            return Ok(user);
        }

        //Put api/users/5
        public IHttpActionResult PutUser(string id, ApplicationUser user)
        {

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        //// POST api/user
        //[ResponseType(typeof(ApplicationUser))]
        //public IHttpActionResult PostUser(ApplicationUser user)
        //{

        //    _context.Users.Add(user);
        //    _context.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = user.Id }, user);
        //}

        // DELETE api/User/5
        [ResponseType(typeof(ApplicationUser))]
        public IHttpActionResult DeleteUser(int id)
        {
            ApplicationUser user = _context.Users.Find(id);
            if (user== null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            _context.SaveChanges();

            return Ok(user);
        }

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        _context.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}


        private bool UserExists(string id)
        {
            return _context.Users.Count(u => u.Id == id) > 0;
        }



    }
}
