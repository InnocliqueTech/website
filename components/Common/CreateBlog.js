import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Divider from "@mui/material/Divider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateBlog = () => {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [quillText, setQuillText] = useState("");

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "video"],
        ["clean"],
      ],
      handlers: {},
    },
  };

  const handleTextChange = (value) => {
    setQuillText(value);
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
    //setQuillText(`**${event.target.value}**\n${description}\n${image}`);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    //setQuillText(`${heading}\n**${event.target.value}**\n${image}`);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Assuming you want to display a preview of the selected image
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHeading("");
    setDescription("");
    setImage("");
    setQuillText("");
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Blog
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Ceate Blogs here?"}</DialogTitle>
        <Divider style={{ fontWeight: "bold", borderWidth: "2px" }} />
        <DialogContent>
          <TextField
            label="Heading"
            value={heading}
            onChange={handleHeadingChange}
            fullWidth
            variant="standard"
            style={{ top: "-12px" }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "100%",
              height: "200px",
              border: "1px solid #ccc",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="image-upload"
            />
            {!image && (
              <label htmlFor="image-upload">
                <IconButton color="primary" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            )}
            {image && (
              <img
                src={image}
                alt="Preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </div>

          <div style={{ marginTop: "10px" }}>
            <label style={{ fontWeight: "bold" }}>Description:</label>
            <ReactQuill
              value={quillText}
              onChange={handleTextChange}
              theme="snow"
              modules={modules}
              placeholder="Write something neat..."
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateBlog;
