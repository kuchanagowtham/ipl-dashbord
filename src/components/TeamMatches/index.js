// Write your code here

import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatcheas extends Component {
  state = {matchDetails: []}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBanner: data.team_banner_url,
      latestMatchDetails: {
        compitatingTeam: data.latest_match_details.competing_team,
        compitatingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manoftheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(each => ({
        id: each.id,
        compitatingTeam: each.competing_team,
        compitatingTeamLogo: each.competing_team_logo,
        date: each.date,
        firstInnings: each.first_innings,
        manOftheMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        result: each.result,
        secondInnings: each.second_innings,
        umpires: each.umpires,
        venue: each.venue,
      })),
    }
    this.setState({matchDetails: updatedData})
  }

  render() {
    const {matchDetails} = this.state
    console.log(matchDetails.latestMatchDetails)

    const {teamBanner, latestMatchDetails, recentMatches} = matchDetails

    return (
      <div className="team-main-bg">
        <img src={teamBanner} alt="id" />
        <h4>Latest Matches</h4>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul>
          {recentMatches.map(recentMatch => (
            <MatchCard matchData={recentMatch} key={recentMatch.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatcheas
