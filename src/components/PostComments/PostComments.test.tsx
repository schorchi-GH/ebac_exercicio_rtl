import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from './index';

describe('Testes para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  it('Permite ao usuário adicionar dois comentários', () => {
    render(<PostComment />);
    
    const input = screen.getByTestId('comment-input'); // Utilizando getByTestId
    const addButton = screen.getByTestId('submit-comment-button'); // Utilizando getByTestId
  
    fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
  
    fireEvent.change(input, { target: { value: 'Segundo comentário' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
  });
  
});
