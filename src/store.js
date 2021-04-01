import { compose, applyMiddleware, createStore } from "redux";
import loadPostsMiddleware from './middleware/posts.middleware';
import reducers from './reducers/reducers';

// dev tool
const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


export const configureStore = (services) => createStore(
    reducers, 
    composeEnhancers(applyMiddleware(loadPostsMiddleware(services)))
);