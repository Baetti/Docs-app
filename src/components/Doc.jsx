import React, { useState } from "react";
import "./Doc.css";

import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function Doc() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="docs-main">
      <h1>Docs Clone</h1>

      <button onClick={handleOpen} className="rounded add-docs">
        Add a Document
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // className="border rounded"
      >
        <Box sx={style}>
          <input
            type="text"
            placeholder="Add the Title"
            className="add-input"
          />
          <div className="button-container">
            <button className="add-docs rounded"> Add</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Doc;
