import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { colors } from "../../constants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const VideoCard = ({ videos }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${videos.id.videoId}`}>
        <CardMedia
          image={videos?.snippet?.thumbnails?.high?.url}
          alt={videos?.snippet?.title}
          sx={{
            width: { xs: "100%", sm: "360px", md: "320px" },
            height: "180px",
          }}
        />
      </Link>

      <CardContent
        sx={{
          background: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/video/${videos.id.videoId}`}>
          <Typography my={"5"} sx={{ opacity: "0.4" }}>
            {moment(videos?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {videos?.snippet?.title}
          </Typography>

          {/* <Typography variant="subtitle2" sx={{ opacity: "0.6" }}>
            {videos?.snippet?.description}
          </Typography> */}
        </Link>
        <Link to={`/channel/${videos?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={videos?.snippet?.thumbnails?.high?.url} />
            <Typography variant={"subtitle2"} color={"gray"}>
              {videos?.snippet?.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
