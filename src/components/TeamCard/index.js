// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, imageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="li-container">
        <img src={imageUrl} alt={id} className="logo" />
        <h1 className="title">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
