import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ProfilePicUploadComponent from './ProfileUpload'
import {stateNames} from '../Data/Data'
import TextField from '../InputComponents/TextField'
import TextArea from '../InputComponents/TextArea'
import BottomNavigation from './BottomNavigation'
import { updatePersonalInfo, updateErrorMessages } from '../../ReduxManager/dataStoreSlice'


function PersonalInfo(props) {
  const personalHeads= useSelector(state => state.dataStore.personalInfo) 
  const dispatch = useDispatch();
  const onChangeHandler= (key,value,errorMessage=undefined) =>{
    
    dispatch(updatePersonalInfo({
      
      key: key,
      value:value
   }))
   if(errorMessage!==undefined){
      dispatch(updateErrorMessages({
        
        key:key,
        value:errorMessage
      }))
    }
  }
  return (
    <div style={{padding:"15px", textAlign:"left",}}>
        <div>
          <div>
           
            <ProfilePicUploadComponent/>
          </div>
          <div className="row font" >
              <div className="col-lg-6 col-12 pt-5 px-4">
                <div className='row '>
                  <div className='col-sm-2  col-12'>
                    <label htmlFor="firstname" className="col-form-label ">First Name*</label>
                  </div>
                  <div className='col-sm-10 col-12'>
                      
                      <TextField type="text" elementId="firstname"  placeholder="First name" 
                          value={personalHeads.firstName}
                          onChange={
                            
                            (value,errorMessage)=>{
                              
                              onChangeHandler('firstName',value,errorMessage)
                            }
                          }
                          validation={{
                            
                            required:true,
                          }}
                      />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12 pt-5  px-4">
                  <div className='row'>
                    <div className='col-sm-2 col-12'>
                      <label htmlFor="lastname" className="col-form-label">Last Name</label>
                    </div>
                    <div className='col-sm-10 col-12'>
                      <TextField type="text" elementId="lastname"  placeholder="Last name" 
                            value={personalHeads.lastName}
                            onChange={(value)=>{onChangeHandler('lastName',value)}}
                      />
                    </div>
                  </div>
              </div>
          </div>
          <div className="row font" >
              <div className="col-lg-6 col-12 pt-5 px-4">
                <div className='row '>
                  <div className='col-sm-2  col-12'>
                      <label htmlFor="staticEmail" className="col-sm-1 col-form-label">Email*</label>
                  </div>
                  <div className="col-sm-10  col-12">
                      <TextField type="text"  elementId="staticEmail" placeholder='users@example.com' 
                            validation={
                              {checkType:'email' , required:true}
                            }
                            value={personalHeads.Email}
                            onChange={(value,errorMessage)=>{ onChangeHandler('Email',value,errorMessage) }}
                      />
                  </div>
                </div>
              </div>
          </div>
          <div className="row font">
              <div className="col-lg-6 col-12 pt-5 px-4">
                <div className='row '>
                  <div className='col-sm-2  col-12'>
                      <label htmlFor="mobile" className="col-sm-1 col-form-label">Mobile No.*</label>
                  </div>
                  <div className="col-sm-10  col-12">
                      <TextField type="number" elementId="Mobile" 
                            validation={
                              { 
                                maxLengthRequired:10 ,
                                required:true,
                              }
                            } 
                            value={personalHeads.Mobile}
                            onChange={(value,errorMessage)=>{ onChangeHandler('Mobile',value,errorMessage) }}
                      />
                  </div>
                </div>
              </div>
          </div>

          <div className="row font" >
              <div className="col-lg-6 col-12 pt-5 px-4">
                <div className='row '>
                  <div className='col-sm-2  col-12'>
                      <label htmlFor="inputAddress1" className="col-sm-1 col-form-label">Address1</label>
                  </div>
                  <div className='col-sm-10 col-12'>
                      <TextField type="text" elementId="inputAddress1" 
                            value={personalHeads.Address1}
                            onChange={(value)=>{ onChangeHandler('Address1',value) }}
                      />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 pt-5  px-4">
                <div className='row'>
                  <div className='col-sm-2 col-12'>
                    <label htmlFor="inputAddress2" className="col-sm-1 col-form-label">Address2</label>
                  </div>
                  <div className='col-sm-10 col-12'>
                    <TextField type="text" elementId="inputAddress2" value={personalHeads.Address2}
                          onChange={(value)=>{ onChangeHandler('Address2',value) }}
                    />
                  </div>
                </div>
              </div>
          </div>
    
          <div className="row font">
              <div className="col-lg-6 col-12 pt-5 px-4">
                <div className='row '>
                  <div className='col-sm-2  col-12'>
                    <label htmlFor="inputCity" className="col-sm-1 col-form-label">City*</label>
                  </div>
                  <div className="col-sm-10 col-12">
                    <TextField type="text"  elementId="inputCity" 
                          validation={
                            { required:true,}
                          } 
                          value={personalHeads.City}
                          onChange={(value,errorMessage)=>{ onChangeHandler('City',value,errorMessage) }}
                    />
                  </div>
                </div>
              </div>
          </div>
          <div className="row font">
              <div className="col-lg-6 col-12 pt-5 px-4">
                <div className='row '>
                  <div className='col-sm-2  col-12'>
                    <label htmlFor="inputState"className="col-sm-1 col-form-label" >State</label>
                  </div>
                  <div className='col-sm-10  col-12'>
                    <select id="inputState" className="form-control" value={personalHeads.State}
                            onChange={(e)=>{
                                dispatch(updatePersonalInfo({
                                  key: 'State',
                                  value:e.target.value
                              }))
                            }}
                    >
                        <option>Select State</option>
                        {stateNames.map((state,i)=>{
                          return(
                            <option key={i} value={state}>
                              {state}
                            </option>
                            )
                          })
                        }
                    </select>
                  </div>
                </div>
              </div>
          </div>
          <div className=" row font">
              <div className="col-lg-6 col-12 pt-5 px-4">
                <div className='row '>
                  <div className='col-sm-2  col-12'>
                    <label htmlFor="pin" className="col-sm-1 col-form-label">Pincode</label>
                  </div>
                  <div className='col-sm-10  col-12'>
                    <TextField type="number" className="form-control" id="pin" value={personalHeads.Pin}
                          onChange={(value)=>{ onChangeHandler('Pin',value) }}
                    />
                  </div>
                </div>
              </div>
          </div>
          <div className=" row font">
              <div className="col-lg-12 col-12 pt-5 px-4">
                <div className='row '>
                  <div className='col-lg-1 col-sm-2 col-12'>
                    <label htmlFor="Textarea" className="col-sm-1 col-form-label">Objective</label>
                  </div>
                  <div className='col-lg-11 col-sm-10 col-12'>
                    <TextArea elementId="Textarea" rows="3" value={personalHeads.Objective}
                              onChange={(value)=>{ onChangeHandler('Objective',value) }}
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>
          
        <BottomNavigation prevPagePath='/' nextPagePath='/detailsfillingpage/workex' isFormValid={props.isFormValid}/>
        
    </div>
  )
}

export default PersonalInfo
