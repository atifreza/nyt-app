import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import TopStories from '../TopStories';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('TopStories', () => {
    test('renders top stories', () => {
        const store = mockStore({
            TopStoriesReducer: {
                topStories: [
                    { url: '1', title: 'Story 1', snippet: 'Snippet 1' },
                    { url: '2', title: 'Story 2', snippet: 'Snippet 2' },
                ],
                isLoading: false,
                category: 'world',
            },
        });

        render(
            <Provider store={store}>
                <Router>
                    <TopStories />
                </Router>
            </Provider>
        );

        const story1 = screen.getByText('Story 1');
        const story2 = screen.getByText('Story 2');
        const categorySelect = screen.getByLabelText('Category');
        const searchArticleLink = screen.getByText('Go To Search Article');

        expect(story1).toBeInTheDocument();
        expect(story2).toBeInTheDocument();
        expect(categorySelect).toBeInTheDocument();
        expect(searchArticleLink).toBeInTheDocument();
    });

    test('renders top stories', () => {
        const store = mockStore({
            TopStoriesReducer: {
                topStories: [
                    { url: '1', title: 'Story 1', snippet: 'Snippet 1' },
                    { url: '2', title: 'Story 2', snippet: 'Snippet 2' },
                ],
                isLoading: true,
                category: 'world',
            },
        });

        render(
            <Provider store={store}>
                <Router>
                    <TopStories />
                </Router>
            </Provider>
        );

        const story1 = screen.getByTestId('spinner');
        expect(story1).toBeInTheDocument();
    });

});
