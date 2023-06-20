import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
 

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { lang } from "./assets/locale/lang";

i18n.use(initReactI18next).init({
  fallbackLng: localStorage.getItem("language") || "ru",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ru: { translation: lang.ru },
    en: { translation: lang.en },
    uz: { translation: lang.uz },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
