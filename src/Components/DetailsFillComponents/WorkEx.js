import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import BottomNavigation from './BottomNavigation'
import TextField from '../InputComponents/TextField'
import TextArea from '../InputComponents/TextArea'
import { updateWorkEx ,addArrayElement,removeArrayElement, updateErrorMessages } from '../../ReduxManager/dataStoreSlice'


function WorkEx(props) {

    const workHeads = useSelector(state=> state.dataStore.workEx) 
    const dispatch = useDispatch();

    const onChangeHandler= (key,value,index,errorMessage=undefined) =>{
        
        dispatch(updateWorkEx({
            
            key: key,
            value:value,
            index:index,
       }))
       if(errorMessage!==undefined){
          dispatch(updateErrorMessages({
            
            key:key,
            value:errorMessage,
            index:index
          }))
        }
      }

    function AddExperience(){
        dispatch(addArrayElement({
            key: 'workEx',
            element:{
                title:"",
                orgName:"",
                startYear:"",
                endYear:"",
                jobDescription:"",
            },
            
         }))
    }
    function RemoveExperience(){
        
        dispatch(removeArrayElement({key:"workEx" }))
    
        dispatch(updateErrorMessages({
            key:'title',
            value:"",
            index:workHeads.length-1
          }))

        dispatch(updateErrorMessages({
            key:'orgName',
            value:"",
            index:workHeads.length-1
          }))
    }
    function yearRange(start, end) {
        
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    let year =yearRange(2000,2023)
  return (
    <div className='p-5' style={{textAlign:"left"}}>
        <h2 >Work Experience</h2>
        
        {workHeads.map((workHeading,index)=>{
            return(
                <div key={index}>
                    <div className="container p-2 font" style={{textAlign:"left"}}>
                        <h5>Experience {index+1}</h5>
                        <hr/>
                        <div className="row font">
                            <div className="col-lg-6 col-12 pt-5 px-4">                                
                                    <label className="col-sm-12 col-12" htmlFor="title" >Job Title*
                                        <TextField  
                                            type="text" elementId="title" placeholder='Enter Job Title' 
                                            value={workHeading.title}
                                            onChange={
                                                
                                                (value,errorMessage)=>{
                                                    
                                                    onChangeHandler('title',value,index,errorMessage)
                                                }
                                            }
                                            validation={{
                                                
                                                required:true
                                            }}
                                        />
                                    </label>
                            </div>
                            <div className="col-lg-6 col-12 pt-5 px-4">  
                                    <label className="col-sm-12 col-12" htmlFor="name" >Organization Name*
                                        <TextField   type="text" elementId="name"  placeholder= 'Enter Organization Name'
                                            value={workHeading.orgName}
                                            onChange={(value,errorMessage)=>{onChangeHandler('orgName',value,index,errorMessage)}}
                                            validation={{
                                                required:true
                                            }}
                                        />
                                    </label>
                            </div>
                        </div>
                        <div className="row font">
                            <div className="col-lg-6 col-12 pt-5 px-4"> 
                                <label htmlFor="start"className="col-sm-12 col-12 col-form-label" >Start year
                                        <select id="start" className="form-control" value={workHeading.startYear}
                                         onChange={(e)=>{
                                            dispatch(updateWorkEx({
                                                key: 'startYear',
                                                value:e.target.value,
                                                index:index,
                                            }))
                                        }}>
                                            <option > Select year</option>
                                            {
                                            year.map((yr,i)=>{
                                               return(
                                                <option key={i} 
                                                        value={yr}>{yr}</option>
                                               ) 
                                            })}
                                        </select>
                                </label>
                            </div>
                            <div className="col-lg-6 col-12 pt-5 px-4"> 
                                <label htmlFor="end"className="col-sm-12 col-12  col-form-label" >End year
                                        <select id="end" className="form-control" value={workHeading.endYear}
                                         onChange={(e)=>{
                                            dispatch(updateWorkEx({
                                                key: 'endYear',
                                                value:e.target.value,
                                                index:index,
                                            }))
                                        }}>
                                            <option > Select year</option>
                                            {
                                            year.map((yr,i)=>{
                                               return(
                                                <option  key={i} >{yr}</option>
                                               ) 
                                            })}
                                            
                                        </select>
                                </label>
                            </div>
                        </div>
                        <div className="form-group row font">
                            <div className="col-lg-12 col-12 pt-5 px-4"> 
                                <label htmlFor="Textarea" className="col-sm-12 col-12 col-form-label">Job-description
                                    <TextArea  elementId="Textarea" rows="3" value={workHeading.jobDescription}
                                        onChange={(value)=>{onChangeHandler('jobDescription',value,index)}}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
        })}
        <div className='d-flex'>
            <button 
                className='btn btn-primary mt-3 me-5 mb-3 ml-1 p-2'
                onClick={AddExperience}
            >
                Add new
            </button>
            <button 
                className='btn btn-primary mt-3 ms-5 mb-3 ml-1 p-2'
                onClick={RemoveExperience}
            >
                Remove
            </button>
        </div>
        <BottomNavigation prevPagePath='/detailsfillingpage/personalinfo' nextPagePath='/detailsfillingpage/education' isFormValid={props.isFormValid} />
    </div>
    
  )
}

export default WorkEx
