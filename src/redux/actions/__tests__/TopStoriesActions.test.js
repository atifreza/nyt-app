import axiosInstance from "../../../axios/Axios";
import {
  setTopStories,
  setLoading,
  setCategory,
  getTopStories
} from "../../actions/TopStoriesActions";

jest.mock("../../../axios/Axios"); // Mock the Axios module

describe('TopStoriesActions', () => {
  test('setTopStories should dispatch the correct action', () => {
    const topStories = [{ title: 'Story 1' }, { title: 'Story 2' }];
    const dispatch = jest.fn();

    setTopStories(topStories)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_TOP_STORIES',
      payload: topStories,
    });
  });

  test('setLoading should dispatch the correct action', () => {
    const isLoading = true;
    const dispatch = jest.fn();

    setLoading(isLoading)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_LOADING',
      payload: isLoading,
    });
  });

  test('setCategory should dispatch the correct action', () => {
    const newsCategory = 'world';
    const dispatch = jest.fn();

    setCategory(newsCategory)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_CATEGORY',
      payload: newsCategory,
    });
  });

  test('getTopStories should dispatch the correct actions and make API call', async () => {
    const category = 'world';
    const dispatch = jest.fn();

    axiosInstance.get.mockResolvedValueOnce({
      data: {
        results: [{ title: 'Story 1' }, { title: 'Story 2' }]
      }
    });

    await getTopStories(category)(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
    expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
    expect(axiosInstance.get).toHaveBeenCalledWith(
      expect.stringContaining(category)
    );
  });
});
