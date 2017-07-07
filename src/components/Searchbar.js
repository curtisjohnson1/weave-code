import React, { Component } from 'react';

import search from '../../public/images/search.png';

class Searchbar extends Component {
    constructor (props) {
        super (props);

        this.state = {
            search: ''
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch (event) {
        this.setState({
            search: event.target.value
        });
    }

    render () {
        return (
            <span className="searchbar">
                <input value={this.state.search} onChange={this.handleSearch} className="nav-searchbar" type="text"/>
                <img src={search} />
            </span>
        );
    }
}

export default Searchbar;