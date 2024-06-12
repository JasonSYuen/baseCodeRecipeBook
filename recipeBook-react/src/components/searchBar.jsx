import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios'
import recipeTable from './recipeTable';

function SearchBar() {
    const [input, setInput] = useState("")
    const [rows, setRows] = useState([])
    console.log(input)
    const fetchAPI = async () => {
        const response = await axios.get("http://127.0.0.1:5000/fakedata/" + { input })
        console.log(response.data)
        setRows(response.data)
    }


    return (
        <div>
            < TextField id="outlined-basic" label="Search Recipes Here" variant="outlined" value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    fetchAPI();
                }} />
            <h2>Recipes: </h2>
            {recipeTable(rows)}
        </div>
    )
}

export default SearchBar;