import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from './index';
import '@testing-library/jest-dom';

describe('SearchInput Component', () => {
  it('deve renderizar corretamente com placeholder', () => {
    render(<SearchInput placeholder="Digite aqui" value="" onChange={() => { }} />);

    expect(screen.getByPlaceholderText('Digite aqui')).toBeInTheDocument();
  });

  it('deve chamar onChange ao digitar no input', () => {
    const handleChange = jest.fn();
    render(<SearchInput placeholder="Buscar" value="" onChange={handleChange} />);

    const inputElement = screen.getByPlaceholderText('Buscar');
    fireEvent.change(inputElement, { target: { value: 'Teste' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('deve atualizar o valor do input corretamente', () => {
    let value = '';
    const handleChange = jest.fn((event) => {
      value = event.target.value;
    });

    render(<SearchInput placeholder="Buscar" value={value} onChange={handleChange} />);

    const inputElement = screen.getByPlaceholderText('Buscar');
    fireEvent.change(inputElement, { target: { value: 'Novo Valor' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});