import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi, fetchExpense } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { catchCoins } = this.props;
    catchCoins();
  }

  handleClick = () => {
    const { value, description, currency, method, tag } = this.state;
    const { totalExpense, id } = this.props;
    const teste = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };
    totalExpense(teste);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <label htmlFor="value-input">
          <input
            type="number"
            id="value-input"
            data-testid="value-input"
            value={ value }
            name="value"
            onChange={ (event) => {
              this.handleChange(event);
            } }
          />
        </label>
        <label htmlFor="description-input">
          <input
            type="text"
            id="description-input"
            data-testid="description-input"
            value={ description }
            name="description"
            onChange={ (event) => {
              this.handleChange(event);
            } }
          />
        </label>
        <label htmlFor="currency-input">
          <select
            data-testid="currency-input"
            id="currency-input"
            value={ currency }
            name="currency"
            onChange={ (event) => {
              this.handleChange(event);
            } }
          >
            {currencies.map((event, index) => (
              <option key={ index }>{event}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          <select
            data-testid="method-input"
            id="method-input"
            value={ method }
            name="method"
            onChange={ (event) => {
              this.handleChange(event);
            } }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          <select
            data-testid="tag-input"
            id="tag-input"
            value={ tag }
            name="tag"
            onChange={ (event) => {
              this.handleChange(event);
            } }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  id: wallet.expenses.length,
});

const mapDispatchToProps = (dispatch) => ({
  catchCoins: () => dispatch(fetchApi()),
  totalExpense: (expense) => dispatch(fetchExpense(expense)),
});

WalletForm.propTypes = {
  currencies: PropTypes.instanceOf(Array),
  catchCoins: PropTypes.func,
  id: PropTypes.number,
  totalExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

// AJUDA DA MONITORIA
