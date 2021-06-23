import React from 'react';
import SearchIcon from '@material-ui/icons/Search';


function Search() {
    return <div className="home">
        <div class="input-group searchbar">
            <div class="form-outline">
                <input id="search-focus" type="search" id="form1" placeholder="Search" class="form-control search" />
            </div>
            <button type="button" class="btn-1">
                <SearchIcon className="searchicon"/>
            </button>
        </div>
    </div>
}

export default Search;