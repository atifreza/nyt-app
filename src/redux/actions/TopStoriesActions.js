import axiosInstance from "../../axios/Axios";
import {
  SET_TOP_STORIES,
  SET_LOADING,
  SET_CATEGORY
} from "../ConstantTypes";

export const setTopStories = (topStories) => (dispatch) => {
  dispatch({
    type: SET_TOP_STORIES,
    payload: topStories,
  });
};

export const setLoading = (isLoading) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: isLoading,
  });
};

export const setCategory = (newsCateogry) => (dispatch) => {
  dispatch({
    type: SET_CATEGORY,
    payload: newsCateogry,
  });
};

export const getTopStories = (category) => async (dispatch) => {
  dispatch(setLoading(true))
  try {

    let url = `http://localhost:3001/svc/topstories/v2/${category}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
    const res = await axiosInstance.get(url);
    if (res?.data?.results) {
      const { data: { results } } = res
      dispatch(setTopStories(results));
    }
    dispatch(setLoading(false));
  } catch (error) {
    if (error) {
      console.log('error', error)
    }
    dispatch(setLoading(false))
  }
}

