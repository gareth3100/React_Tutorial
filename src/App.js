
import { Route, Switch } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (

      //everything inside layout tags is the children
      <Layout>
      {/* route checks if it INCLUDES whats inside the ' ' so '/favorites' INCLUDES '/' */}
        <Switch>
          {/* <Switch> will only render first route that matches/includes the path. 
          exact makes it so that it searches for the entire thing */}
          <Route path='/' exact>
            <AllMeetupsPage />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetupsPage />
          </Route>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
