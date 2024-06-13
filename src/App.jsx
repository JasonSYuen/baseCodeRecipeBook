import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import SearchBar from './components/searchBar'
import { HashRouter, Routes, Route } from 'react-router-dom'
import IndvRecipePage from './pages/IndvRecipePage'


function App() {
  const [data, setData] = useState([{}])
  const [array, setArray] = useState([]);

  // const fetchAPI = async () => {
  //   const response = await axios.get("http://127.0.0.1:5000/members")
  //   console.log(response.data.members)
  //   setArray(response.data.members)
  // }
  useEffect(() => {
    document.body.style.backgroundColor = "beige";
    //fetchAPI();
  }, [])




  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={             ///Main Page
          <div >
            <div style={{ "marginTop": "50px" }}></div>

            <h1 className="center"> MY RECIPE BOOK </h1>
            <p>
              {array.map((members, index) => (
                <span key={index} >{members}</span>

              ))}

            </p>
            <div className="center">
              <SearchBar></SearchBar>
            </div>

          </div >

        }></Route>
        <Route path="/recipe/:id" element={<IndvRecipePage></IndvRecipePage>}></Route>
      </Routes>

    </HashRouter>

  )
}
export default App