import {LOAD_MORE_IMAGES_STATUS} from "../actions/types";

const INITIAL_STATE = {
    spinner: false
};

const loaderReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case LOAD_MORE_IMAGES_STATUS:
            return { ...state, spinner: action.payload }
            break;
        default:
            return state;
    }
};

export default loaderReducer;