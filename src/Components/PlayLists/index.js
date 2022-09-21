import {AiOutlineDelete} from 'react-icons/ai'

const PlayList = props => {
  const {playlist, deleteClick} = props

  const delClick = () => {
    deleteClick(playlist.id)
  }

  return (
    <li>
      <div className="sub-card-1">
        <img className="img" src={playlist.imageUrl} alt="track" />
        <div>
          <p>{playlist.name}</p>
          <p className="genre">{playlist.genre}</p>
        </div>
      </div>
      <div className="sub-card-2">
        <p>{playlist.duration}</p>
        <button onClick={delClick} className="button" type="button">
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default PlayList
