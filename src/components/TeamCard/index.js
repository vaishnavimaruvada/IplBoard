import {Component} from 'react'
import MatchCard from '../MatchCard'
import './index.css'

class TeamCard extends Component {
  state = {
    matchList: [],
  }

  componentDidMount() {
    this.getMatchCards()
  }

  getMatchCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const {teams} = data
    const updateData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({matchList: updateData})
  }

  render() {
    const {matchList} = this.state
    console.log(matchList)
    return (
      <div className="team">
        <ul>
          {matchList.map(each => (
            <MatchCard details={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamCard
