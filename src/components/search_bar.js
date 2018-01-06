import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className='card'>
                <input className='input' onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;
