import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import HomePage from './Layout/Components/HomePage';

function App() {
  return (
    <div className="">
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
