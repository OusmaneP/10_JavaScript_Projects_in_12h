
// https://dog.ceo/api/breeds/image/random


const dogImageDiv = document.getElementById('dogImage');
const getDogButton = document.getElementById('getDog');

const getRandomDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            console.log(json.message)
            dogImageDiv.innerHTML = `<img src="${json.message}" alt="" style="max-width: 400px; max-height: 400px;"/>`
        })
}

getDogButton.onclick = () => getRandomDog();
getRandomDog();














































