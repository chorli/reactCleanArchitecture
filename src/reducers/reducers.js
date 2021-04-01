import { combineReducers } from 'redux';
import postsReducer from './posts.reducer';
import uiReducer from './ui.reducer';

export default combineReducers({
    posts: postsReducer,
    ui: uiReducer,
})