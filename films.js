import { rendalPage } from './index.js';

export function render(data) {

  const container = document.createElement('div');
  container.classList.add('container');
  const appContainer = document.getElementById('app');
   //appContainer.style.backgroundColor = '#333';
  const header = document.createElement('h1');
  header.classList.add('p-3',  'text-center', 'title');
  header.textContent = 'Star Wars films';
  appContainer.append(header);

  data.results.forEach((episode, film) => {
    const yearRelease = episode.release_date.slice(0, 4);
    const filmCard = document.createElement('div');
    const cardFootnotes = document.createElement('em');
    const detailButton = document.createElement('a');

    filmCard.style.width = '20rem';
    filmCard.classList.add('mb-3', 'mx-auto', 'film-card', 'card' );
    detailButton.classList.add('card__lnk');

    cardFootnotes.textContent = yearRelease;
    cardFootnotes.style.fontSize = '0.7rem';
    detailButton.textContent = ` ${film + 1}. ${episode.title}  `;
    detailButton.href = `?film=${film + 1}`;

    container.append(filmCard);
    filmCard.append(detailButton);
    detailButton.append(cardFootnotes);

    detailButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState(null, '', `?film=${film + 1}`);
      rendalPage(
        './details.js',
        `https://swapi.dev/api/films/${film + 1}`,
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'
      );
    });
  });

  return container;
}