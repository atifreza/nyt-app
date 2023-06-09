import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Article from '../Article';

const mockArticle = {
  _id: 'article-1',
  headline: { main: 'Test Article' },
  web_url: 'https://example.com/article',
  byline: { original: 'John Doe' },
  snippet: 'Test article snippet',
  multimedia: [{ url: 'image.jpg' }],
};

describe('Article', () => {
  test('renders article correctly', () => {
    render(<Article article={mockArticle} />);

    const articleElement = screen.getByTestId('article-1');

    expect(articleElement).toBeInTheDocument();
    expect(screen.getByText('Test Article')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Test article snippet')).toBeInTheDocument();
    expect(screen.getByAltText('news-img')).toHaveAttribute(
      'src',
      'https://nytimes.com/image.jpg'
    );
  });

  test('shows comments modal on click', () => {
    render(<Article article={mockArticle} />);

    fireEvent.click(screen.getByText('Click to see comment'));

    expect(screen.getByTestId('comments-modal')).toBeInTheDocument();
  });
});
