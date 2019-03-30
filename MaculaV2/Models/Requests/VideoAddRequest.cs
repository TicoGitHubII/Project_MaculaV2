using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MaculaV2.Models.Requests
{
    public class VideoAddRequest
    {
        public string Title { get; set; }
        public string TitleUrl { get; set; }
        public string Influencer { get; set; }
        public string VideoService { get; set; }
        public int TotalViews { get; set; }

    }
}