﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Status { get; set; }
        public string Towers { get; set; }
        public string Floors { get; set; }
        public ApplicationUser User { get; set; }
        //public   int? UserId { get; set; }



    }
}