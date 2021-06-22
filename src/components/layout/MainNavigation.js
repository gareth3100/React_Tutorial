import { Link } from 'react-router-dom'
//using <Link> makes it so that it does not actually change pages by sending a GET request as an a href would, 
//but rather loads the appropriate componnet onto the screen. i.e. doesn't send an extra GET request for a page

import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
      //the classes.header is from the module.css file. This module makes it so that it does properties do not get
      //mixed up between files if they have the same name
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
            <li>
               <Link to='/'>All Meetups</Link>
            </li>
            <li>
               <Link to='/new-meetup'>Add New Meetup</Link>
            </li>
            <li>
               <Link to='/favorites'>My Favorites</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
