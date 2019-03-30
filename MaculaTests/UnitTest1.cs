using System;
using System.Collections.Generic;
using MaculaV2.Controllers;
using MaculaV2.Models;
using MaculaV2.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace MaculaTests
{
    [TestClass]
    public class UnitTest1
    {
        //[TestMethod]
        //public void TestMethod1()
        //{
            
        //}
        [TestMethod]
        public void TestService()
        {
            var maculaV2Service = new MaculaV2Service();
            var service = maculaV2Service.GetAllVideos();
            Assert.IsTrue(service.Count == 0, "This should be greater than 0");

        }

        // create fake service with moq and test with controller 

        [TestMethod]
        public void TestController()
        {
            //var testService = new MaculaV2Service();
            var moqTest = new List<Video>();
            moqTest.Add(new Video
            {
                Id = 1,
                DateCreated = new DateTime(10/10/2016),
                DateModified = new DateTime(10/10/2016),
                Title = "10/10/2016",
                TitleUrl = "http://go.com",
                Influencer = "tester",
                 VideoService = "test",
                TotalViews = 6 });
            // Create a mock service to serve up the sample data
            var mock = new Mock<IMaculaV2Service>();
            mock.Setup(m => m.GetAllVideos()).Returns(moqTest);

            var mockService = mock.Object;

            var testController = new MaculaV2Controller(mockService);
            var getTest = testController.GetAllVideos();


            Assert.IsTrue(getTest.Count == 1);
            Assert.IsTrue(getTest[0].Id == 1);
            Assert.IsTrue(getTest[0].Influencer == "tester");

        }
    }
}
