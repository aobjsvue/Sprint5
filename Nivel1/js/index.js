"use strict";
//npx tsc -w
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DADJOKE_URL = "https://icanhazdadjoke.com/";
const jokes = document.querySelector("#joke");
const reportJokes = [];
const rates = document.querySelector(".rates");
rates.style.display = "none";
// function getJoke() {
//     fetch(`${DADJOKE_URL}`, {
//         method: "GET",
//         headers: {'Accept': 'application/json'}
//     })
//         .then(response => response.json())
//         // .then(json => console.log(json));
//         .then(json => jokes.innerHTML = `“ ${json.joke} ”`);
//     rates.style.display = "block";
// }
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${DADJOKE_URL}`, {
            method: "GET",
            headers: { 'Accept': 'application/json' }
        });
        const dataToJson = yield response.json();
        // console.log(dataToJson);
        jokes.innerHTML = dataToJson.joke;
        rates.style.display = "block";
    });
}
function rateJoke(rate) {
    const d = new Date();
    let text = d.toISOString();
    const jokeRated = { joke: jokes.innerHTML, score: rate, date: text };
    reportJokes.push(jokeRated);
    rates.style.display = "none";
    console.log(reportJokes);
}
