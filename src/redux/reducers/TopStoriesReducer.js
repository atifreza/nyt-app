import {
    SET_TOP_STORIES,
    SET_LOADING,
    SET_CATEGORY
} from "../ConstantTypes";


const initialState = {
    topStories: [],
    isLoading: false,
    category: 'world'
};

export default function TopStoriesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOP_STORIES:
            return {
                ...state,
                topStories: action.payload,
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload,
            }
        default:
            return state;
    }
}
