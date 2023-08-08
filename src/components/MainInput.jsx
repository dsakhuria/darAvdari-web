import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function MainInput(props) {


    // languages
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language; // get current language ('en' or 'ka')
  
    useEffect(() => {
      document.body.setAttribute("lang", currentLanguage);
    }, [currentLanguage]);


  return (
    <>
      <select onChange={props.handleInputValueChange} 
              className="select select-accent bg-[#181818]
                        w-full max-w-xs
                        border-purple-700 focus:border-purple-950 focus:outline-purple-900 
                        ">
        <option className="text-neutral-500">
          {t("chooseLocation")}
        </option>
        <option>Chkhorotsku {" <3"}</option>
        <option>Tbilisi</option>
        <option>Batumi</option>
        <option>Zugdidi</option>
      </select>
    </>
  );
}

export default MainInput;
