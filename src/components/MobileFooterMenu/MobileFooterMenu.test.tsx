import { render, screen } from '@testing-library/react';
import { MobileFooterMenu } from './index';
import '@testing-library/jest-dom';

describe('MobileFooterMenu Component', () => {
  it('deve renderizar corretamente com children', () => {
    render(
      <MobileFooterMenu>
        <p>Item 1</p>
        <p>Item 2</p>
      </MobileFooterMenu>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('não deve renderizar nada se nenhum children for passado', () => {
    const { container } = render(<MobileFooterMenu />);

    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('deve renderizar o container do menu', () => {
    const { container } = render(<MobileFooterMenu />);

    expect(container.firstChild).toBeInTheDocument();
  });
});