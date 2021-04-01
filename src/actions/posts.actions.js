export const LOAD_POSTS = '[posts] load';
export const LOAD_POSTS_SUCCESS = '[posts] load success';
export const LOAD_POSTS_FAILURE = '[posts] load failure';

export const loadPosts = {
    type: LOAD_POSTS,
};

export const loadPostsSuccess = posts => ({
    type: LOAD_POSTS_SUCCESS,
    payload: posts,
});

export const loadPostsFailure = error => ({
    type: LOAD_POSTS_FAILURE,
    payload: error,
});