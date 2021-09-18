import logo from './logo.svg';
import './App.css';
import{ Router, Route, Switch } from 'react-router-dom'
import PartnerPortal from './Component/PartnerPortal';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
     <Route path="/" component={PartnerPortal}></Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;