import React, { useEffect, useState } from 'react'

import { Icon, TextField } from '@mui/material'

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function IngrListSearch({ list, func }) {

    const [text, textFieldState] = useState("")

    function addToList(look_or_ignore) {
        return () => {
            if (text) {
                func("add", text, look_or_ignore)
                textFieldState("");
            }
        }
    }

    function test() {
        return () => {
            console.log("hello world")
        }
    }


    return (
        <div>
            <h2> add ingredients you want to filter for here</h2>
            <p> + for recipes with the ingredient </p>
            <p> - for recipes without the ingredient </p>
            <TextField id="addIngr" value={text} onChange={(event) => { textFieldState(event.target.value) }}></TextField>

            <Button onClick={addToList("green")} variant="contained">+</Button>
            <Button onClick={addToList("red")} variant="contained">-</Button>
            <div style={{ "margin": "20px" }} />




            <table className='ingrList'>
                <tbody>
                    <tr>
                        <th className='name'>Name</th>

                        <th className='trashIcon'>trashIcon.png here</th>
                    </tr>
                </tbody>
                <tbody>
                    {list.map((row, index) => (
                        <tr key={index}>
                            <td style={{ "backgroundColor": row.look_or_ignore }}>{row.item}</td>
                            <td className='trashIcon'>
                                <IconButton onClick={test()}>
                                    <DeleteIcon ></DeleteIcon>
                                </IconButton>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default IngrListSearch