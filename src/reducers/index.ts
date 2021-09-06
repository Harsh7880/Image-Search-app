import { combineReducers } from  'redux'

import searchReducer from "./searchReducer";
import formReducer from "./formReducer";
import loaderReducer from "./loaderReducer";

export default combineReducers({
    imagesData: searchReducer,
    search: formReducer,
    loader: loaderReducer
});