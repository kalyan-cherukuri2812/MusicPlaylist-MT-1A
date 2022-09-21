import './index.css'

import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import PlayList from '../PlayLists'

export default class Main extends Component {
  state = {search: '', playList: []}

  search = event => {
    this.setState({search: event.target.value})
  }

  deleteClick = id => {
    const {playList} = this.state
    const deleted = playList.filter(each => each.id !== id)
    this.setState({playList: deleted})
  }

  componentDidMount = () => {
    const {initialTracksList} = this.props
    this.setState({playList: initialTracksList})
  }

  render() {
    const {search, playList} = this.state

    const result = playList.filter(each =>
      each.name.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="img-card">
          <h1 className="singer-name">Ed Sheeran</h1>
          <p className="singer">Singer</p>
        </div>

        <div className="song-ser-div">
          <h1 className="playlist-h">Songs PlayList</h1>
          <div className="search-div">
            <input
              onChange={this.search}
              className="search-input"
              type="search"
              placeholder="Search"
            />
            <AiOutlineSearch />
          </div>
        </div>

        {result.length !== 0 ? (
          <ul>
            {result.map(each => (
              <PlayList
                key={each.id}
                playlist={each}
                deleteClick={this.deleteClick}
              />
            ))}
          </ul>
        ) : (
          <p className="no-song">No Songs Found</p>
        )}
      </div>
    )
  }
}
