import React from 'react';
import { render, screen } from '@testing-library/react';
import TopStory from '../TopStory';

describe('TopStory', () => {
  test('renders top story with correct data', () => {
    const topStory = {
      url: 'https://example.com',
      multimedia: [
        { url: 'https://example.com/image.jpg' }
      ],
      title: 'Example Story',
      byline: 'John Doe'
    };

    render(<TopStory topstory={topStory} />);

    const cardTitle = screen.getByText('Example Story');
    const cardSubtitle = screen.getByText('John Doe');

    expect(cardTitle).toBeInTheDocument();
    expect(cardSubtitle).toBeInTheDocument();
  });

  test('renders default image when multimedia is not available', () => {
    const topStory = {
      url: 'https://example.com',
      title: 'Example Story',
      byline: 'John Doe'
    };

    render(<TopStory topstory={topStory} />);

    const defaultImage = screen.getByAltText('news-img');
    expect(defaultImage.src).toBe('https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg');
  });
});
