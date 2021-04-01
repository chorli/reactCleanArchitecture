import { loadPostsFailure, loadPostsSuccess, LOAD_POSTS } from "../actions/posts.actions";
import * as uiActions from '../actions/ui.actions';

const loadPostsMiddleware = ( service) => ({ dispatch }) => next => async (action) => {
    if (action.type === LOAD_POSTS) {
        try {
            dispatch(uiActions.setLoading(true));
            const posts = await service.getAll();
            dispatch(loadPostsSuccess(posts));
            dispatch(uiActions.setLoading(false));
        } catch (error) {
            dispatch(loadPostsFailure(error));
        }
    }

    next(action);
}

export default loadPostsMiddleware