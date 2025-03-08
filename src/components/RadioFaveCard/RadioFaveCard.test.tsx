import { render, screen, fireEvent } from '@testing-library/react';
import { RadioFaveCard } from './index';
import '@testing-library/jest-dom';

describe('RadioFaveCard Component', () => {
  it('deve renderizar corretamente com children', () => {
    render(
      <RadioFaveCard>
        <p>Favorite Radio</p>
      </RadioFaveCard>
    );

    expect(screen.getByText('Favorite Radio')).toBeInTheDocument();
  });

  it('deve chamar a função onClick ao ser clicado', () => {
    const handleClick = jest.fn();
    render(<RadioFaveCard onClick={handleClick}>Click Me</RadioFaveCard>);

    const cardElement = screen.getByText('Click Me');
    fireEvent.click(cardElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('deve renderizar o card no DOM corretamente', () => {
    const { container } = render(<RadioFaveCard />);

    expect(container.firstChild).toBeInTheDocument();
  });
});