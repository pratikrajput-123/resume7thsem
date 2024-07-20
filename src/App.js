import React from 'react'
import {Routes, Route ,Navigate} from 'react-router-dom';
import DetailsFillingPage from './Components/DetailsFillComponents/DetailsFillingPage';
import Home from './Components/HomePage/Home'
import NavBar from './Components/Navigation/Navbar'
import MyResume from './Components/ResumeDisplay/MyResume';

import './App.css';
import MyProject from './Components/DetailsFillComponents/MyProject';

function App() {
  return (
    <div>
        <div> 
          <NavBar/>
        </div>
        
        <div>
            <Routes>
                  <Route exact path="/" element={<Home/>}></Route>
                  <Route path="/detailsfillingpage/*" element ={<DetailsFillingPage />}></Route> 
                  <Route path="/myresume" element={<MyResume/>}></Route>
                  {/* <Route exact path="/about" element={<AboutUs/>}></Route> */}
                  <Route path="*" element={<Navigate to="/about" />}></Route>
                  <Route path='/myproject' element={<MyProject/>}></Route>
            </Routes> 
        </div>
    </div>
  )
}


export default App


