import { Stack, Box, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Category, Videos } from "../index";
import { ApiService } from "../../service/api.service";
function Main() {
  const [selectedCategory, setSelectedCategory] = useState("Html");
  const [videos, setVideos] = useState([]);
  const selectedCategoryHandler = (category) => setSelectedCategory(category);
  useEffect(() => {
    ApiService.fetching(
      `search?q=${selectedCategory}&part=snippet%2Cid&regionCode=UZ&maxResults=40&order=date`
    )

      .then((data) => setVideos(data.items))
      .catch((err) => console.log(err));
  }, [selectedCategory]);

  return (
    <Stack>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />

      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth="90%">
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectedCategory} <span style={{ color: "red" }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
}

export default Main;
