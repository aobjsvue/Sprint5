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
const CHUCKNORRIS_URL = "https://api.chucknorris.io/jokes/random";
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
        let response;
        let dataToJson;
        let random = Math.floor(Math.random() * 2) + 1;
        // console.log(random);
        if (random === 1) {
            response = yield fetch(`${DADJOKE_URL}`, {
                method: "GET",
                headers: { 'Accept': 'application/json' }
            });
            dataToJson = yield response.json();
            // console.log(dataToJson);
            jokes.innerHTML = dataToJson.joke;
        }
        else {
            response = yield fetch(`${CHUCKNORRIS_URL}`, {
                method: "GET"
            });
            dataToJson = yield response.json();
            jokes.innerHTML = dataToJson.value;
        }
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
const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&APPID=fb4136156c63da5063767994036a4030&units=metric&lang=ca';
const weatherApp = document.querySelector("#weather");
window.onload = function getWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        const weatherResponse = yield fetch(`${WEATHER_URL}`);
        const weatherToJson = yield weatherResponse.json();
        weatherApp.innerHTML = weatherToJson.weather[0].description;
        console.log(weatherToJson);
    });
};
