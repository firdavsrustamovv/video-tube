import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// const options = {
//   params: {
//     path: "/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50",
//   },
//   headers: {
//     "x-rapidapi-key": "b634c1bdaamsh232aca2bb9f6ff0p1f9244jsn7090b2f8196a",
//     "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
//   },
// };

const option = {
  headers: {
    "x-rapidapi-key": "b634c1bdaamsh232aca2bb9f6ff0p1f9244jsn7090b2f8196a",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, option);
    return response.data;
  },
};
