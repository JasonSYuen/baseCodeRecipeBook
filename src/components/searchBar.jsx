import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios'
import recipeTable from './recipeTable';

function SearchBar({ setInput, input }) {
    return (
        <div>
            < TextField id="outlined-basic" label="Search Recipes Here" variant="outlined" value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }} />

        </div>
    )
}

export default SearchBar;