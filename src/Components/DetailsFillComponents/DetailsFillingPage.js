import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PersonalInfo from './PersonalInfo'
import WorkEx from './WorkEx'
import Education from './Education'
import KeySkills from './KeySkills'
import MyProject from './MyProject'
import { updateState } from '../../ReduxManager/dataStoreSlice' 

function DetailsFillingPage() {
  const dispatch = useDispatch()
  
  const errorMessages = useSelector(state=>state.dataStore.errorMessages)

  let isFormValid = true
  
  for(let key in errorMessages){
    if(errorMessages[key] !==""){
      isFormValid=false
      break
    }
  }

  const onSideNavLinkClick=()=>{
    
    if(!isFormValid){
        alert('Please fill all the necessary details correctly!') 
        dispatch(updateState({    
          key:'showErrorMessages',
          value:true
        }))
    }
    else if(isFormValid){
      dispatch(updateState({
        key:'showErrorMessages',
        value:false
      }))
    }
}
  
  return (
    <div>
      <div className="container text-center" style={{ maxWidth:"1920px",marginTop:"12px",backgroundColor:"#fafafa",}}>
        <div >
              <div className='row' style={{minHeight:'100vh'}}>

                    <div className=" col-lg-3 col-sm-12 col-12 sidebar"  >
                            <li className="list-item" onClick={onSideNavLinkClick}>
                              
                                <Link to = {isFormValid?"/detailsfillingpage/personalinfo":'#'} className='no-text-decoration'>
                                  Personal Info
                                </Link>
                            </li>
                            <li className=" list-item" onClick={onSideNavLinkClick}>
                                <Link to = {isFormValid?"/detailsfillingpage/workex":'#'} className='no-text-decoration' style={{fontSize:'inherit'}}>
                                Work Experience
                                </Link>
                            </li>
                            <li className=" list-item" onClick={onSideNavLinkClick}>
                                <Link to = {isFormValid?"/detailsfillingpage/education":'#'} className='no-text-decoration'>
                                  Education
                                </Link>
                            </li>
                            <li className=" list-item" onClick={onSideNavLinkClick}>
                                <Link to = {isFormValid?"/detailsfillingpage/keyskills":'#'} className='no-text-decoration'>
                                  Key Skills
                                </Link>
                            </li>
                            <li className=" list-item" onClick={onSideNavLinkClick}>
                                <Link to = {isFormValid?"/detailsfillingpage/myproject":'#'} className='no-text-decoration'>
                                  My Project
                                </Link>
                            </li>

                    </div>
                
                
                    <div className="content col-lg-9 col-sm-12 col-12" style={{border:"solid grey 2px", boxShadow: "5px 5px 8px 10px #888888"}}>
                      
                          <Routes>
                                    <Route exact path="/personalinfo" 
                                          element={<PersonalInfo isFormValid={isFormValid} />}>
                                    </Route>
                                     <Route exact path="/workex" 
                                          element={<WorkEx isFormValid={isFormValid}/>}>
                                    </Route>
                                    <Route exact path="/education" 
                                          element={<Education isFormValid={isFormValid}/>}>
                                    </Route>
                                    <Route exact path="/keyskills" 
                                          element={<KeySkills isFormValid={isFormValid}/>}>
                                    </Route>
                                    <Route exact path="/myproject" 
                                          element={<MyProject isFormValid={isFormValid}/>}>
                                    </Route>
                                    
                          </Routes>

                    </div>
              </div>
        </div>
      </div>
    </div>
    
  )
}

export default DetailsFillingPage
