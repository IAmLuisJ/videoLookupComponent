import React, {useState} from 'react';


const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    return (<div className="search-bar ui segment">
    <form className="ui form" onSubmit={props.onTermSubmit(term)}>
        <div className="field">
        <label>Video Search</label>
        <input className="search-input" type="text" value={term} onChange={(e)=>setTerm(e.target.value) } />
        </div>
    </form>
</div>)
}

export default SearchBar;