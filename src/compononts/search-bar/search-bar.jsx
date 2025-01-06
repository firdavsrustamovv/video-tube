import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { colors } from "../../constants/colors.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
      setValue(" ");
    }
  };
  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{ border: `1px solid ${colors.Third}`, pl: 2, boxShadow: "none" }}
    >
      <input
        type="text"
        placeholder="Search...."
        className="searchBar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
