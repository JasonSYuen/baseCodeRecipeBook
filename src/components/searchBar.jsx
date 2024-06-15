import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios'
import recipeTable from './recipeTable';

function SearchBar() {
    const [input, setInput] = useState("")
    const [rows, setRows] = useState([])
    console.log(input)
    useEffect(() => {
        const fetchAPI = async () => {
            const response = await axios.get(`https://householdrecipebook.pythonanywhere.com/fakedata/${input}`)
            console.log(response.data)
            setRows(response.data)
        }
        const debounceFetchAPI = setTimeout(fetchAPI, 500);
        return () => clearTimeout(debounceFetchAPI);

    }, [input]);

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