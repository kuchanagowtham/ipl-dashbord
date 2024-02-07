import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updetedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      imageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updetedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="main-bg">
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <div>
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="logo-icon"
                alt="ipl logo"
              />
              <h1 className="heading">Ipl Dashboard</h1>
            </div>
            <ul className="ul-container">
              {teamsList.map(each => (
                <TeamCard teamDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
