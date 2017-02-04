import React from 'react';
import { Router, Route, browserHistory, HashHistory, useRouterHistory, createHistory } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';


//redux
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'
import { connect } from 'react-redux';
import store from './store';


function mapStateToProps(state) {
  return {
    user: state.userReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      
  }
}

class RootRoute extends React.Component {

  render() {

    
    // Create an enhanced history that syncs navigation events with the store
    const history = syncHistoryWithStore(browserHistory, store)
    console.log(this.props.user);
    function requireAuth(nextState, replace) {
      if (!this.props.user.logged) {
        replace({
          pathname: '/login'
        })
      }
    }
    return (
      <Router history={history}>
          <Route path="/" component={App} />
          <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootRoute);