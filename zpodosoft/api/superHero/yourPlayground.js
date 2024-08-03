
// https://dog.ceo/api/breeds/image/random
// https://www.superheroapi.com/api.php/10223569763528853/search/batman
const SUPERHERO_TOKEN = '10223569763528853';
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
let heroDiv = document.getElementById('heroDiv');
let heroName = document.getElementById('heroName');
let heroStat = document.getElementById('heroStat');
const newHeroBtn = document.getElementById('newHero');
let searchResult = document.getElementById('searchResult');

let randomNumber = 0;

const searchBtn = document.getElementById('searchBtn');

const getSuperHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            showHero(json);
        });
};

const searchHero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {


            if(json.response === "success") {
                let hero = json.results[0];
                console.log(hero);
                showHero(hero);
                searchResult.innerText = '';
            }
            else{
                console.log("Nothing to show");

                searchResult.innerText = "0 result for this query";
            }
        });
};

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡️',
    durability: '⏰',
    power: '📊',
    combat: '🤺'
}

const showHero = (character) => {
    let name = `<h2>${character.name} </h2>`;
     heroName.innerHTML = name;
    let img = `<img src="${character.image.url}" alt="" width="200" height="200"/>`;
    heroDiv.innerHTML = img;

    for (let stat in character.powerstats){
        console.log(stat);
    }
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]} ${stat.charAt(0).toUpperCase()}: ${character.powerstats[stat]} </p>`;
    }).join('');

    heroStat.innerHTML = `${stats}`;

    console.log(stats);

};

newHeroBtn.onclick = () => {
    randomNumber = Math.ceil(Math.random() * 731);
    getSuperHero(randomNumber);
};

searchBtn.onclick = () => {
    let searchInput = document.getElementById('searchInput');
    searchHero(searchInput.value);
};


// another way of looping objects/map/arrays things[str:5, coo:6], Object.keys(things) : return the keys





































