import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import Videos from "../videos/videos";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedvideo, setRelatedVideo] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    ApiService.fetching(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`
    )
      .then((data) => setVideoDetail(data.items[0]))
      .catch((err) => console.log(err));
    ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setRelatedVideo(data.items))
      .catch((err) => console.log(err));
  }, [id]);
  // if (!videoDetail) return <div>Loading...</div>;
  // if (!videoDetail.snippet) return <div>No video data available</div>;
  // const {
  //   snippet: { title, channelId, channelTitle, description, tags, thumbnails },
  //   statistics: { viewCount, likeCount, commentCount },
  // } = videoDetail;

  return (
    <Box minHeight="90vh" mb={10}>
      <Box
        display={"flex"}
        gap={"5px"}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Box width={{ xs: "100%", md: "75" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          {videoDetail?.snippet?.tags?.map((iteam, idx) => (
            <Chip
              label={iteam}
              key={idx}
              sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
              deleteIcon={<Tag />}
              onDelete={() => {}}
              variant="outlined"
            />
          ))}
          <Typography variant="h5" fontWeight={"bold"} p={2}>
            {videoDetail?.snippet?.title}
          </Typography>
          <Typography variant="subtitle2" p={2} sx={{ opacity: "0.7" }}>
            {videoDetail?.snippet?.description}
          </Typography>
          <Stack
            direction={"row"}
            gap={"20px"}
            alignItems={"center"}
            py={1}
            px={2}
          >
            <Stack
              sx={{ opacity: 0.7 }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <Visibility />
              {parseInt(
                videoDetail?.statistics?.viewCount
              ).toLocaleString()}{" "}
              views
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <FavoriteOutlined />
              {parseInt(
                videoDetail?.statistics?.likeCount
              ).toLocaleString()}{" "}
              likes
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <MarkChatRead />
              {parseInt(
                videoDetail?.statistics?.commentCount
              ).toLocaleString()}{" "}
              comment
            </Stack>
          </Stack>
          <Stack direction={"row"} py={1} px={2}>
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"5px"}
                marginTop={"5px"}
              >
                <Avatar
                  src={videoDetail?.snippet.thumbnails.default.url}
                  alt={videoDetail?.snippet?.channelTitle}
                />
                <Typography variant="subtitle2" color={"gray"}>
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Box>
        <Box
          width={{ xs: "100%", md: "25%" }}
          px={10}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"scroll"}
          maxHeight={"150vh"}
        >
          <Videos videos={relatedvideo} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
