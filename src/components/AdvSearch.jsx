import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function AdvSearch({ set, val, type }) {  // set search to asc or descending order // val is the value of asc or desc
    //type is name . ie: protien, carbs, ects

    const handleChange = (event) => {
        set(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel>{"sort by: " + type}</InputLabel>
                <Select
                    value={val}
                    label=""
                    onChange={handleChange}
                >
                    <MenuItem value={''}>{type + ': unsorted'}</MenuItem>
                    <MenuItem value={'asc'}>{type + ': ascending order'}</MenuItem>
                    <MenuItem value={'desc'}>{type + ': descending order'}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default AdvSearch