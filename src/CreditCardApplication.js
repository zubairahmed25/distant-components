import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setIsCreditCardHolder } from './redux/reducer';

class CreditCardApplication extends Component {
  render() {
    const { loggedInAs, isCreditCardHolder, setIsCreditCardHolder } = this.props;

    return (
      <div className="credit-card-application">
        {!loggedInAs && "Must log in first"}
        {loggedInAs && <div>
          {!isCreditCardHolder && <div>
            <p>Hi {loggedInAs}, apply now!</p>
            <p><button className="button" onClick={(e) => setIsCreditCardHolder(true)}>Yes, sign me up!</button></p>
          </div>}
          {isCreditCardHolder && "Thanks for signing up!"}
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
  setIsCreditCardHolder: setIsCreditCardHolder
};

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardApplication);