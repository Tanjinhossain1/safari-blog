import {
  Button,
  Container,
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";

export default function DialogComponent({
  handleDialogClose,
  handleBackdropClose,
  handleBackDropOpen,
  handleClick,
  isBrand,
}: {
  handleDialogClose: () => void;
  handleBackdropClose: () => void;
  handleBackDropOpen: () => void;
  handleClick: (text:string) => void;
  isBrand?: boolean;

}) {  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    handleBackDropOpen();
    const title = (event.target as any)?.title.value;
    // const value = (event.target as any)?.value.value;
    event.preventDefault();
    console.log(
      "submit data  ",

      {
        title,
        // value,
      }
    );
    const data = {
      title,
    //   value
    };
    await axios
        .post(isBrand ? `/api/brands/create` :`/api/category/create`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response: any) => {
          if (response?.data?.success) {
            handleClick(isBrand ? "SUccessfully Brand Created" : "Successfully Category Created")
            handleDialogClose()
            window.location.reload();
          }
        })
        .catch((err:any) => {
          handleBackdropClose();
          console.log("error", err);
        });

    handleBackdropClose(); 
  };
  return (
    <Container sx={{ p: 3,  }}>
      <Typography sx={{ fontSize: 28, fontWeight: 550 }}>
       {isBrand ? "Add Brands" :  "Add Category"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ my: 2, width: "100%" }} variant="filled">
          <InputLabel sx={{ mb: 1 }} htmlFor="filled-adornment-amount">
            Title <sup style={{ color: "red", fontSize: 20 }}>*</sup>
          </InputLabel>
          <FilledInput
            name="title"
            id="filled-adornment-amount"
            placeholder="Title"
            required
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
       
        <Container sx={{ display: "flex", justifyContent: "end", gap: 3 }}>
          <Button color="error" onClick={handleDialogClose} variant="contained">
            Cancel
          </Button>
          <Button  type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </Container>
      </form>
    </Container>
  );
}
