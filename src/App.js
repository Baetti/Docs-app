import "./App.css";
import Doc from "./components/Doc";
import { app, database } from "./firebaseConfig";

function App() {
  return (
    <>
      <Doc database={database} />
    </>
  );
}

export default App;
