using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MaculaV2.Models.Requests
{
    public class VideoUpdateRequest : VideoAddRequest
    {
        [Required]
        public int? Id { get; set; }
    }
}