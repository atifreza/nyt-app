import SearchArticleReducer from '../../reducers/SearchArticleReducer';
import {
  SET_ARTICLES,
  SET_SEARCHED_ARTICLE,
  SET_SEARCHED_ARTICLE_TEXT,
  SET_PAGE_NO
} from '../../ConstantTypes';

describe('SearchArticleReducer', () => {
  test('should return the initial state', () => {
    const initialState = {
      articles: [],
      searchedArticle: [],
      pageNo: 1,
      searchedArticleText: '',
    };
    
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = SearchArticleReducer(undefined, action);

    expect(newState).toEqual(initialState);
  });

  test('should handle SET_ARTICLES action', () => {
    const initialState = {
      articles: [],
      searchedArticle: [],
      pageNo: 1,
      searchedArticleText: '',
    };

    const articles = [{ title: 'Article 1' }, { title: 'Article 2' }];
    const action = {
      type: SET_ARTICLES,
      payload: articles,
    };

    const newState = SearchArticleReducer(initialState, action);

    expect(newState.articles).toEqual(articles);
  });

  test('should handle SET_SEARCHED_ARTICLE action', () => {
    const initialState = {
      articles: [],
      searchedArticle: [],
      pageNo: 1,
      searchedArticleText: '',
    };

    const searchedArticle = 'Test Article';
    const action = {
      type: SET_SEARCHED_ARTICLE,
      payload: searchedArticle,
    };

    const newState = SearchArticleReducer(initialState, action);

    expect(newState.searchedArticle).toEqual([searchedArticle]);
  });

  test('should handle SET_SEARCHED_ARTICLE_TEXT action', () => {
    const initialState = {
      articles: [],
      searchedArticle: [],
      pageNo: 1,
      searchedArticleText: '',
    };

    const searchedArticleText = 'Test';
    const action = {
      type: SET_SEARCHED_ARTICLE_TEXT,
      payload: searchedArticleText,
    };

    const newState = SearchArticleReducer(initialState, action);

    expect(newState.searchedArticleText).toEqual(searchedArticleText);
  });

  test('should handle SET_PAGE_NO action', () => {
    const initialState = {
      articles: [],
      searchedArticle: [],
      pageNo: 1,
      searchedArticleText: '',
    };

    const pageNo = 2;
    const action = {
      type: SET_PAGE_NO,
      payload: pageNo,
    };

    const newState = SearchArticleReducer(initialState, action);

    expect(newState.pageNo).toEqual(pageNo);
  });
});
