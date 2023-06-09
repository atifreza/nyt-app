import React from 'react';
import { render, screen } from '@testing-library/react';
import Articles from '../Articles';

const mockArticles = [
  {
    _id: 'article-1',
    headline: { main: 'Article 1' },
    web_url: 'https://example.com/article-1',
    byline: { original: 'John Doe' },
    snippet: 'Snippet 1',
    multimedia: [{ url: 'image1.jpg' }],
  },
  {
    _id: 'article-2',
    headline: { main: 'Article 2' },
    web_url: 'https://example.com/article-2',
    byline: { original: 'Jane Smith' },
    snippet: 'Snippet 2',
    multimedia: [{ url: 'image2.jpg' }],
  },
];

describe('Articles', () => {
  test('renders articles correctly', () => {
    render(<Articles articles={mockArticles} />);

    const article1 = screen.getByTestId('article-1');
    const article2 = screen.getByTestId('article-2');

    expect(article1).toBeInTheDocument();
    expect(screen.getByText('Article 1')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Snippet 1')).toBeInTheDocument();

    expect(article2).toBeInTheDocument();
    expect(screen.getByText('Article 2')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Snippet 2')).toBeInTheDocument();
  });

  test('renders no articles message when articles are empty', () => {
    render(<Articles articles={[]} />);
  
    const noArticlesMessage = screen.queryByText('No Articles found');
  
    expect(noArticlesMessage).toBeNull();
  });
});
