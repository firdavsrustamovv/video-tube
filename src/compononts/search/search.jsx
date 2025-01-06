import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box, Container, Typography } from "@mui/material";
import { Videos } from "../index";
const Search = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?q=${id}&part=snippet%2Cid&regionCode=US&maxResults=40&order=date`
        );
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  return (
    <Box p={2} sx={{ height: "100vh" }}>
      <Container maxWidth={"90%"}>
        <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
          Search results for <span style={{ color: "red" }}>{id}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Search;
