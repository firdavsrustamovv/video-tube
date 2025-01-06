import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../images/Black_Red_White_Illustration_Clapperboard__Frame__Creative_Studio_Logo-removebg-preview.png";
import { colors } from "../../constants/colors.js";
import { SearchBar } from "../index";
function Navbar() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={1}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="Logo" width={80} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
}

export default Navbar;
