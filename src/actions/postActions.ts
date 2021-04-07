import * as actions from './types';
import {Action, ActionCreator, Dispatch} from 'redux';
import { ThunkAction } from "redux-thunk";

const getPost:ActionCreator<Action> = () => ({
    type: actions.GET_POST,
});

const getPostSuccess = (post:IArticle) => ({
    type: actions.GET_POST_SUCCESS,
    payload: post
});
const getPostFailure = () => ({
    type: actions.GET_POST_FAILURE,
});

export type AppThunk = ActionCreator<ThunkAction<void, any, null, Action<string>>>;

export const fetchPost:AppThunk = (id:string) => {
    console.log("fetchPost with ID: ", id)
    return async (dispatch:Dispatch): Promise<any> => {
        dispatch(getPost())
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            console.log("Post fetch: ", data)
            return dispatch(getPostSuccess(data))
        } catch(error) {
            return dispatch(getPostFailure());
        }
    }
};
