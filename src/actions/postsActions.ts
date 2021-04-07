import * as actions from './types';
import {Action, ActionCreator, Dispatch} from 'redux';
import { ThunkAction } from "redux-thunk";

const getPosts:ActionCreator<Action> = () => ({
    type: actions.GET_POSTS_REQUEST,
});

const getPostsSuccess = (posts:IArticle[]) => ({
    type: actions.GET_POST_SUCCESS,
    payload: posts
});
const getPostsFailure = () => ({
    type: actions.GET_POST_FAILURE,
});

export type AppThunk = ActionCreator<ThunkAction<void, PostsState, null, Action<string>>>;

export const fetchPosts:AppThunk = () => {
    return async (dispatch:Dispatch): Promise<any> => {
        dispatch(getPosts())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            return dispatch(getPostsSuccess(posts))
        } catch(error) {
            return dispatch(getPostsFailure());
        }
    }
};   

export const addPost:AppThunk = (postData:IArticle) => {
    console.log("Actions addPost")
    return async (dispatch:Dispatch): Promise<any> => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'content-type': 'application-json'
                },
                body: JSON.stringify(postData)
            });
            const post = await response.json()
            console.log("Post", post);
            return dispatch({
                type: actions.ADD_POST,
                payload: post
            });
        } catch(error) {
            console.log("error")
            return dispatch(getPostsFailure());
        }
    }
};

// export const fetchPosts = () => async (dispatch:Dispatch) => {
//     console.log("fetching")

//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log("fetchPosts ", data)
//     dispatch({
//         type: actions.GET_POSTS,
//         payload: data
//     })
  
// } 
// export const fetchPosts:AppThunk = () => (dispatch:Dispatch) => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       .then(posts =>
//         dispatch({
//           type: actions.GET_POSTS,
//           payload: posts
//         })
//       );
//   };
