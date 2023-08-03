import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainInput from "./components/MainInput";
import Weather from "./components/Weather";

import { useState } from "react";
import { ToastContainer, toast, useToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBtn from "./components/SearchBtn";

function App() {
  const navSearchBtn = () => {
    toast.info("Choose destination from menu!");
  };

  const startWord = "Choose location...";
  const [dropDownValue, setdropDownValue] = useState(startWord);

  const handleInputValueChange = (event) => {
    setdropDownValue(event.target.value);
  };
  console.log(dropDownValue);

  const [executeStatus, setexecuteStatus] = useState(false);
  const handleExecuteStatusChange = () => {
    if (dropDownValue !== startWord) {
      setexecuteStatus(true);
    } else {
      toast.warning("You haven't chosen the location!");
    }
  };

  // feature to detect if location isnt chosen and if it is "choose location..."
  // const [ifChosenIsDefault, setifChosenIsDefault] = useState(false)
  // const handleifChosenIsDefaultChange = () => {
  //   setifChosenIsDefault(true)
  // }

  console.log(executeStatus);
  return (
    <>
      <div
        className="w-full h-auto
              bg-[#111111]
              flex flex-col 
              items-center sm:justify-between
              text-white text-xl sm:text-2xl
      "
      >
        <Navbar navSearchBtn={navSearchBtn} />
        <section
          className="w-full h-[auto] gap-[5rem] my-6
                    flex flex-col items-center justify-around
                     sm:gap-[2rem] sm:min-h-screen
         "
        >
          <span className="bg-[#181818] text-center text-4xl w-10/12 rounded-lg py-2">
            Welcome to darAvdari
          </span>
          <MainInput handleInputValueChange={handleInputValueChange} />
          <SearchBtn handleExecuteStatusChange={handleExecuteStatusChange} />
          <div>
            Chosen location:{" "}
            {<span className="text-gray-500">{dropDownValue}</span>}
          </div>
          {executeStatus && <Weather dropDownValue={dropDownValue} />}
        </section>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
}

export default App;
