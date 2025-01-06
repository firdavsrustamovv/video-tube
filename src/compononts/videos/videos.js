import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "../index";

const Videos = ({ videos }) => {
  if (!videos?.length) {
    return <Loader />;
  }
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      {videos.map((iteam) => (
        <Box key={iteam.id.videoId || iteam.id.playlistId}>
          {iteam.id.videoId && <VideoCard videos={iteam} />}
          {iteam.id.channelId && <ChannelCard videos={iteam} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
