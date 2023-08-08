import React from "react";
import { useTranslation } from "react-i18next";



  const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };



  return (

    
    <>
    <select
      onChange={handleLanguageChange}
      value={i18n.language}
      className="block bg-transparent rounded-lg border-purple-700 sm:border-gray-400"
    > 
      
      <option value="en" className="bg-[#111] text-white">
        EN
        </option>

      <option value="ka" className="bg-[#111] text-white">KA</option>

    </select>
    </>
    
  );
};

export default LanguageSwitcher;
