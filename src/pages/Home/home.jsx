import './home.css'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Modal from './modal';

function Home() {
  const [characters, setCharacters] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  async function getCharacters() {
    const charactersFromApi = await api.get('/characters')

    setCharacters(charactersFromApi.data)
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div className="container">
      <div className="title">
        <h1>Lista de personagens</h1>
        <button className="add-button" onClick={openModal}>+</button>
      </div>

      <div className="cards-container">
        {characters.map(character => (
          <div className='card' key={character.id}>
            <Link to={`/character/${character.id}`}>
              <img src={character.img} alt={character.name} />
            </Link>
            <p>Nome: {character.name}</p>
            <p>Idade: {character.age}</p>
            <p>Raça: {character.race}</p>
          </div>
        ))}
      </div>

      {isModalOpen && <Modal closeModal={closeModal} />}

    </div>
  )
}

export default Home
