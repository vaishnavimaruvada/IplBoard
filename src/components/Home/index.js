import {Component} from 'react'
import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  render() {
    return (
      <Link to="/">
        <div className="homecontainer">
          <div className="imagecontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="logo"
              alt="logo"
            />
            <h1 className="text">Ipl DashBoard </h1>
          </div>

          <TeamCard />
        </div>
      </Link>
    )
  }
}
export default Home
