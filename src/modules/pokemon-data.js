import unlike from '../images/unlike.png';
import popup from './popup.js';
import { likeGet } from './likes.js';

const cards = document.body.querySelector('.cards');

const pokemons = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  data.results.forEach((result) => {
    fetch(result.url)
      .then((response) => response.json())
      .then((pokemon) => {
        const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
        const image = pokemon.sprites.other['official-artwork'].front_default;
        const { height } = pokemon;
        const { weight } = pokemon;
        const ability = pokemon.abilities[0].ability.name;
        const type = pokemon.types[0].type.name;
        const { id } = pokemon;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img class="pokemon-img" id=${id} src="${image}" alt="${name}">
            <div class="card-title">
            <h2>${name}</h2>
            <img id="likeId${id}" class="likeBtn" src=${unlike} alt="like_icon">
            </div> 
            <p class="like-count" id="like-count${id}">0 Likes</p>
            `;
        const buttons = document.createElement('div');
        buttons.className = 'buttons';
        const button = document.createElement('button');
        button.type = 'button';
        button.id = id;
        button.className = 'comment';
        button.innerHTML = 'Comments';
        button.addEventListener('click', () => {
          popup(name, image, height, weight, ability, type, id);
        });
        buttons.appendChild(button);
        card.appendChild(buttons);
        cards.appendChild(card);
      });
  });
  return data.results.length;
};

likeGet();

export default pokemons;