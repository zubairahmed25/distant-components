import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInAs } from './ducks/reducer';

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
    const { loggedInAs, isCreditCardHolder, logInAs } = this.props;
    console.log('this.props.dispatch', this.props.dispatch);

    return (
      <div className="login">
        {!loggedInAs && <div>
          Log in as <input onChange={(e) => this.updateLoginName(e.target.value)} /> <button className="button"
            onClick={() => logInAs(this.state.loginName)}
          >Go</button>
        </div>}
        {loggedInAs && <div>
          Welcome, {loggedInAs}! {isCreditCardHolder && "(CC holder)"}
        </div>}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    loggedInAs: state.loggedInAs,
    isCreditCardHolder: state.isCreditCardHolder,
  }
};

const mapDispatchToProps = {
  logInAs: logInAs,
};

// This set of lines...
// const connector = connect(mapStateToProps);
// const connectedLogin = connector(Login);
// export default connectedLogin;

// ... does the same thing as this. This is more common to see.
export default connect(mapStateToProps, mapDispatchToProps)(Login);
