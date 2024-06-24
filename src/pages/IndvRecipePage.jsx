

import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function IndvRecipePage() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const { id } = useParams()
    const [input, setInput] = useState({})
    const [array, setArray] = useState([])
    const fetchAPI = async () => {
        const response = await axios.get(`https://householdrecipebook.pythonanywhere.com/recipe/${id}`)

        setInput(response.data)
        console.log(response.data)


    }
    useEffect(() => {
        fetchAPI()
    }, [])

    useEffect(() => {
        let startpoint = 0;
        if (input.instructions) {
            let newArray = []
            console.log("response data length: " + input.instructions.length)
            for (let index = 0; index < input.instructions.length; index++) {
                if (index != 0 && (!isNaN(input.instructions[index - 1]) && input.instructions[index] == ".")) {
                    newArray.push(input.instructions.slice(startpoint, index - 1))
                    startpoint = index - 1
                }
            }
            setArray(newArray)
        }


    }, [input])





    return (
        <div>
            <div style={{ "marginTop": "50px" }}></div>
            <Link to={"/"}>
                <Button variant="contained" >BACK TO RECIPE SEARCH</Button>;
            </Link>
            <h1 className="center"> {input.name} </h1>
            <h3 className="center"> by: {input.author}</h3>
            <h3 className="center">rating: <Rating name="read-only" value={5} readOnly /> </h3>

            {/*<p>{id}</p>*/}
            <div className='center' style={{ "marginTop": "50px" }}>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 2, sm: 4, md: 6 }}
                    sx={{
                        maxWidth: 1000, // Sets the maximum width to 500px
                        minWidth: 800,
                        //width: '100%'
                    }}
                >
                    <Item sx={{ width: '100%' }}><div className='center'>
                        <h2> Ingredients</h2>
                        <table style={{ "borderCollapse": "collapse" }}>
                            <tbody>
                                <tr>
                                    <th><b>Ingredient</b></th>
                                    <th><b>Quantity</b></th>
                                </tr>
                                {(input.ingredients)?.map((ingredient, index) => (
                                    <tr key={index} className='bottomUnderlined'>
                                        <td style={{ "textAlign": "left" }} >{ingredient}</td>
                                        <td style={{ "textAlign": "center" }}>{input.quantity[index]} {input.units[index]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div></Item>
                    <Item sx={{ width: '100%' }}><div className=''>
                        <h2> Instructions </h2>
                        <table>
                            <tbody>
                                {array.map((instructions, index) => (

                                    <tr key={index} className='bottomUnderlined'>
                                        <td style={{ "textAlign": "left" }}> {instructions}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div></Item>

                </Stack>

            </div>
        </div>

    )
}

export default IndvRecipePage
// export const IndvRecipePage = async () => {
//     const res = await axios.get("http://127.0.0.1:5000/recipe")
//     return res.json
// }
