
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = configureStore({
//     reducer: {
//         rootReducer,
//     },
// })
const initialState = {};
const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
