import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import SearchBar from './components/searchBar'
import { HashRouter, Routes, Route } from 'react-router-dom'
import IndvRecipePage from './pages/IndvRecipePage'
import AdvSearch from './components/AdvSearch'
import SplitPane, { Pane } from 'react-split-pane'
import RecipeTable from './components/recipeTable'
import IngrListSearch from './components/IngrListSearch'


function App() {
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

  const [searchThisIngredientList, setSearchThisIngredientList] = useState([{}])

  function setThisIngredientList(add_or_remove, item, look_or_ignore) {
    if (add_or_remove == "add") {
      let arr = searchThisIngredientList

      arr.push({ "item": item, "look_or_ignore": look_or_ignore })
      setSearchThisIngredientList(arr)
      console.log({ "item": item, "look_or_ignore": look_or_ignore })
      //setSearchThisIngredientList(prevList => [...prevList, { item, look_or_ignore }]);

    }
    else {
      let arr = searchThisIngredientList
      arr.filter((word) => (word != item))
      setSearchThisIngredientList(arr)
      // setSearchThisIngredientList(prevList => prevList.filter(word => word.item !== item))
    }
  }

  const [input, setInput] = useState("")
  const [rows, setRows] = useState([{ "id": 1, "name": "write something", "rating": "4" }])

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     let response
  //     if (!input) {    //if input is empty string
  //       response = await axios.get(`https://householdrecipebook.pythonanywhere.com/fakedata`)
  //     }
  //     else {
  //       response = await axios.get(`https://householdrecipebook.pythonanywhere.com/fakedata/${input}`)
  //     }
  //     setRows(response.data)
  //   }
  //   const debounceFetchAPI = setTimeout(fetchAPI, 500);
  //   return () => clearTimeout(debounceFetchAPI);

  // }, [input]);


  useEffect(() => {
    const fetchAPI2 = async () => {

      let searchBarText = "@" + input
      let ingrListInclude = "@" + ""
      let ingrListExclude = "@" + ""
      let sortProtein = "@" + searchThisProtein
      let sortCarb = "@" + searchThisCarb
      let sortCookTime = "@" + searchThisCookTime

      for (let i = 0; i < searchThisIngredientList.length; i++) {
        if (searchThisIngredientList[i].look_or_ignore == 'green') {
          ingrListInclude += "&" + searchThisIngredientList[i].item
        }
        else if (searchThisIngredientList[i].look_or_ignore == 'red') {
          ingrListExclude += "&" + searchThisIngredientList[i].item
        }
      }
      try {
        let getRequest = `https://householdrecipebook.pythonanywhere.com/realdata/${searchBarText}/${ingrListInclude}/${ingrListExclude}/${sortProtein}/${sortCarb}/${sortCookTime}`
        const response = await axios.get(getRequest)
        console.log(response)
        setRows(response.data)
      }
      catch (e) { console.error(e); }
      console.log(searchBarText + " " + ingrListInclude + " " + ingrListExclude + " " + sortProtein + " " + sortCarb + " " + sortCookTime)

    }
    const debounceFetchAPI = setTimeout(fetchAPI2, 500);
    console.log("request sent to server")

    return () => clearTimeout(debounceFetchAPI);

  }, []);
  //input, searchThisIngredientList, searchThisCarb, searchThisCookTime, searchThisProtein

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
                  <tbody>
                    <tr>
                      <td><AdvSearch set={setProtein} val={searchThisProtein} type={"protein"}></AdvSearch></td>
                      <td><AdvSearch set={setCarb} val={searchThisCarb} type={"carbohydrate"}></AdvSearch></td>
                      <td><AdvSearch set={setCookTime} val={searchThisCookTime} type={"cooktime"}></AdvSearch></td>
                    </tr>
                  </tbody>
                </table>
                {/* <SpecificIngredients></SpecificIngredients> */}
                <IngrListSearch list={searchThisIngredientList} func={setThisIngredientList} ></IngrListSearch>
                {/* {IngrListSearch(searchThisIngredientList, setThisIngredientList)} */}
              </Pane>
              <Pane className='center'>
                <SearchBar setInput={setInput} input={input}></SearchBar>
                <RecipeTable rows={rows} ></RecipeTable>
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