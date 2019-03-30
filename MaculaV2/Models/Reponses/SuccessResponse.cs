using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MaculaV2.Models.Reponses
{
    public class SuccessResponse : BaseResponse
    {
        public SuccessResponse()
        {

            this.IsSuccessful = true;
        }
    }
}