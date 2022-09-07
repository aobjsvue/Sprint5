//npx tsc -w

const DADJOKE_URL = "https://icanhazdadjoke.com/";

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
    const response = await fetch(`${DADJOKE_URL}`, {
        method: "GET",
        headers: {'Accept': 'application/json'}
    });
    
    const dataToJson = await response.json();
    // console.log(dataToJson);
    jokes.innerHTML = dataToJson.joke;

    rates.style.display = "block";
}

function rateJoke(rate: number) {
    const d = new Date();
    let text = d.toISOString();

    const jokeRated = {joke: jokes.innerHTML, score: rate, date: text};
    reportJokes.push(jokeRated);
    
    rates.style.display = "none";
    console.log(reportJokes);
}
