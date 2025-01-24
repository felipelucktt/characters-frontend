import './modal.css';

function Modal({ closeModal }) {
    return (
        <div className="modal">
        <div className="modal-content">
        <div className="close-content">
        <button type="button" className='close-button' onClick={closeModal}>X</button>
        </div>
        <h2>Adicionar Personagem</h2>
        <form>
          <input placeholder="Nome" name="name" type='text' />
          <input placeholder="Idade" name="age" type='number' />
          <input placeholder="Raça" name="race" type='text' />
          <input placeholder="Parentesco" name="kinship" type='text' />
          <input placeholder="Habilidades" name="abilities" type='text' />
          <input placeholder="Caminho da imagem" name="img" type='text' />
          <textarea placeholder="Biografia" name="description" type='text' />
          <button type="button" className='add-button' >Adicionar</button>
        </form>
      </div>
    </div>
    )
}

export default Modal;