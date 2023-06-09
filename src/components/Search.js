import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ searchArticles }) => {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = () => {
        if (text) {
            searchArticles(text);
        }
    };
    return (
        <div>
            <TextField
                label="Search articles"
                type="text"
                name="text"
                aria-label="Search articles text box"
                value={text}
                onChange={handleChange}
                inputProps={{
                    placeholder:"Search"
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton name="Search" data-testId='Search' onClick={handleSubmit}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </div>
    );
};


export default Search;