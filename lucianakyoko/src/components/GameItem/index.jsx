import React from 'react';
import './style.scss';
import { getGames } from '../../datas/games';
import Button from '../Button';

const GameItem = () => {
  const games = getGames();
  const [gameId, setGameId] = React.useState('game01');

  function handleClick(event) {
    const gameTitleList = document.querySelectorAll('.game__navigation-title.active');
    gameTitleList.forEach(gameTitle => gameTitle.classList.toggle('active'));
    event.target.className = 'game__navigation-title active';

    const id = event.target.id;

    if(id == 'game01') {
      setGameId('game01');
    } else if( id == 'game02') {
      setGameId('game02');
    } else if(id == 'game03') {
      setGameId('game03');
    }
  }

  return (
    <div className='game-container'>
      <ul className='game__overlay'>
        {games.map(game => (
          <li key={game.id} id={game.id} className={game.id == gameId ? 'game__overlay-inner active' : 'game__overlay-inner' }>
            <img src={`../images/games/${game.image}`} className='game__image' alt="Screenshot da tela do jogo" />
            <div className='game__details'>
              <h2 className='game__title'>{game.title}</h2>
              <p className='game__description'>{game.description}</p>
              
              <a href={game.link} target="_blank" rel="noopener noreferrer">
                <Button btnName='jogar' icon="fas fa-gamepad" title={`Clique para jogar ${game.title}`} />
              </a>
            </div>
          </li>
        ))}
      </ul>

      <nav className='game__navigation'>
        <ul className='game__navigation-list'>
          {games.map(game => (
            <li key={game.id} className='game__navigation-item'>
              <p id={game.id} onClick={handleClick} className={game.id == gameId ? 'game__navigation-title active': 'game__navigation-title'} href={game.title}>
                {game.title}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default GameItem