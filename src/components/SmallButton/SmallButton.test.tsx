import { render, screen, fireEvent } from '@testing-library/react';
import { SmallButton } from './index';
import '@testing-library/jest-dom';

describe('SmallButton Component', () => {
  it('deve renderizar corretamente com texto', () => {
    render(<SmallButton>Click Me</SmallButton>);

    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('deve chamar onClick ao ser clicado', () => {
    const handleClick = jest.fn();
    render(<SmallButton onClick={handleClick}>Click Me</SmallButton>);

    const buttonElement = screen.getByText('Click Me');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('deve renderizar o botão no DOM corretamente', () => {
    const { container } = render(<SmallButton>Test</SmallButton>);

    expect(container.firstChild).toBeInTheDocument();
  });
});