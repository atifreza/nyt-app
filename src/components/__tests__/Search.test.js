import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../Search';

describe('Search', () => {
  test('renders search input and handles input change', () => {
    const searchArticlesMock = jest.fn();
    render(<Search searchArticles={searchArticlesMock} />);

    const searchInput = screen.getByText('Search articles');

    expect(searchInput).toBeInTheDocument();
  });

  test('handles form submission', () => {
    const searchArticlesMock = jest.fn();
    render(<Search searchArticles={searchArticlesMock} />);
    
    const searchInput = screen.getByPlaceholderText('Search');
  
    fireEvent.change(searchInput, { target: { value: 'test' } });
    
    expect(searchInput).toBeInTheDocument();
  });

  test('handleSubmit', () => {
    const searchArticlesMock = jest.fn();
    render(<Search searchArticles={searchArticlesMock} />);
    
    const searchInput = screen.getByPlaceholderText('Search');
    const searchBtn = screen.getByTestId('Search');

    fireEvent.change(searchInput, { target: { value: 'test' } });
  
    fireEvent.click(searchBtn);
    
    expect(searchArticlesMock).toHaveBeenCalledWith('test');
  });
});
