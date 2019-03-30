using System.Collections.Generic;
using MaculaV2.Models;
using MaculaV2.Models.Requests;

namespace MaculaV2.Services
{
    public interface IMaculaV2Service
    {
        void DeleteVideo(int id);
        List<Video> GetAllVideos();
        int InsertVideo(VideoAddRequest data);
        List<Scrape> ScrapeData();
        void UpdateVideo(VideoUpdateRequest data, int Id);
    }
}