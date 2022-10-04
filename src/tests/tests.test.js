import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

const emailValue = 'email-input';
const passwordValue = 'password-input';
const email = 'teste@teste.com';
const password = '123456';

describe('1 - Teste pagina login', () => {
  it('testando se renderiza a pagina do login', () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
    );

    const emailInput = screen.getByTestId(emailValue);
    const passwordInput = screen.getByTestId(passwordValue);
    const { pathname } = history.location;

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(pathname).toBe('/');
  });

  it('testando se loga', () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
    );

    const emailInput = screen.getByTestId(emailValue);
    const passwordInput = screen.getByTestId(passwordValue);
    const enter = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '123456');
    expect(enter).toBeInTheDocument();
    userEvent.click(enter);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});

describe('2 - Testando Header', () => {
  it('testando se renderiza Header', () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
    );

    const emailInput = screen.getByTestId(emailValue);
    const passwordInput = screen.getByTestId(passwordValue);
    const enter = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    expect(enter).toBeInTheDocument();
    userEvent.click(enter);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');

    const headerEmailField = screen.getByTestId('email-field');
    const headerTotalField = screen.getByTestId('total-field');
    const headerCurrencyField = screen.getByTestId('header-currency-field');
    expect(headerEmailField).toBeInTheDocument();
    expect(headerEmailField).toContainHTML(email);
    expect(headerTotalField).toBeInTheDocument();
    expect(headerTotalField).toContainHTML('0.00');
    expect(headerCurrencyField).toBeInTheDocument();
    expect(headerCurrencyField).toContainHTML('BRL');
  });
});

describe('3 - Testando Wallet Form', () => {
  test('testando se renderiza', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId(emailValue);
    const passwordInput = screen.getByTestId(passwordValue);
    const enter = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    expect(enter).toBeInTheDocument();
    userEvent.click(enter);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');

    const formValueInput = screen.getByTestId('value-input');
    const formDescriptionInput = screen.getByTestId('description-input');
    const formCurrencyInput = screen.getByTestId('currency-input');
    const formMethodInput = screen.getByTestId('method-input');
    const formTagInput = screen.getByTestId('tag-input');
    const addButton = screen.getByRole('button', { name: /adicionar/i });
    expect(formValueInput).toBeInTheDocument();
    expect(formDescriptionInput).toBeInTheDocument();
    expect(formCurrencyInput).toBeInTheDocument();
    expect(formMethodInput).toBeInTheDocument();
    expect(formTagInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    userEvent.type(formDescriptionInput, 'test');
    expect(formDescriptionInput).toContainHTML('test');
  });
});
