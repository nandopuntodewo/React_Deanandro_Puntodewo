import React, { useState } from "react";
import article from "./articleData";

export default function Header() {
  // State untuk melacak bahasa saat ini
  const [currentLanguage, setCurrentLanguage] = useState("en");

  // Objek teks dalam Bahasa Inggris dan Bahasa Indonesia
  const languageTexts = {
    en: {
      title: article.title.en,
      description: article.description.en,
      buttonText: "Switch to Bahasa Indonesia",
    },
    id: {
      title: article.title.id,
      description: article.description.id,
      buttonText: "Switch to English",
    },
  };

  // Fungsi untuk mengganti bahasa
  function toggleLanguage() {
    // Jika bahasa saat ini adalah Inggris, ganti ke Bahasa Indonesia, dan sebaliknya
    setCurrentLanguage(currentLanguage === "en" ? "id" : "en");
  }

  return (
    <div>
      <div className="container p-lg-5">
        <div className="text-center">
          <img src="images/bootstrap-logo.png" alt="logo" />
        </div>
        <div className="text-center mt-lg-3">
          <p className="fw-medium fs-3">
            {languageTexts[currentLanguage].title}
          </p>
          <p className="text-secondary-emphasis fs-4">
            {languageTexts[currentLanguage].description}
          </p>
          <button className="btn btn-primary" onClick={toggleLanguage}>
            {languageTexts[currentLanguage].buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
