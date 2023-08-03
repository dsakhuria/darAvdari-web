import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainInput from "./components/MainInput";
import Weather from "./components/Weather";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBtn from "./components/SearchBtn";

function App() {
  const navSearchBtn = () => {
    toast.info("Choose destination from menu!");
  };

  const [dropDownValue, setdropDownValue] = useState("");

  const handleInputValueChange = (event) => {
    setdropDownValue(event.target.value);
  };
  console.log(dropDownValue);

  return (
    <>
      <div
        className="w-full h-auto
              bg-[#111111]
              flex flex-col 
              items-center
              text-white text-xl 
      "
      >
        <Navbar navSearchBtn={navSearchBtn} />
        <section
          className="w-full h-[auto] gap-[10rem] my-6
                            flex flex-col items-center justify-around
                            "
        >
          <span className="bg-[#181818] text-center text-4xl w-10/12 rounded-lg py-2">
            Welcome to darAvdari
          </span>
          <MainInput handleInputValueChange={handleInputValueChange} />
          <SearchBtn />
          {false && <Weather />}
        </section>
        <Footer />
        <ToastContainer
          position="bottom-right"
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
