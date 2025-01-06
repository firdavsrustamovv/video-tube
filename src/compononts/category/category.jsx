import { Stack } from "@mui/material";
import { category } from "../../constants/constants";
const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      sx={{ overflowX: "scroll" }}
    >
      {category.map((iteam) => {
        return (
          <button
            key={iteam.name}
            className="category-btn"
            style={{
              borderRadius: "0",
              background: iteam.name === selectedCategory && "red",
              color: iteam.name === selectedCategory && "#fff",
              fontSize: "13px",
            }}
            onClick={() => selectedCategoryHandler(iteam.name)}
          >
            <span
              style={{
                color: iteam.name === selectedCategory ? "#fff" : "red",
                marginRight: "15px",
              }}
            >
              {iteam.icon}
            </span>
            <span style={{ opacity: "1" }}>{iteam.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Category;
