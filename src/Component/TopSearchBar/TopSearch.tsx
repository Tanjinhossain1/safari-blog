import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

export default function TopSearch() {
  return (
    <FormControl sx={{ minWidth: 90, mt: 2.8 }}>
      <Select
        labelId="custom-select-label"
        defaultValue=""
        displayEmpty
        disableUnderline
        sx={{
          "& .MuiSelect-select": {
            paddingRight: "32px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        inputProps={{
          sx: {
            padding: 0,
            "&:focus": {
              background: "none",
            },
          },
        }}
      >
        <MenuItem sx={{ display: "none" }} value="">
          <em
            style={{
              color: "white",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            More
          </em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
