const searchInput = document.querySelector('.search');
const searchSuggestions = document.querySelector('.suggestions');
const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data))

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {

        const regax = new RegExp(wordToMatch, 'gi');
        return place.city.match(regax) || place.state.match(regax);
    })
};

function displayMatches() {
    console.log(this.value);
    console.log(findMatches(this.value, cities));

}
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);