import React, { useState } from 'react'

import { TextField } from '@mui/material'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function IngrListSearch({ list, func }) {
    console.log(list)
    const [text, textFieldState] = useState("")

    const [refresh, setRefresh] = ("")
    function addToList() {
        if (text) {
            func("add", text)

        }
    }

    return (
        <div>
            <form>
                <TextField id="addIngr" value={text} onChange={(event) => { textFieldState(event.target.value) }}></TextField>
                <ButtonGroup variant="contained" aria-label="Basic button group">
                    <Button onClick={addToList}>+</Button>
                    <Button>-</Button>
                </ButtonGroup>
            </form>

            <table>
                <tr>
                    <td>Name</td>

                    <td>trashIcon.png here</td>
                </tr>
                <tbody>
                    {list.map((row, index) => (
                        <tr key={index}>
                            <td>{row}</td>
                            <td>+</td>
                            <td>-</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default IngrListSearch