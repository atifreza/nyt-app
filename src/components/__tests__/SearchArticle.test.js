import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchArticle from '../SearchArticle';
import {getSearchArticles} from "../../redux/actions/SearchArticleActions";

// Mock the Redux store
const mockStore = configureStore([]);

describe('SearchArticle', () => {
  let store;

  beforeEach(() => {
    // Initialize the Redux store
    store = mockStore({
      SearchArticleReducer: {
        articles: [],
        searchedArticle: [],
        searchedArticleText: '',
        pageNo: 1,
        comments: [],
      },
      TopStoriesReducer: {
        isLoading: false,
      },
    });
  });

  test('renders search article component', () => {
    render(
      <Provider store={store}>
        <Router>
          <SearchArticle />
        </Router>
      </Provider>
    );

    const linkText = /Go to top stories in the World/i;
    const linkElement = screen.getByText(linkText);

    expect(linkElement).toBeInTheDocument();
  });
  test.skip('searchArticles on button click', async () => {
    const searchArticlesMock = jest.fn();
    render(<Provider store={store}>
      <Router>
        <SearchArticle />
      </Router>
    </Provider>);
    
    const searchInput = screen.getByPlaceholderText('Search');
    const searchBtn = screen.getByTestId('Search');

    fireEvent.change(searchInput, { target: { value: 'test' } });
  
    fireEvent.click(searchBtn);
    const expectedAction = getSearchArticles('test');
    expect(store.getActions()).toContainEqual(expectedAction);
    expect(searchArticlesMock).toHaveBeenCalledWith('test');
  });
});



