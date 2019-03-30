using MaculaV2.Models;
using MaculaV2.Models.Reponses;
using MaculaV2.Models.Requests;
using MaculaV2.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.OAuth;

namespace MaculaV2.Controllers
{
    [AllowAnonymous ] 
    [RoutePrefix("api/maculaV2")]
    public class MaculaV2Controller : BaseApiController
    {

        readonly IMaculaV2Service _service;

        //public MaculaV2Controller()
        //{
            
        //}

        public MaculaV2Controller(IMaculaV2Service service)
        {
            _service = service;
        }

        [HttpGet, Route("{videos}")]
        public List<Video> GetAllVideos()
        {
            return _service.GetAllVideos();
        }

        [HttpPost, Route("{video}")]
        public HttpResponseMessage Insert(VideoAddRequest model)
        {
            if (!ModelState.IsValid)
            {
                return CreateErrorResponse();
            }

            SuccessResponse success = new SuccessResponse();

            _service.InsertVideo(model);
            return Request.CreateResponse(HttpStatusCode.Created, success);
        }

        [HttpDelete, Route("{video}/{id:int}")]
        public HttpResponseMessage Delete(int id)
        {
            _service.DeleteVideo(id);
            SuccessResponse success = new SuccessResponse();
            return Request.CreateResponse(HttpStatusCode.Created, success);
        }

        [HttpPut, Route("{video}/{id:int}")]
        public HttpResponseMessage Update(VideoUpdateRequest model, int id)
        {
            if (!ModelState.IsValid)
            {
                return CreateErrorResponse();
            }
            SuccessResponse success = new SuccessResponse();
            _service.UpdateVideo(model, id);

            return Request.CreateResponse(System.Net.HttpStatusCode.Created, success);
        }

    }
}
