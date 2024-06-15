

import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


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
    const fetchAPI = async () => {
        const response = await axios.get(`https://householdrecipebook.pythonanywhere.com/recipe/${id}`)
        console.log(response.data)
        console.log(response.data.name)
        console.log({ id })
        setInput(response.data)
    }
    useEffect(() => {
        fetchAPI()
    }, [])




    return (
        <div>
            <div style={{ "marginTop": "50px" }}></div>
            <Link to={"/"}>
                <Button variant="contained" >BACK TO RECIPE SEARCH</Button>;
            </Link>
            <h1 className="center"> {input.name} </h1>
            <h3 className="center"> by: insert author name here</h3>
            <h3 className="center">rating here </h3>
            {/*<p>{id}</p>*/}
            <div className='center' style={{ "marginTop": "50px" }}>

                {/* <Grid container spacing={20} direction="row" >

                    <Grid item xs={6} >
                        <div className='customGrid'>
                            <h2> Ingredients</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Ingredient</td>
                                        <td>Quantity</td>
                                    </tr>
                                    {input.ingredients?.map((ingredient, index) => (
                                        <tr key={index}>
                                            <td>{ingredient}</td>
                                            <td>{input.quantity[index]} {input.units[index]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='customGrid'>
                            <h2> Instructions: </h2>
                            <p>{input.instructions}</p>
                        </div>
                    </Grid>
                </Grid> */}

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 2, sm: 4, md: 6 }}
                >
                    <Item><div className=''>
                        <h2> Ingredients</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Ingredient</td>
                                    <td>Quantity</td>
                                </tr>
                                {input.ingredients?.map((ingredient, index) => (
                                    <tr key={index}>
                                        <td>{ingredient}</td>
                                        <td>{input.quantity[index]} {input.units[index]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div></Item>
                    <Item><div className=''>
                        <h2> Instructions: </h2>
                        <p>{input.instructions}</p>
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
