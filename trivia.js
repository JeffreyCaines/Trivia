import { libLoadStatus } from "./lib_trivia.js";

function getElement(selector) {
    return document.querySelector(selector);
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Trivia!");
    console.log(libLoadStatus());
    
});