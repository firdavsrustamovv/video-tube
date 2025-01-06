import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ApiService } from "../../service/api.service";
import { Box, Container } from "@mui/material";
import { ChannelCard, Videos } from "../index";

function Channel() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [video, setVideos] = useState(null);

  useEffect(() => {
    ApiService.fetching(`channels?part=snippet%2Cstatistics&id=${id}`)
      .then((data) => setChannelDetail(data.items[0]))
      .catch((err) => console.log(err));
    ApiService.fetching(
      `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
    )
      .then((data) => setVideos(data?.items))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"200px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
          }}
        />
        <ChannelCard videos={channelDetail} marginTop={"-100px"} />
      </Box>
      <Container maxWidth={"90%"}>
        <Videos videos={video} />
      </Container>
    </Box>
  );
}

export default Channel;
