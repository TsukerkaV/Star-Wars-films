import { rendalPage } from './index.js';
export function render(data) {
  const appContainer = document.getElementById('app');
  const buttonBack = document.createElement('button');
  const container = document.createElement('div');
  const cardHeaders = document.createElement('div');
  cardHeaders.classList.add('card__headers');

  const header = document.createElement('h1');
  const episode = document.createElement('h3');
  const director = document.createElement('h5');
  const producer = document.createElement('h5');
  cardHeaders.append(header,episode, director, producer);
  const cardDescr = document.createElement('div');
  const cardImg = document.createElement('div');
  const cardText = document.createElement('p');
  const wrapper = document.createElement('div');
  const wrapperPlanets = document.createElement('div');
  const planetsHeader = document.createElement('h3');
  const wrapperSpecies = document.createElement('div');
  const speciesHeader = document.createElement('h3');
  const wrapperStarships = document.createElement('div');
  const starshipsHeader = document.createElement('h3');
  const wrappercharacters = document.createElement('div');
  const wrappercharactersHeader = document.createElement('h3');

  let planetslist;
  let specieslist;
  let starshipslist;
  let characterslist;

  container.classList.add('container', 'text-center', 'text-white');
  header.classList.add('card__title');
  cardDescr.classList.add('card__descr');
  cardImg.classList.add('card__img');
  cardText.classList.add('card-text', 'm-3', 'card__text');
  cardDescr.append(cardText, cardImg);

wrapper.classList.add('options');
  wrappercharacters.append(wrappercharactersHeader);
  buttonBack.classList.add('btn', 'mt-3', 'ms-3', 'btn-outline-light');

  buttonBack.textContent = 'Back to episodes';
  header.textContent = data.title;
  episode.textContent = `Episode ${letter(data.episode_id)}`;
  director.textContent = `Director: ${data.director} `;
  producer.textContent = `Producer: ${data.producer}`;
  cardText.textContent = data.opening_crawl;
  planetsHeader.textContent = 'Planets';
  speciesHeader.textContent = 'Species';
  starshipsHeader.textContent = 'Starships';
  wrappercharactersHeader.textContent = 'Characters';

  document.body.style.transition = '2s';
  if (data.episode_id === 4) {
    cardImg.style.backgroundImage = 'url(img/1977.jpg)';
  }
  if (data.episode_id === 5) {
    cardImg.style.backgroundImage = 'url(img/1980.jpg)';
  }
  if (data.episode_id === 6) {
    cardImg.style.backgroundImage = 'url(img/1983.jpg)';
  }
  if (data.episode_id === 1) {
    cardImg.style.backgroundImage = 'url(img/1999.jpg)';
  }
  if (data.episode_id === 2) {
    cardImg.style.backgroundImage = 'url(img/2002.jpg)';
  }
  if (data.episode_id === 3) {
    cardImg.style.backgroundImage = 'url(img/2005.jpg)';
  }

  wrapperPlanets.append(planetsHeader);
  wrapperSpecies.append(speciesHeader);
  wrapperStarships.append(starshipsHeader);
  wrapper.append(wrapperStarships, wrapperPlanets, wrapperSpecies);

  details(data.planets, planetslist, wrapperPlanets);
  details(data.species, specieslist, wrapperSpecies);
  details(data.starships, starshipslist, wrapperStarships);
  details(data.characters, starshipslist, wrappercharacters);

  appContainer.append(buttonBack);
  container.append(
    cardHeaders,
    cardDescr,
    wrapper,
    wrappercharacters
  );

  buttonBack.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
    rendalPage(
      './films.js',
      'https://swapi.dev/api/films',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'
    );
  });
  return container;
}

function letter(x) {
  if (x == 1) x = 'I';
  if (x == 2) x = 'II';
  if (x == 3) x = 'III';
  if (x == 4) x = 'IV';
  if (x == 5) x = 'V';
  if (x == 2) x = 'VI';
  return x;
}
function details(options, optionslist, wrapperoptions) {
    const optionsDescr = document.createElement('div');
    optionsDescr.classList.add('options__descr');
  if (options) {
    options.forEach((option) => {
      fetch(option)
        .then((res) => res.json())
        .then((data) => {
          optionslist = document.createElement('span');
          optionslist.classList.add('options__list');
          optionslist.textContent = `${data.name}, `;
          optionsDescr.append(optionslist);
          wrapperoptions.classList.add('options__wrapper');
          wrapperoptions.append(optionsDescr);
        });
    });
  }
}
