import { LOAD_POSTS_SUCCESS } from "../actions/posts.actions";

const initialState = {
    allPosts: null,
    error: null
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS_SUCCESS:
            return { allPosts: action.payload, error: null };
        default:
            return state;
    }
}

export default postsReducer