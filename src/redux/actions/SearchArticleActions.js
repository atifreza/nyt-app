import axiosInstance from "../../axios/Axios";
import { setLoading } from "./TopStoriesActions";
import {
  SET_ARTICLES,
  SET_SEARCHED_ARTICLE,
  SET_SEARCHED_ARTICLE_TEXT,
  SET_PAGE_NO
} from "../ConstantTypes";

export const setArticles = (articles) => (dispatch) => {
  dispatch({
    type: SET_ARTICLES,
    payload: articles,
  });
};

export const setSearchedArticles = (searchedArticles) => (dispatch) => {
  dispatch({
    type: SET_SEARCHED_ARTICLE,
    payload: searchedArticles,
  });
};

export const setSearchedArticleText = (searchedArticleText) => (dispatch) => {
  dispatch({
    type: SET_SEARCHED_ARTICLE_TEXT,
    payload: searchedArticleText,
  });
};

export const setPageNo = (pageNo) => (dispatch) => {
  dispatch({
    type: SET_PAGE_NO,
    payload: pageNo,
  });
};

export const getSearchArticles = (article, page = 0, pageNum=1) => async (dispatch) => {
  dispatch(setLoading(true))
  try {

    let url = `http://localhost:3001/svc/search/v2/articlesearch.json?q=${article}&page=${page}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
    const res = await axiosInstance.get(url); 
    if (res?.data?.response?.docs.length > 0) {
      const { data: { response: { docs } } } = res
      dispatch(setArticles(docs));
      dispatch(setSearchedArticleText(article))
      dispatch(setSearchedArticles(article))
      dispatch(setPageNo(pageNum))
    }
    dispatch(setLoading(false));
  } catch (error) {
    if (error) {
      console.log('error', error)
    }
    dispatch(setLoading(false))
  }
}

