import { render, screen, fireEvent } from '@testing-library/react';
import { RadioCard } from './index';
import '@testing-library/jest-dom';

describe('RadioCard Component', () => {
  it('deve renderizar corretamente com children', () => {
    render(
      <RadioCard>
        <p>Test Radio</p>
      </RadioCard>
    );

    expect(screen.getByText('Test Radio')).toBeInTheDocument();
  });

  it('deve chamar a função onClick ao ser clicado', () => {
    const handleClick = jest.fn();
    render(<RadioCard onClick={handleClick}>Click Me</RadioCard>);

    const cardElement = screen.getByText('Click Me');
    fireEvent.click(cardElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('deve renderizar o card no DOM corretamente', () => {
    const { container } = render(<RadioCard />);

    expect(container.firstChild).toBeInTheDocument();
  });
});