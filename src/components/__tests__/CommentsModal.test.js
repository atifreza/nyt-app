import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentsModal from '../CommentsModal';

describe('CommentsModal', () => {
  test('renders modal with comments', () => {
    const article = {
      comments: [
        { userComment: 'Comment 1' },
        { userComment: 'Comment 2' },
      ],
    };
    const showComments = true;
    const setShowComments = jest.fn();

    render(
      <CommentsModal
        article={article}
        showComments={showComments}
        setShowComments={setShowComments}
      />
    );

    const modalTitle = screen.getByText('Top comments');
    const comment1 = screen.getByText('Comment 1');
    const comment2 = screen.getByText('Comment 2');

    expect(modalTitle).toBeInTheDocument();
    expect(comment1).toBeInTheDocument();
    expect(comment2).toBeInTheDocument();
  });
});
