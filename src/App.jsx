import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation from react-i18next
import { ToastContainer, toast } from "react-toastify"; //
import { PacmanLoader } from "react-spinners";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainInput from "./components/MainInput";
import Weather from "./components/Weather";
import SearchBtn from "./components/SearchBtn";
import LanguageSwitcher from "./components/LanguageSwitcher";

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
      toast("zd");
    }
  };

  // feature to detect if location isnt chosen and if it is "choose location..."
  // const [ifChosenIsDefault, setifChosenIsDefault] = useState(false)
  // const handleifChosenIsDefaultChange = () => {
  //   setifChosenIsDefault(true)
  // }

  let apiKey = import.meta.env.VITE_WEATHER_API_KEY; //API

  // languages
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language; // get current language ('en' or 'ka')

  useEffect(() => {
    document.body.setAttribute("lang", currentLanguage);
  }, [currentLanguage]);

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
          className="w-full h-[auto] gap-[2rem] my-6
                    flex flex-col items-center justify-around
                     sm:gap-[2rem] sm:min-h-screen
         "
        >
          <div className=" w-full h-auto lg:flex lg:h-auto lg:items-center">
            <div className="w-full h-full pt-10 text-center">
              <span className="flex items-center justify-center h-auto gap-2 flex-col bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                <span className="text-5xl sm:block text-white">
                  {t("welcome")}
                </span>
                <span>darAvdari WeatherAPP.</span>
              </span>

              <span className="text-gray-400 mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                {t("introInfo")}
              </span>
              <span className="flex w-auto items-center justify-center gap-2">
                <p className="text-gray-400">{t("author")}</p>
                <a
                  href="https://www.instagram.com/dachi.s_/"
                  className="text-white"
                  target="_blank"
                >
                  @dsakhuria
                </a>
              </span>
            </div>
          </div>
          {/* lang in body only seen from small screens bbs */}
          <div className="inline-block border-lg border-purple-950 sm:hidden">
            <LanguageSwitcher />
          </div>
          <MainInput handleInputValueChange={handleInputValueChange} />
          <SearchBtn handleExecuteStatusChange={handleExecuteStatusChange} />
          <div>
            {t("chosenLocation")}{" "}
            {<span className="text-gray-500">{dropDownValue}</span>}
          </div>
          {executeStatus && (
            <Weather apiKey={apiKey} dropDownValue={dropDownValue} />
          )}
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
