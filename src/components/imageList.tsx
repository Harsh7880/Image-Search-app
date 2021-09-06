import React from 'react';
import { connect } from "react-redux";

import { loadMoreImages, loadMoreImagesSpinner } from "../actions";

type Props = {
    images: Array<any>,
    loadMoreImages: any,
    loadMoreImagesSpinner: any,
    value: string,
    spinner: boolean
}

const ImageList = (props: Props) => {
    const loadMoreImages = () => {
        const n: number = parseInt(process.env.REACT_APP_IMAGES_PER_PAGE || '2');
        props.loadMoreImagesSpinner();
        props.loadMoreImages(props.value, props.images.length / n + 1);
    }
    const renderSpinnerStatus = () => {
        if (!props.spinner) {
            if (props.images.length !== 0) {
                return (
                  <div className="container d-flex justify-content-center mb-5 align-items-center">
                        <button
                            className="load-btn"
                            onClick={loadMoreImages}
                        >
                            Load More
                        </button>
                  </div>
                );
            }
        } else {
            return (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            );
        }
    }
    return (
        <React.Fragment>
        <div className="back">
            <div className="shape">

            </div>
                <div className="container mt-2">
                    <div className="row">
                        {props.images.map(
                            image =>
                                <div className="img col-lg-3 col-md-6 col-sm-12 bg p-3" key={image.id}>
                                    <img style={{ width: "100%", height: "200px", }}
                                        src={image.urls.regular}
                                        className="img-fluid"
                                        alt={image.description}
                                        key={image.id}
                                    /></div>

                        )}
                    </div>
        </div>
      

                  
            
            </div>
            <div className="d-flex justify-content-center mt-5">
                {renderSpinnerStatus()}
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state: any) => {
    return {
        images: state.imagesData.images,
        value: state.search.value,
        spinner: state.loader.spinner
    };
};

export default connect(mapStateToProps, { loadMoreImages, loadMoreImagesSpinner })(ImageList);