import css from './SearchBox.module.css'

const SearchBox = ({ inputValue, setInputValue }) => {

    return (
        <div>
            <p className={css.search}>Find contacts by name</p>
            <input type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />

        </div>
    );
};

export default SearchBox