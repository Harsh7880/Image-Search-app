import {SEARCH} from "../actions/types";

const INITIAL_STATE = {
    value: ""
};

const searchReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case SEARCH:
            return { ...state, value: action.payload };
        default:
            return state;
    }
};

export default searchReducer;