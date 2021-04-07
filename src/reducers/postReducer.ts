import * as actions from '../actions/types';
import { Reducer } from "redux";


export const initialState:PostState = {
    item: {id:"0", title:"", body:""},
    loading: false,
    hasErrors: false,
}

const postReducer:Reducer<PostState> = (state = initialState, action) => {
    switch(action.type) {
        case actions.GET_POST:
            console.log("action get_post")
            return {...state, loading:true}
        case actions.GET_POST_SUCCESS:
            return {item:action.payload, loading:false, hasErrors:false}
        case actions.GET_POST_FAILURE:
            return {...state, loading:false, hasErrors:true}
        default:
            return state;
    }
}

export default postReducer;
