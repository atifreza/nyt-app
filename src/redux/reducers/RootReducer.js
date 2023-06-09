import { combineReducers } from "redux";
import TopStoriesReducer from "./TopStoriesReducer";
import SearchArticleReducer from "./SearchArticleReducer.js";
import UserReducer from "./UserReducer";


const rootReducer = combineReducers({
    TopStoriesReducer,
    SearchArticleReducer,
    UserReducer
});

export default rootReducer;
