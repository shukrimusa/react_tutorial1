

function SearchItem({search, setSearch}) {
    return(
        <form onSubmit = {(e) => e.preventDefault()}>
            <label htmlFor = 'searchItem'>Search: </label>
            <input
            id = 'searchItem'
            type = 'text'
            placeholder = 'Search'
            // role = 'searchbox'
            value = {search}
            onChange = {(e) => {setSearch(e.target.value)}}/>
        </form>
    )
};

export default SearchItem;