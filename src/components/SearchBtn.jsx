import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function SearchBtn(props) {

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language; // get current language ('en' or 'ka')

  useEffect(() => {
    document.body.setAttribute("lang", currentLanguage);
  }, [currentLanguage]);

  return (
    <>
      <button
        onClick={props.handleExecuteStatusChange}
        className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-lg group"
      >
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
          {t("searchButton")}
        </span>
        <span className="absolute inset-0 border-2 border-white px-5 rounded-lg "></span>
      </button>
    </>
  );
}

export default SearchBtn;
