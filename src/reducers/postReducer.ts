import * as actions from '../actions/types';

export const initialState:PostState = {
    item: {id:0, title:"", body:""},
    loading: false,
    hasErrors: false,
}

const postReducer = (state:PostState= initialState, action:PostAction) => {
    switch(action.type) {
        case actions.GET_POSTS_REQUEST:
            return {...state, loading:true}
        case actions.GET_POST_SUCCESS:
            return {post:action.payload, loading:false, hasErrors:false}
        case actions.GET_POST_FAILURE:
            return {...state, loading:false, hasErrors:true}
        default:
            return state;
    }
}

export default postReducer;
