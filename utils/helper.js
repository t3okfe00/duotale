// List of common abbreviations

import crypto from "crypto";
import next from "next";
const abbreviations = [
  "Dr",
  "Mr",
  "Mrs",
  "Ms",
  "Jr",
  "Sr",
  "Prof",
  "St",
  "Rev",
  "B.A",
  "M.A",
  "B.S",
  "M.S",
  "Ph.D",
  "M.D",
  "a.m",
  "p.m",
  "Ave",
  "Blvd",
  "Rd",
  "St",
  "etc",
  "e.g",
  "i.e",
  "vs",
  "Ltd",
  "Inc",
  "Co",
];

export const francToGoogleLangMap = {
  eng: "en-US", // English
  spa: "es-ES", // Spanish
  fra: "fr-FR", // French
  deu: "de-DE", // German
  ita: "it-IT", // Italian
  fin: "fi-FI", // Finnish
  tur: "tr-TR", // Turkish
  rus: "ru-RU", // Russian
  // Add more mappings as needed
};

const createSentenceSplitRegex = () => {
  const abbreviationsPattern = `\\b(?:${abbreviations.join("|")})\\.`;
  return new RegExp(`(?<!${abbreviationsPattern})(?<=\\.|\\?|!)\\s`, "g");
};

const splitTextIntoSentences = (text) => {
  const regex = createSentenceSplitRegex();
  return text.split(regex);
};

export { splitTextIntoSentences };

export const languagesList = [
  "English - Finnish",
  "English - Turkish",
  "English - Spanish",
  "English - French",
  "English - German",
  "English - Italian",
  "English - Russian",
];

export function generateUniqueId(text) {
  return crypto.createHash("md5").update(text).digest("hex");
}

export function playTheMp3(mp3) {
  if (mp3) {
    const audio = new Audio(mp3);
    audio.play();
  } else {
    const audio = new Audio(`/speech.mp3?timestamp=${new Date().getTime()}`);
    audio.play();
  }
}
