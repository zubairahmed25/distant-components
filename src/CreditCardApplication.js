import React, { Component } from 'react';

export default class CreditCardApplication extends Component {
  render() {
    const { loggedInAs, isCreditCardHolder } = this.props;

    return (
      <div className="credit-card-application">
        {!isCreditCardHolder && <div>
          <p>Hi {loggedInAs}, apply now!</p>
          <p><button className="button">Yes, sign me up!</button></p>
        </div>}
        {isCreditCardHolder && "Thanks for signing up!"}
      </div>
    )
  }
};
