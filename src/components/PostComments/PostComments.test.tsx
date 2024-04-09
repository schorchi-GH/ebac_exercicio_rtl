import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from './index';

describe('Testes para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  it('Permite ao usuário adicionar dois comentários', () => {
    render(<PostComment />);
    
    // Assume que existe um input para adicionar comentários e um botão para submetê-los
    const input = screen.getByPlaceholderText('Adicione um comentário...'); // Ajuste o placeholder conforme necessário
    const addButton = screen.getByRole('button', { name: /comentar/i });

    // Adiciona o primeiro comentário
    fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(addButton);
    
    // Verifica se o primeiro comentário foi adicionado
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

    // Limpa o input e adiciona o segundo comentário
    fireEvent.change(input, { target: { value: 'Segundo comentário' } });
    fireEvent.click(addButton);
    
    // Verifica se o segundo comentário foi adicionado
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
  });
});
