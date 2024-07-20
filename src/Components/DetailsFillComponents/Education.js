import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TextField from '../InputComponents/TextField'
import { updateEducation ,addArrayElement,removeArrayElement ,updateErrorMessages} from '../../ReduxManager/dataStoreSlice'
import BottomNavigation from './BottomNavigation'


function Education(props) {
    const educationHeads = useSelector(state => state.dataStore.education)
    
    const dispatch = useDispatch();
    const onChangeHandler= (key,value,index,errorMessage=undefined) =>{
       
        dispatch(updateEducation({
            
            key: key,
            value:value,
            index:index,
       }))
       if(errorMessage!==undefined){
          dispatch(updateErrorMessages({
            
            key:key,
            value:errorMessage,
            index:index,
          }))
        }
      }
    function AddEducation(){
        
        dispatch(addArrayElement({
            key:'education',
            element: {
                Type:"",
                University:"",
                Degree:"",
                Start:"",
                End:""
            }
    })  )
    }
    function RemoveEducation(){
        
        dispatch(removeArrayElement({key:"education" }))
        
        dispatch(updateErrorMessages({
            key:'University',
            value:"",
            index:educationHeads.length-1
          }))

        dispatch(updateErrorMessages({
            key:'Degree',
            value:"",
            index:educationHeads.length-1
          }))
    }

    function yearRange(start, end) {
        
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    let year =yearRange(2000,2035)
  return (
    <div className="container p-4 font" style={{textAlign:"left"}}>
        <h1>Education details</h1>
        <hr/>
        {educationHeads.map((educationHeading,index)=>{
            return(
                <div key={index}>
    <div className="row font">
        <div className="col-lg-6 col-12 pt-5 px-4"> 
            <label className='col-md-12 col-12' htmlFor="type">Type
                <select id="type" className="form-control" value={educationHeading.Type}
                        onChange={(e)=>{
                            dispatch(updateEducation({
                                key: 'Type',
                                value:e.target.value,
                                index:index,
                            }))
                        }}
                >
                    <option value='Graduation'> Graduation</option>
                    <option value='Post Graduation'> Post Graduation</option>
                    <option value='School'> School</option>
                </select>
            </label>
        </div>
    </div>
    <div className="row font">
        <div className="col-lg-6 col-12 pt-5 px-4"> 
            <label  className="col-md-12 col-12" htmlFor="University">University/School*
                <TextField   type="text" elementId="University" placeholder='University'value={educationHeading.University}
                        onChange={
                            (value,errorMessage)=>{
                                onChangeHandler('University',value,index,errorMessage)
                            }
                        }
                        validation={{
                            required:true
                        }}
                />
            </label>
        </div>
        <div className="col-lg-6 col-12 pt-5 px-4"> 
            <label  className="col-md-12 col-12" htmlFor="degree">Degree/Standard*
                <TextField  type="text" elementId="Degree" placeholder='Degree'value={educationHeading.Degree}
                        onChange={(value,errorMessage)=>{onChangeHandler('Degree',value,index,errorMessage)}}
                        validation={{
                            required:true
                        }}
                />
            </label>
        </div>
    </div>
    <div className="row font">
        <div className="col-lg-6 col-12 pt-5 px-4">
            <label htmlFor="Start" className="col-md-12 col-12 col-form-label">Start year
                    <select id="Start" className="form-control" value={educationHeading.Start}
                            onChange={(e)=>{
                                dispatch(updateEducation({
                                    key: 'Start',
                                    value:e.target.value,
                                    index:index,
                                 }))
                            }}
                    >
                        <option>Select year</option>
                        {
                        year.map((yr,i)=>{
                            return(
                            <option key={i}  value={yr} 
                            >{yr}
                            </option>
                            ) 
                        })}
                    </select>
            </label>
        </div>
        <div className="col-lg-6 col-12 pt-5 px-4">
            <label htmlFor="end" className="col-md-12 col-12 col-form-label"> End year
                    <select id="end" className="form-control" value={educationHeading.End}
                            onChange={(e)=>{
                                dispatch(updateEducation({
                                    key: 'End',
                                    value:e.target.value,
                                    index:index,
                                 }))
                            }}
                    >
                        <option >Select year</option>
                        {
                        year.map((yr,i)=>{
                            return(
                            <option key={i} 
                                value={yr}
                            >{yr}
                            </option>
                            ) 
                        })}
                    </select>
            </label>
        </div>
    </div>
    {/* Section for CGPA */}
    <div className="row font">
        <div className="col-lg-6 col-12 pt-5 px-4">
            <label htmlFor="cgpa" className="col-md-12 col-12 col-form-label">CGPA
                <TextField  type="text" elementId="cgpa" placeholder='CGPA' value={educationHeading.CGPA}
                        onChange={(value,errorMessage)=>{onChangeHandler('CGPA',value,index,errorMessage)}}
                        validation={{
                            required:true
                        }}
                />
            </label>
        </div>
    </div>
</div>

                
            )
        })}
        <div className='d-flex'>
                <button 
                    className='btn btn-primary mt-3 me-5 mb-3 ml-1 p-2'
                    onClick={AddEducation}
                >
                    Add new
                </button>
                <button 
                    className='btn btn-primary mt-3 ms-5 mb-3 ml-1 p-2'
                    onClick={RemoveEducation}
                >
                    Remove
                </button>
            </div>
            <BottomNavigation prevPagePath='/detailsfillingpage/workex' nextPagePath='/detailsfillingpage/keyskills' isFormValid={props.isFormValid}/>
    </div>
  )
}

export default Education
