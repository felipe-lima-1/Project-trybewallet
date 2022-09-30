import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../redux/actions';

class WalletForm extends Component {
  state = {
    despesa: '',
    descricao: '',
    currency: 'USD',
    pagamento: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { catchCoins } = this.props;
    catchCoins();
  }

  render() {
    const { currencies } = this.props;
    const { despesa, descricao, currency, pagamento, tag } = this.state;
    return (
      <form>
        <div>
          <label htmlFor="value-input">
            <input
              type="number"
              id="value-input"
              data-testid="value-input"
              value={ despesa }
              name="value-input"
            />
          </label>
          <label htmlFor="description-input">
            <input
              type="text"
              id="description-input"
              data-testid="description-input"
              value={ descricao }
              name="description-input"
            />
          </label>
          <label htmlFor="currency-input">
            <select
              data-testid="currency-input"
              id="currency-input"
              value={ currency }
              name="currency-input"
            >
              {
                currencies.map((event, index) => <option key={ index }>{event}</option>)
              }
            </select>
          </label>
          <label htmlFor="method-input">
            <select
              data-testid="method-input"
              id="method-input"
              value={ pagamento }
              name="method-input"
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
              name="tag-input"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </div>
        ;
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  catchCoins: () => dispatch(fetchApi()),
});

WalletForm.propTypes = {
  currencies: PropTypes.instanceOf(Array),
  catchCoins: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

// AJUDA DA MONITORIA
