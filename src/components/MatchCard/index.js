import {Link} from 'react-router-dom'
import './index.css'

const Matchcard = props => {
  const {details} = props
  const {name, id, teamImageUrl} = details
  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <div className="card">
          <div className="imagecontainer">
            <img src={teamImageUrl} className="logo" alt="teamlogo" />
            <h3>{name}</h3>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default Matchcard
