import React, { useEffect, useState } from "react";
import "./Doc.css";

import { addDoc, collection, onSnapshot } from "firebase/firestore";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

function Doc({ database }) {
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

  // firebase collection
  const collectionRef = collection(database, "docsData");

  // to hold datas
  const [title, setTitle] = useState("");
  // console.log(title);
  const [docsData, setDocsData] = useState([]);

  const addData = () => {
    addDoc(collectionRef, {
      title,
    })
      .then(() => {
        alert("Data Added");
      })
      .catch(() => {
        alert("Cannot Add Data");
      });
  };

  const getData = () => {
    onSnapshot(collectionRef, (data) => {
      setDocsData(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };

  const getId = (id) => {
    console.log(id);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="docs-main">
      <h1>Docs Clone</h1>

      <button onClick={handleOpen} className="rounded add-docs">
        Add a Document
      </button>
      <Modal
        // title={title}
        // setTitle={setTitle}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="button-container">
            <button onClick={addData} className="add-docs rounded">
              {" "}
              Add
            </button>
          </div>
        </Box>
      </Modal>

      <div className="grid-main">
        {docsData.map((doc) => {
          return (
            <div className="grid-child" onClick={() => getId(doc.id)}>
              <p>{doc.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Doc;
