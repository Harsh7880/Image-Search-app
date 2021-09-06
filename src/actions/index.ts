import unsplash from '../apis/unsplash';
import {FETCH_IMAGES, LOAD_MORE_IMAGES, LOAD_MORE_IMAGES_STATUS, SEARCH} from "./types";

export const fetchImages = (search: string) => async (dispatch: any) => {
    const response = await unsplash.get('search/photos', {
            params: {
                query: search
            }
    });
    dispatch({
        type: FETCH_IMAGES,
        payload: {...response.data, searchValue: search}
    });
};

export const searchImages = (search: string) => async (dispatch: any) => {
    dispatch({
       type: SEARCH,
       payload: search
    });
}

export const loadMoreImages = (search: string, page: number) => async (dispatch: any) => {
    const response = await unsplash.get('search/photos', {
        params: {
            query: search,
            page: page
        }
    });
    dispatch({
        type: LOAD_MORE_IMAGES,
        payload: response.data
    });
    dispatch({
        type: LOAD_MORE_IMAGES_STATUS,
        payload: false
    });
}

export const loadMoreImagesSpinner = () => {
    return {
        type: LOAD_MORE_IMAGES_STATUS,
        payload: true
    };
}