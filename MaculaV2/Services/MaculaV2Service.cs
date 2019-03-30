using AngleSharp.Html.Parser;
using MaculaV2.Models;
using MaculaV2.Models.Requests;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Web;

namespace MaculaV2.Services
{
    public class MaculaV2Service : IMaculaV2Service
    {

        //VIDEO

        public void DeleteVideo(int id)
        {


            var con = GetSqlConnection();

            var cmd = con.CreateCommand();
            cmd.CommandText = "Videos_Delete";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@id", id);

            cmd.ExecuteNonQuery();
        }


        public List<Video> GetAllVideos()
        {
            // Create a Connection Command
            using (var con = GetSqlConnection())

            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Videos_GetAll";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                using (var reader = cmd.ExecuteReader())
                {
                    var list = new List<Video>();

                    while (reader.Read())
                    {
                        var video = new Video
                        {
                            Id = (int)reader["Id"],
                            DateCreated = (DateTime)reader["DateCreated"],
                            DateModified = (DateTime)reader["DateModified"],
                            Title = (string)reader["Title"],
                            TitleUrl = (string)reader["TitleUrl"],
                            Influencer = (string)reader["Influencer"],
                            VideoService = (string)reader["VideoService"],
                            TotalViews = (int)reader["TotalViews"],

                        };
                        list.Add(video);

                    };
                    return list;
                };

            };
        }

        public int InsertVideo(VideoAddRequest data)
        {
            if (data == null)
            {

                throw new ArgumentNullException("Insert Empty Data Argument");
            }
            var con = GetSqlConnection();

            var cmd = con.CreateCommand();

            cmd.CommandText = "Video_Insert";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Title", data.Title);
            cmd.Parameters.AddWithValue("@TitleUrl", data.TitleUrl);
            cmd.Parameters.AddWithValue("@Influencer", data.Influencer);
            cmd.Parameters.AddWithValue("@VideoService", data.VideoService);
            cmd.Parameters.AddWithValue("@TotalViews", data.TotalViews);
            cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;

            cmd.ExecuteNonQuery();

            return (int)cmd.Parameters["@Id"].Value;
        }

        public void UpdateVideo(VideoUpdateRequest data, int Id)
        {
            if (data == null)
            {
                throw new ArgumentNullException("Update Data Payload from Controller is Null, Check your input data");
            }

            //Set SQL Connection
            var con = GetSqlConnection();
            //Create a Command 
            var cmd = con.CreateCommand();
            //Assign the Command a Proc to Fetch
            cmd.CommandText = "Video_Update";
            cmd.CommandType = CommandType.StoredProcedure;

            // package call Params with param and pay and with db data
            cmd.Parameters.AddWithValue("@Id", Id);
            cmd.Parameters.AddWithValue("@Title", data.Title);
            cmd.Parameters.AddWithValue("@TitleUrl", data.TitleUrl);
            cmd.Parameters.AddWithValue("@Influencer", data.Influencer);
            cmd.Parameters.AddWithValue("@VideoService", data.VideoService);
            cmd.Parameters.AddWithValue("@TotalViews", data.TotalViews);

            cmd.ExecuteNonQuery();

        }

        //Scraper
        public List<Scrape> ScrapeData()
        {
            //Hold result 
            var results = new List<Scrape>();

            //Get HTML
            WebClient webClient = new WebClient();
            string html = webClient.DownloadString("https://hypeauditor.com/top-instagram/?source=imh");

            //CSS Selectors to find the table
            var parser = new HtmlParser();
            var document = parser.ParseDocument(html);
            var table = document.QuerySelector(".tbody");

            //loop every row to an object
            var rows = table.QuerySelectorAll("tr");

            foreach (var row in rows)
            {
                var Scrape = new Scrape();

                Scrape.Rank = row.QuerySelector("td:nth-child(1)").TextContent;
                Scrape.Image = row.QuerySelector("td:nth-child(2)").FirstElementChild.InnerHtml;

                //{Start : RegEx}
                Regex rx = new Regex("(http[s]?:\\/ \\/)?[^\\s([\" <,>]*\\.[^\\s[\",><]*", RegexOptions.Compiled | RegexOptions.IgnoreCase);

                MatchCollection matches = rx.Matches(Scrape.Image);

                var str = matches[0].ToString();

                Scrape.Image = str;
                //{End : RegEx}

                Scrape.Name = row.QuerySelector("td:nth-child(3)").TextContent;
                Scrape.Topic = row.QuerySelector("td:nth-child(4)").TextContent;
                Scrape.Location = row.QuerySelector("td:nth-child(5)").TextContent;
                Scrape.Followers = row.QuerySelector("td:nth-child(6)").TextContent;

                results.Add(Scrape);
            }

           
            foreach (var items in results)
            {
                Console.WriteLine($"Rank={items.Rank}, Image = { items.Image}, Name = {items.Name}, Topic = {items.Topic}, Location = {items.Location}, Followers = {items.Followers}");
            }

            return results;
        }

        //HELPERS
        SqlConnection GetSqlConnection()
        {
            var con = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString);
            con.Open();
            return con;
        }
    }
}
