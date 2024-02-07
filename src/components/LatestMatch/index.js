// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  //   const {
  //     matchStatus,
  //     umpires,
  //     result,
  //     manoftheMatch,
  //     date,
  //     venue,
  //     compitatingTeam,
  //     compitatingTeamLogo,
  //     firstInnings,
  //     secondInnings,
  //   } = latestMatchDetails

  return (
    <div className="latest-bg">
      <div className="left-container">
        <h1>Delhi Capitals</h1>
        <h1>2020-11-08</h1>
        <p>At Sheikh Zayed Stadium, Abu Dhabi</p>
        <p>Delhi Capitals Won by 17 runs</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/dc-logo-img.png"
          alt="img"
          className="oop-team-img"
        />
      </div>
      <div className="right-container">
        <p className="line-text">First Innings</p>
        <p className="line-text">Delhi Capitals</p>
        <p className="line-text">Second Innings</p>
        <p className="line-text">Sunrisers Hyderabad</p>
        <p className="line-text">Man Of The Match</p>
        <p className="line-text">MP Stoinis</p>
        <p className="line-text">Umpires</p>
        <p className="line-text">PR Reiffel, S Ravi</p>
      </div>
    </div>
  )
}

export default LatestMatch
