import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Interior from './components/interior'
import Patio from './components/patio'
import PrimerPiso  from './components/primerPiso';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Interior}/>
        <Route path='/patio' component={Patio}/>
        <Route path='/primerpiso' component={PrimerPiso}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
