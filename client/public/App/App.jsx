import React from 'react';
import { connect } from 'react-redux';
import { Home } from '../components/Home';
import { WelcomeComponent } from '../components/WelcomeComponent';
import { history } from '../helpers';
import { alertActions } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }
  render() {
    return (
      <div>
        <WelcomeComponent />
        <Home />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };