import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { catchUser } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleClick = (email) => {
    const { getEmail, history } = this.props;
    getEmail(email);
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;
    const validateEmail = /\S+[@]\w+[.]\w+/gm;
    const lengthMin = 6;
    const validate = (validateEmail.test(email) && password.length >= lengthMin);
    return (
      <div>
        <form>
          <div>
            E-mail
            <input
              type="email"
              data-testid="email-input"
              value={ email }
              onChange={ ({ target: { value } }) => this.setState({ email: value }) }
            />
          </div>
          <div>
            Senha
            <input
              type="password"
              data-testid="password-input"
              value={ password }
              onChange={ ({ target: { value } }) => this.setState({ password: value }) }
            />
          </div>
          <button
            type="button"
            disabled={ !validate }
            onClick={ () => this.handleClick(email) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(catchUser(email)),
});

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
