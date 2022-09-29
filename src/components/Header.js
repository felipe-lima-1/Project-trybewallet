import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    const expense = 0;
    return (
      <div>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">{`Despesas totais: ${expense}`}</div>
        <div data-testid="header-currency-field">BRL</div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Header);
