using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MaculaV2.Models.Reponses
{
    public class ItemsResponse<T> : SuccessResponse
    {
        public List<T> Items { get; set; }
    }
}