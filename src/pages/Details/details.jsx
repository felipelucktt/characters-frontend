import './details.css'
import api from '../../services/api'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';

function CharactersDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState([])
    const [showMore, setShowMore] = useState(false)
    const bioRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    
    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    async function getCharacter() {
        const characterFromApi = await api.get(`/characters/${id}`)

        setCharacter(characterFromApi.data)
    }

    useEffect(() => {
        getCharacter()
    }, [id])

    useEffect(() => {
        if (bioRef.current && !showMore) {
        setIsOverflowing(bioRef.current.scrollHeight > bioRef.current.clientHeight);
        }
    },  [character.description, showMore])

    return (
        <div className="container">
            <h1 className="character-name">{character.name}</h1>
            <div className="character-detail">
                <div className="character-image">
                    <img src={character.img} alt={character.name} />
                </div>
                <div className="character-info">
                    <p><strong>Idade:</strong> {character.age}</p>
                    <p><strong>Raça:</strong> {character.race}</p>
                    <p><strong>Parentesco:</strong> {character.kinship}</p>
                    <p><strong>Habilidades:</strong> {character.abilities}</p>
                    <p className={`character-bio ${showMore ? 'expanded' : ''}`} 
                        ref={bioRef}>
                        <strong>Biografia: </strong> {character.description}
                    </p>
                    {isOverflowing && (
                    <button onClick={handleShowMore}
                    className={showMore ? 'show-less' : 'show-more'}
                    >
                        {showMore ? 'Ver menos' : 'Ver mais'}
                    </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CharactersDetails
