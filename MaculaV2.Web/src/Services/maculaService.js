import axios from "axios";

// Base Url

//RESOURCE
const basePath = "/api/maculaV2/";
const basePath2 = "/api/maculaV2/videos";
const basePath4 = "/api/maculaV2/video/";
const basePath3 = "/api/scraper/";

//AUTH
const authToken = "/token";
const authPath = "/api/Account/Register";

//HEADERS
var headers = { "Content-Type": "application/json" };

// AXIOS
const getAll = () => {
  let url = basePath;
  const config = {
    headers,
    method: "GET",
    withCredentials: true,
    crossdomain: true
  };
  return axios(url, config);
};

const getAllVideo = header => {
  let url = basePath2;
  let headers = header;
  let config = {
    headers,
    method: "GET",
    withCredentials: true,
    crossdomain: true
  };
  return axios(url, config);
};

const regNewUser = payload => {
  let url = authPath;
  const config = {
    headers,
    method: "POST",
    data: payload,
    withCredentials: true,
    crossdomain: true
  };
  return axios(url, config);
};
const login = payload => {
  let url = authToken;
  const config = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: "POST",
    data: Object.keys(payload)
      .map(function(key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(payload[key]);
      })
      .join("&"),
    withCredentials: true,
    crossdomain: true
  };
  return axios(url, config);
};

const addUser = payload => {
  let url = basePath;
  const config = {
    headers,
    method: "POST",
    data: payload,
    withCredentials: true,
    crossdomain: true
  };
  return axios(url, config);
};

const addVideo = payload => {
  let url = basePath4;
  const config = {
    headers,
    method: "POST",
    data: payload,
    withCredentials: true,
    crossdomain: true
  };
  return axios(url, config);
};

const updateVideo = (payload, id) => {
  let url = basePath2 + id;
  const config = {
    headers,
    method: "PUT",
    data: payload,
    withCredentials: true,
    crossdomain: true
  };
  return axios(url, config);
};

const deleteVideo = id => {
  let url = basePath2 + id;
  const config = {
    headers,
    method: "DELETE",
    withCredentials: true,
    crossdomain: true
  };
  return axios(url, config);
};

const getScrapeData = header => {
  let url = basePath3;

  let headers = header;
  const config = {
    headers,
    method: "GET",
    withCredentials: true,
    crossdomain: true
  };
  return axios(url, config);
};

export {
  getAll,
  regNewUser,
  getScrapeData,
  deleteVideo,
  addVideo,
  updateVideo,
  addUser,
  getAllVideo,
  login
};
