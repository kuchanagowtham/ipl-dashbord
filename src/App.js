import {Switch, Route} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import TeamMatcheas from './components/TeamMatches'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatcheas} />
    </Switch>
  </>
)

export default App
