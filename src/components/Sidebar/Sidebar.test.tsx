import { render, screen } from '@testing-library/react';
import { Sidebar } from './index';
import '@testing-library/jest-dom';

describe('Sidebar Component', () => {
  it('deve renderizar corretamente com children', () => {
    render(
      <Sidebar>
        <p>Conteúdo do Sidebar</p>
      </Sidebar>
    );

    expect(screen.getByText('Conteúdo do Sidebar')).toBeInTheDocument();
  });
});