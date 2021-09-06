import {FETCH_IMAGES, LOAD_MORE_IMAGES} from "../actions/types";

const INITIAL_STATE = {
    images: [],
    total: 0,
    total_pages: 0
};

const searchReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case FETCH_IMAGES:
            return { ...state,
                images: action.payload.results,
                total: action.payload.total,
                total_pages: action.payload.total_pages
            };
        case LOAD_MORE_IMAGES:
            return {
                images: [...state.images, ...action.payload.results]
            };
        default:
            return state;
    }
};

export default searchReducer;