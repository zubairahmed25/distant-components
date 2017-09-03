import React, { Component } from 'react';

export default class Login extends Component {

  render() {
    const { loggedInAs, isCreditCardHolder } = this.props;

    return (
      <div className="login">
        {!loggedInAs && <div>
          Sign in as <input /> <button className="button">Go</button>
        </div>}
        {loggedInAs && <div>
          Welcome, {loggedInAs}! {isCreditCardHolder && "(CC holder)"}
        </div>}
      </div>
    )
  }
};
