using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MaculaV2.Models.Requests
{
    public class MaculaAddRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }
}