import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import HomePage from './Layout/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
