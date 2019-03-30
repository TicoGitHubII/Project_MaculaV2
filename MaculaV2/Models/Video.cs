using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MaculaV2.Models
{
    public class Video
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public string Title { get; set; }
        public string TitleUrl { get; set; }
        public string Influencer { get; set; }
        public string VideoService { get; set; }
        public int TotalViews { get; set; }

    }
}