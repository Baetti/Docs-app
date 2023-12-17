import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import { database } from "../firebaseConfig";

function EditDocs() {
  // creating collection reference to update the data
  const collectionRef = collection(database, "docsData");

  const [docsDesc, setDocsDesc] = useState("");

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
          alert("Data is not saved");
        });
    }, 1000);

    return () => clearTimeout(updateDocsData);
  }, [docsDesc]);

  // getting data from firebase
  const getData = () => {
    const document = doc(collectionRef, params.id);
    onSnapshot(document, (docs) => {
      console.log(docs.data().dpcsDesc);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Edit Docs</h1>
      <ReactQuill value={docsDesc} onChange={getQuillData} />
    </div>
  );
}

export default EditDocs;
