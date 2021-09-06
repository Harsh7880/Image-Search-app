import React from 'react';
import {connect} from "react-redux";

type Props = {
    imagesData: any
    value: string
}

const InfoImages = (props: Props) => {
    if(props.imagesData.images.length === 0)
        return null;
    return (
        <div className="container mt-2">
            <div className="mt-3 pl-2">
                <div className="font-weight-bold h1">{props.value}</div>
                <span>{`${props.imagesData.total} images has been found`}</span>
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        imagesData: state.imagesData,
        value: state.search.value
    };
};

export default connect(mapStateToProps)(InfoImages);