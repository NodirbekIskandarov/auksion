import { LANGUAGE } from "../tools/constant";
import { ru } from "./ru";
import { uz } from "./uz";
import { en } from "./en";

export const getLanguage = () => {
  return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
  return getLanguage() === "uz"
    ? uz[word]
    : getLanguage() === "ru"
    ? ru[word]
    : en[word];
};
