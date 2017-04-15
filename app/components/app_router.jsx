import React from 'react';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {
  HashRouter as Router,
  Route,
  IndexRoute,
  hashHistory,
  Switch
} from 'react-router-dom';
import ScrollToTop from './scroll_to_top';
import HomeContainer from './home/home_container';
import BurnCartelCurated from './curated/burn_cartel_curated';
import TrackShowContainer from './track/track_show_container';
import UserShowContainer from './user/user_show_container';
import LikesShowContainer from './likes/likes_show_container';
import NoMatch from './no_match';
import AppContainer from './app/app_container';




class AppRouter extends React.Component{

  render() {
  // <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
  	return (
  		<Router>
        <div>
          <ScrollToTop/>
          <AppContainer theLocation={location}/>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/tracks/:id" component={TrackShowContainer} />
            <Route path="/users/:id" component={UserShowContainer} />
            <Route path="/likes/:id" component={LikesShowContainer} />
            <Route path="/curated" component={BurnCartelCurated} />
            <Route component={NoMatch}/>
          </Switch>
        {/* </ScrollToTop> */}
        </div>
  		</Router>
  	);
  }
}

export default AppRouter;
