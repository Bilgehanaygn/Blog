import types from '../actions/types';

export const initialState = {
    articles: [],
    currentArticle: null
};

const reducer = (state, action) => {
    switch(action.type){
        case types.FETCH_POSTS:
            return {
                ...state,
                articles: action.payload,
            };
        case types.FETCH_SINGLE_POST:
            return {
                ...state,
                currentArticle: action.payload
            };
        default:
            return {...state};
    }
}

export default reducer;