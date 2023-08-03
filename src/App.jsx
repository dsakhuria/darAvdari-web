import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainInput from "./components/MainInput";


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        className="w-full h-auto
              bg-[#111111]
              flex flex-col 
              items-center
              text-white text-4xl 
      "
      >
        <Navbar />
        <section className="w-full min-h-[20rem]
                            flex flex-col items-center justify-around
                            ">
          <span className="bg-[#181818] text-center w-10/12 rounded-lg py-2">Welcome to darAvdari</span>
          <MainInput />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
