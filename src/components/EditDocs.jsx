import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import { database } from "../firebaseConfig";
import "./editDocs.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditDocs() {
  // creating collection reference to update the data
  const collectionRef = collection(database, "docsData");

  const [docsDesc, setDocsDesc] = useState("");
  const [docsTitle, setDocsTitle] = useState("");

  let params = useParams();
  // console.log(params);

  // to get data from react quill
  const getQuillData = (value) => {
    setDocsDesc(value);
    // console.log(docsDesc);
  };

  // to update the data
  useEffect(() => {
    const updateDocsData = setTimeout(() => {
      const document = doc(collectionRef, params.id);
      updateDoc(document, {
        docsDesc,
      })
        .then(() => {
          // alert("Data Added");
          // console.log("Data Added");
        })
        .catch(() => {
          toast.error("Data is not saved");
        });
    }, 1000);

    return () => clearTimeout(updateDocsData);
  }, [docsDesc]);

  // getting data from firebase
  const getData = () => {
    const document = doc(collectionRef, params.id);
    onSnapshot(document, (docs) => {
      setDocsDesc(docs.data().docsDesc);
      setDocsTitle(docs.data().title);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="editdocs-main">
      <h1>{docsTitle}</h1>
      <div className="editdocs-inner">
        <ReactQuill
          value={docsDesc}
          onChange={getQuillData}
          className="react-quill"
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default EditDocs;
