using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class UserController : ApiController
    {
        [HttpGet]
        [Route("api/GetAllUsers")]
        [AllowAnonymous]
      
        public HttpResponseMessage GetUsers()
        {
         
            var _context = new ApplicationDbContext();
            var allUsers = _context
                .Users.Select( x=> new { x.FirstName, x.LastName,x.Email,x.UserName,x.Roles})
                .ToList();
            return this.Request.CreateResponse(HttpStatusCode.OK, allUsers);

        }
    }
}
