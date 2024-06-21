import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import SearchBar from './components/searchBar'
import { HashRouter, Routes, Route } from 'react-router-dom'
import IndvRecipePage from './pages/IndvRecipePage'
import AdvSearch from './components/AdvSearch'
import SpecificIngredients from './components/SpecificIngredients'
import SplitPane, { Pane } from 'react-split-pane'

import IngrListSearch from './components/IngrListSearch'


function App() {
  const [data, setData] = useState([{}])
  const [array, setArray] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = "beige";
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

  const [searchThisIngredientList, setSearchThisIngredientList] = useState(["testItem"])
  function setThisIngredientList(add_or_remove, item) {
    if (add_or_remove == "add") {
      let arr = searchThisIngredientList
      arr.push(item)
      setSearchThisIngredientList(arr)
    }
    else {
      //remove
    }
  }


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={             ///Main Page
          <div >
            <div style={{ "marginTop": "50px" }}></div>
            <h1 className="center"> MY RECIPE BOOK </h1>
            <SplitPane split="vertical" minSize={50} defaultSize={'50%'}>
              <Pane className='center'>
                <table>
                  <tr>
                    <td><AdvSearch set={setProtein} val={searchThisProtein} type={"protein"}></AdvSearch></td>
                    <td><AdvSearch set={setCarb} val={searchThisCarb} type={"carbohydrate"}></AdvSearch></td>
                    <td><AdvSearch set={setCookTime} val={searchThisCookTime} type={"cooktime"}></AdvSearch></td>
                  </tr>
                </table>
                {/* <SpecificIngredients></SpecificIngredients> */}
                <IngrListSearch list={searchThisIngredientList} func={setThisIngredientList}></IngrListSearch>
                {/* {IngrListSearch(searchThisIngredientList, setThisIngredientList)} */}
              </Pane>
              <Pane className='center'>
                <SearchBar></SearchBar>
              </Pane>
            </SplitPane>
          </div >

        }></Route>
        <Route path="/recipe/:id" element={<IndvRecipePage></IndvRecipePage>}></Route>
      </Routes>

    </HashRouter>

  )
}
export default App