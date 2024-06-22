import React, { useEffect, useState } from 'react'

import { TextField } from '@mui/material'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

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

    return (
        <div>

            <TextField id="addIngr" value={text} onChange={(event) => { textFieldState(event.target.value) }}></TextField>

            <Button onClick={addToList("green")} variant="contained">+</Button>
            <Button onClick={addToList("red")} variant="contained">-</Button>



            <table className='ingrList'>
                <tr>
                    <th className='name'>Name</th>

                    <th className='trashIcon'>trashIcon.png here</th>
                </tr>
                <tbody>
                    {list.map((row, index) => (
                        <tr key={index}>
                            <td style={{ "backgroundColor": row.look_or_ignore }}>{row.item}</td>
                            <td className='trashIcon'>-</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default IngrListSearch