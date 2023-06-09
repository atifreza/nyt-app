import TopStoriesReducer from '../../reducers/TopStoriesReducer';
import {
  SET_TOP_STORIES,
  SET_LOADING,
  SET_CATEGORY
} from '../../ConstantTypes';

describe('TopStoriesReducer', () => {
  test('should return the initial state', () => {
    const initialState = {
      topStories: [],
      isLoading: false,
      category: 'world',
    };
    
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = TopStoriesReducer(undefined, action);

    expect(newState).toEqual(initialState);
  });

  test('should handle SET_TOP_STORIES action', () => {
    const initialState = {
      topStories: [],
      isLoading: false,
      category: 'world',
    };

    const topStories = [{ title: 'Story 1' }, { title: 'Story 2' }];
    const action = {
      type: SET_TOP_STORIES,
      payload: topStories,
    };

    const newState = TopStoriesReducer(initialState, action);

    expect(newState.topStories).toEqual(topStories);
  });

  test('should handle SET_LOADING action', () => {
    const initialState = {
      topStories: [],
      isLoading: false,
      category: 'world',
    };

    const isLoading = true;
    const action = {
      type: SET_LOADING,
      payload: isLoading,
    };

    const newState = TopStoriesReducer(initialState, action);

    expect(newState.isLoading).toEqual(isLoading);
  });

  test('should handle SET_CATEGORY action', () => {
    const initialState = {
      topStories: [],
      isLoading: false,
      category: 'world',
    };

    const category = 'sports';
    const action = {
      type: SET_CATEGORY,
      payload: category,
    };

    const newState = TopStoriesReducer(initialState, action);

    expect(newState.category).toEqual(category);
  });
});
