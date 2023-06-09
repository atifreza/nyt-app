import {
  SET_ARTICLES,
  SET_SEARCHED_ARTICLE,
  SET_SEARCHED_ARTICLE_TEXT,
  SET_PAGE_NO
} from "../ConstantTypes";


const initialState = {
  articles: [],
  searchedArticle: [],
  pageNo: 1,
  searchedArticleText: '',
};

export default function SearchArticleReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case SET_SEARCHED_ARTICLE:
      return {
        ...state,
        searchedArticle: state.searchedArticle.includes(action.payload) ? [...state.searchedArticle] : [...state.searchedArticle, action.payload],
      };
    case SET_SEARCHED_ARTICLE_TEXT:
      return {
        ...state,
        searchedArticleText: action.payload,
      };
    case SET_PAGE_NO:
      return {
        ...state,
        pageNo: action.payload,
      };
    default:
      return state;
  }
}
