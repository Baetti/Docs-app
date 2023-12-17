import { Route, Routes } from "react-router-dom";
import "./App.css";
import Doc from "./components/Doc";
import { app, database } from "./firebaseConfig";
import EditDocs from "./components/EditDocs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Doc database={database} />} />
        <Route
          path="/editDocs/:id"
          element={<EditDocs database={database} />}
        />
      </Routes>
    </>
  );
}

export default App;
