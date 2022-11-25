import { useState } from "react";
import "./App.css";
import Alert from "./Component/Alert";
// import Feature from "./Component/Feature";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";

function App() {
  const [alert, setAlert] = useState(null);

  //function for alert
  const handelAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    //function used to clear the alert after 3second
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="Ezio" />
      <Alert alert={alert} />

      <div className="body" style={{ backgroundColor: "#CECECE" }}>
        <div className="container ">
          {/* <Routes>
              <Route exact path="/feature" element={<Feature />}></Route>
            </Routes> */}
          <TextForm heading="Enter the " handelAlert={handelAlert} />
        </div>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
