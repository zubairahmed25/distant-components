import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLoggedInAs } from './redux/reducer';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginName: ''
    };

    this.setLoginName = this.setLoginName.bind(this);
  }

  setLoginName(name) {
    this.setState({ loginName: name });
  }

  render() {
    const { loggedInAs, isCreditCardHolder, setLoggedInAs } = this.props;

    return (
      <div className="login">
        {!loggedInAs && <div>
          Sign in as <input onChange={(e) => this.setLoginName(e.target.value)} /> <button className="button" onClick={() => setLoggedInAs(this.state.loginName)}>Go</button>
        </div>}
        {loggedInAs && <div>
          Welcome, {loggedInAs}! {isCreditCardHolder && "(CC holder)"}
        </div>}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    loggedInAs: state.shared.loggedInAs,
    isCreditCardHolder: state.shared.isCreditCardHolder
  }
};

const mapDispatchToProps = {
  setLoggedInAs: setLoggedInAs
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);