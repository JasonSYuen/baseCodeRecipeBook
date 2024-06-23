import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios'
import recipeTable from './recipeTable';

function SearchBar({ rows, setInput, input }) {


    return (
        <div>
            < TextField id="outlined-basic" label="Search Recipes Here" variant="outlined" value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }} />
            <h2>Recipes: </h2>
            {recipeTable(rows)}
        </div>
    )
}

export default SearchBar;