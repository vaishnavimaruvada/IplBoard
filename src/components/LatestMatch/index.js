// Write your code here
import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  state = {matchdata: {}}

  componentDidMount() {
    this.getmatchdetails()
  }

  getmatchdetails = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedata = {
      teamBannerUrl: data.team_banner_url,

      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      manOfMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      firstings: data.latest_match_details.first_innings,
      secondings: data.latest_match_details.second_innings,
      result: data.latest_match_details.result,
      venue: data.latest_match_details.venue,
      umpires: data.latest_match_details.umpires,
    }
    this.setState({matchdata: updatedata})
  }

  render() {
    const {matchdata} = this.state
    const {
      teamBannerUrl,
      venue,
      competingTeam,
      competingTeamLogo,
      date,
      manOfMatch,
      matchStatus,
      firstings,
      secondings,
      result,
      umpires,
    } = matchdata
    console.log(matchdata)
    return (
      <div className="container">
        <div>
          <img src={teamBannerUrl} alt="logo" />
        </div>

        <div className="infocontainer">
          <img src={competingTeamLogo} className="logo" alt="teamLogo" />
          <div className="textcontainer">
            <h2 className="text">{competingTeam}</h2>
            <h4 className="text"> {date}</h4>
            <h4 className="text">{venue}</h4>
            <h5 className="text">
              {competingTeam} {result}
            </h5>
            <hr />
            <p className="text">first innings : {firstings} </p>
            <p className="text">second innings: {secondings}</p>
            <p className="text">man of the Match : {manOfMatch}</p>
            <p className="text"> umpires: {umpires}</p>
            <p className="text">matchstatus: {matchStatus}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
