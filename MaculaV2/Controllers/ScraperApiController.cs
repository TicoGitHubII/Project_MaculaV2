using MaculaV2.Models;
using MaculaV2.Models.Reponses;
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
{   [AllowAnonymous]
    [RoutePrefix("api/scraper")]
    public class ScraperApiController : ApiController
    {
       
            IMaculaV2Service _service = null;

            public ScraperApiController(IMaculaV2Service service)
            {
                _service = service;
            }

            [Route, HttpGet]
            public HttpResponseMessage GetScrape()
            {
                ItemsResponse<Scrape> response = new ItemsResponse<Scrape>();
                response.Items = _service.ScrapeData();
                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
        
    }



}

