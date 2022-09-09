//npx tsc -w

const DADJOKE_URL: string = "https://icanhazdadjoke.com/";
const CHUCKNORRIS_URL: string = "https://api.chucknorris.io/jokes/random";

const jokes = document.querySelector("#joke") as HTMLElement;

const reportJokes: any[] = [];

const rates = document.querySelector(".rates") as HTMLElement;
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

async function getJoke() {
    let response: any;
    let dataToJson: any;
    
    let random: number = Math.floor(Math.random() * 2) + 1;
    // console.log(random);

    if (random === 1) {
        response = await fetch(`${DADJOKE_URL}`, {
            method: "GET",
            headers: {'Accept': 'application/json'}
        });
        
        dataToJson = await response.json();
        // console.log(dataToJson);
        jokes.innerHTML = dataToJson.joke;
    } else {
        response = await fetch(`${CHUCKNORRIS_URL}`, {
            method: "GET"
        });
        
        dataToJson = await response.json();
        jokes.innerHTML = dataToJson.value;
    }
    
    rates.style.display = "block";
}

function rateJoke(rate: number) {
    const d: Date = new Date();
    let text: string = d.toISOString();

    const jokeRated = {joke: jokes.innerHTML, score: rate, date: text};
    reportJokes.push(jokeRated);
    
    rates.style.display = "none";
    console.log(reportJokes);
}

const WEATHER_URL: string = 'http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&APPID=fb4136156c63da5063767994036a4030&units=metric&lang=ca';

const weatherApp = document.querySelector("#weather") as HTMLElement;

window.onload = async function getWeather() {
    const weatherResponse = await fetch(`${WEATHER_URL}`);
    const weatherToJson = await weatherResponse.json();
    weatherApp.innerHTML = weatherToJson.weather[0].description;
    console.log(weatherToJson);
}