import './App.css'
import { Switch, Route } from "wouter";
import Navbar from './components/Navbar';
import NavComponent from './components/NavComponent';
import { DatabaseProvider } from './customs/DatabaseContext';
import {routes} from './customs/routes';

function App() {
  return (
    <div>
      <DatabaseProvider>
      <Navbar />
      <Switch>
        {routes.map(route => {
          return <Route exact path={route.path} key={route.navKey}>
            {() => <NavComponent url={route.url} navKey={route.navKey} heading={route.heading} key={route.key} />}
          </Route>
        })}
      </Switch>
      </DatabaseProvider>
    </div>
  );
}

export default App;