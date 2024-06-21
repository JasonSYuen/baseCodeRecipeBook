import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import SearchBar from './components/searchBar'
import { HashRouter, Routes, Route } from 'react-router-dom'
import IndvRecipePage from './pages/IndvRecipePage'
import AdvSearch from './components/AdvSearch'
import SpecificIngredients from './components/SpecificIngredients'


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

  const [searchThisProtein, setSearchThisProtein] = useState("")
  function setProtein(asc_or_desc) {
    setSearchThisProtein(asc_or_desc)
  }
  const [searchThisCarb, setSearchThisCarb] = useState("")
  function setCarb(asc_or_desc) {
    setSearchThisCarb(asc_or_desc)
  }
  const [searchThisCookTime, setSearchThisCookTime] = useState("")
  function setCookTime(asc_or_desc) {
    setSearchThisCookTime(asc_or_desc)
  }




  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={             ///Main Page
          <div >
            <div style={{ "marginTop": "50px" }}></div>

            <h1 className="center"> MY RECIPE BOOK </h1>

            <div className="center">
              <table>
                <tr>
                  <td><AdvSearch set={setProtein} val={searchThisProtein} type={"protein"}></AdvSearch></td>
                  <td><AdvSearch set={setCarb} val={searchThisCarb} type={"carbohydrate"}></AdvSearch></td>
                  <td><AdvSearch set={setCookTime} val={searchThisCookTime} type={"cooktime"}></AdvSearch></td>
                </tr>
              </table>
              <SpecificIngredients></SpecificIngredients>
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