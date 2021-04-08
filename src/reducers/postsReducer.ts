import * as actions from '../actions/types';
import { Reducer } from "redux";

export const initialState:PostsState = {
    data: [],
    loading: false,
    hasErrors: false,
}

const postsReducer:Reducer<PostsState> = (state = initialState, action) => {
    switch(action.type) {
        case actions.GET_POSTS_REQUEST :
            return {...state, loading:true}
        case actions.GET_ALL_POSTS_SUCCESS:
            return {...state, data:action.payload, loading:false, hasErrors:false}
        case actions.GET_POST_FAILURE:
            return {...state, loading:false, hasErrors:true}
        case actions.ADD_POST:
            return {...state, data:action.payload}
        default:
            return state;
    }          
}

export default postsReducer;
