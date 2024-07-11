import React from 'react'
import { Link, useParams } from 'react-router-dom'
function recipeTable({ rows, count }) {
    //const { id } = useParams()
    return (
        <div>

            <h2>Recipes {'(' + count + ')'} : </h2>
            <table className='recipeTable'>
                <tbody>
                    <tr className='recipeRow'>
                        <td>Name</td>
                        <td>Rating</td>
                    </tr>
                </tbody>
                <tbody >
                    {rows.map((row, index) => {
                        return <tr className='recipeRow' key={index}>
                            <td className='textAlignleft'><Link to={"/recipe/" + row.id} >{row.name} </Link></td>
                            <td className='textAlignCenter'>{row.rating}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default recipeTable