import React from 'react';
import { connect } from 'react-redux';
import { Home } from '../components/Home';
import { WelcomeComponent } from '../components/WelcomeComponent';
import { history } from '../helpers';
import { alertActions } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { clearAlert } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      clearAlert();
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

const connectedApp = connect((state) => {
  const { alert } = state;
  return {
    alert,
  };
}, {
  clearAlert: alertActions.clear,
})(App);

export { connectedApp as App };
