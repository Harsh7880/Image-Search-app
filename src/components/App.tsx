import React,{ Component } from "react";

import SearchBar from "./searchBar";
import ImageList from "./imageList";
import './App.css'
import InfoImages from "./infoImages";

class App extends Component {
    render() {
        return (
            <React.Fragment>
              
                    <SearchBar />
                    <InfoImages />
                    <ImageList />
            </React.Fragment>
        )
    }
}

export default App;