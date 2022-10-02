import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  totalSumExpenses = () => {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      const sum = expenses.reduce((event, element) => {
        const coin = element.currency;
        const exchange = element.exchangeRates[coin].ask;
        const value = Number(exchange) * Number(element.value);
        return event + Number(value);
      }, 0);
      return Number(sum).toFixed(2);
    }
    return 0;
  };

  render() {
    const { email } = this.props;
    const totalExpenses = this.totalSumExpenses();
    return (
      <div>
        <div data-testid="email-field">{email}</div>
        <div data-testid="total-field">{totalExpenses}</div>
        <div data-testid="header-currency-field">BRL</div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.instanceOf(Array),
}.isRequired;

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);

// AJUDA DO FOSTER //
