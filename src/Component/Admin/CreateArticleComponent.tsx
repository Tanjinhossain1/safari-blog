"use client";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import FileUpload from "@/Component/Forms/UploadImage";
import axios from "axios";
import { useRouter } from "next/navigation";

const Editor = dynamic(
  () => import("../../../src/Component/Editor/EditorForCreateArticle"),
  { ssr: false }
);

export default function CreateArticleComponent() {
  const history = useRouter()
  const editorRef = useRef<EditorJS | null>(null);
  const [open, setOpen] = React.useState(false);
  const [openBackDrop, setOpenBackDrop] = React.useState(false);
  
  const [age, setAge] = React.useState("");

  const [unFormatFile, setUnFormatFile] = useState<any>(null);
  const [image, setImage] = useState<string | null>(null);
  const [imageLoad, setImageLoad] = useState<boolean>(false);
  const [imageRequiredError, setImageRequiredError] = useState<boolean>(false);

  const handleBackdropClose = () => {
    setOpenBackDrop(false);
  };
  const handleBackDropOpen = () => {
    setOpenBackDrop(true);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    if (unFormatFile) {
      const fileData = new FormData();
      fileData.append("file", unFormatFile);
      fileData.append("upload_preset", "computer-services");
      fileData.append("cloud_name", "djvcnudls");

      fetch("https://api.cloudinary.com/v1_1/djvcnudls/image/upload", {
        method: "POST",
        body: fileData,
      })
        .then((res) => res.json())
        .then((fileRepsData) => {
          if (fileRepsData?.url) {
            setImageLoad(false);
            setImage(fileRepsData?.url);
          }
          console.log("image fileRepsData  ", fileRepsData);
        })
        .catch((err) => {
          setImageLoad(false);
          console.log(err);
        });
    }
  }, [unFormatFile]);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!image) {
      setImageRequiredError(true);
    }
    handleBackDropOpen()
    const fieldData = await editorRef.current?.save();
    const title = (event.target as any)?.title.value;
    const description = (event.target as any)?.description.value;
    const category = (event.target as any)?.category.value;
    event.preventDefault();
    console.log(
      "submit data  ",

      {
        title: title,
        category: category,
        image: image,
        content: fieldData?.blocks,
      }
    );
    const data = {
      title: title,
      category: category,
      description: description,
      image: image,
      content: fieldData?.blocks,
    };
    if (image) {
      setImageRequiredError(false);
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/api/v1/article/create`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response: any) => {
          console.log("create success", response);
          if (response?.data?.success) {
            handleClick();
            setTimeout(() => {
              handleBackdropClose()
              window.location.reload();
            }, 3500);
          }
        })
        .catch((err) => {
          handleBackdropClose()
          console.log("error", err);
        });
    }
    handleBackdropClose()
    // http://localhost:3002/api/v1/article/create
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Container sx={{ width: "90%", mx: "auto" }}>
        <div id="top">
        <Button onClick={()=>history.push('/')} variant="contained" color="error" sx={{mt:1}}>Back To Home</Button>
        <a style={{textDecoration:"none"}} href="#bottom"> <Button color="secondary" variant="contained" sx={{mt:1,ml:2}}>Go Bottom</Button></a>
        </div>
          <FormControl sx={{ my: 2, width: "100%" }} variant="filled">
            <InputLabel sx={{ mb: 1 }} htmlFor="filled-adornment-amount">
              Title <sup style={{ color: "red", fontSize: 20 }}>*</sup>
            </InputLabel>
            <FilledInput
              name="title"
              id="filled-adornment-amount"
              placeholder="Title"
              required
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="filled" sx={{ my: 1, minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-filled-label">
              Category <sup style={{ color: "red", fontSize: 20 }}>*</sup>
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              required
              name="category"
              onChange={handleChange}
            >
              <MenuItem value={"mobile"}>Mobile</MenuItem>
            </Select>
          </FormControl>
          <TextField
       
      label={<span>Description <sup style={{ color: "red", fontSize:12}}>*</sup></span>}
      multiline
      rows={4}
      name={'description'}
      sx={{width: "100%"}}
      variant="outlined"
      // value={value}
      // onChange={onChange}
    />
          <FileUpload
            runAfterChange={(file) => {
              setImageLoad(true);
              setUnFormatFile(file);
            }}
            required
            name="titleImage"
          />
          {image === null && imageRequiredError === true ? (
            <Typography style={{ color: "red", display: "inline" }}>
              Image Required
            </Typography>
          ) : (
            ""
          )}
        </Container>
        {/* <button>submit</button> */}

        <Container component="div" sx={{ width: "100%", mt: 2 }}>
          <Editor editorRef={editorRef} />
        </Container>
        <Container component="main" sx={{ textAlign: "end" }} maxWidth="sm">
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#3f51b5",
              color: "#fff",
              padding: "10px 20px",
              mt: 2,
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "8px",
              transition: "background-color 0.3s, transform 0.3s",
              "&:hover": {
                backgroundColor: "#303f9f",
                // transform: "scale(1.05)",
              },
              "&:active": {
                backgroundColor: "#283593",
                transform: "scale(0.95)",
              },
            }}
          >
            Submit
          </Button>
          <div id="bottom">
       
          <a href="#top"> <Button variant="contained" color="secondary" sx={{mt:1}}>Go Up</Button></a>
        </div>
        </Container>
      </form>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Article Created SuccessFully
        </Alert>
      </Snackbar> 
<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={openBackDrop}
  onClick={handleBackdropClose}
>
  <CircularProgress color="inherit" />
</Backdrop>
    </div>
  );
}
