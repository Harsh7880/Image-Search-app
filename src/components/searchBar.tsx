import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import { searchImages, fetchImages } from "../actions";

type Props = {
    searchImages: any,
    fetchImages: any,
    value: string
};
class SearchBar extends Component<Props> {
    render() {
        const { value } = this.props;
        return (

   <>
     <div className="banner">
                <div className="container py-lg-4 py-2">
                    <div className="box">
                            <input onChange={(event) => this.props.searchImages(event.target.value)} value={value} type="text" placeholder="Type to search........." aria-label="Search" />
                            <button onClick={(event) => this.props.fetchImages(value)} className="buttn" type="submit"><i className="fas fa-search"></i></button>
                    </div>
                </div>

            </div>
        </>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        value: state.search.value
    };
};

export default connect(mapStateToProps, { searchImages, fetchImages })(SearchBar);