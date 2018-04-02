import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './redux-stuff/reducer';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginName: ''
    };

    this.updateLoginName = this.updateLoginName.bind(this);
  }

  updateLoginName(name) {
    this.setState({ loginName: name })
  }

  render() {
    const { loggedInAs, isCreditCardHolder, setLoggedInAs, dispatchLogin } = this.props;

    return (
      <div className="login">
        {!loggedInAs && <div>
          Log in as <input onChange={(e) => this.updateLoginName(e.target.value)} /> <button className="button" onClick={() => dispatchLogin(this.state.loginName)}>Go</button>
        </div>}
        {loggedInAs && <div>
          Welcome, {loggedInAs}! {isCreditCardHolder && "(CC holder)"}
        </div>}
      </div>
    )
  }
};

const mapStateToProps = storeState => {
  return {
    loggedInAs: storeState.loginName,
  }
};

const mapDispatchToProps = {
  dispatchLogin: login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
