import React, { useEffect, useState } from 'react'

import { TextField } from '@mui/material'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function IngrListSearch({ list, func, refe }) {

    const [text, textFieldState] = useState("")

    function addToList() {
        if (text) {
            func("add", text)
            textFieldState("");
        }
    }

    return (
        <div>
            <form>
                <TextField id="addIngr" value={text} onChange={(event) => { textFieldState(event.target.value) }}></TextField>
                <ButtonGroup variant="contained" aria-label="Basic button group">
                    <Button onClick={addToList} >+</Button>
                    <Button>-</Button>
                </ButtonGroup>
            </form>

            <table className='ingrList'>
                <tr>
                    <th className='name'>Name</th>

                    <th className='trashIcon'>trashIcon.png here</th>
                </tr>
                <tbody>
                    {list.map((row, index) => (
                        <tr key={index}>
                            <td>{row}</td>
                            <td className='trashIcon'>-</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default IngrListSearch