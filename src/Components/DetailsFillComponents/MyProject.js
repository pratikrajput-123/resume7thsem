import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TextField from '../InputComponents/TextField'
import { updateProject ,addArrayElement,removeArrayElement } from '../../ReduxManager/dataStoreSlice'
import BottomNavigation from './BottomNavigation'


function MyProject(props) {
  const project = useSelector(state => state.dataStore.myproject) // this state stores the skills of dataStoreSlice.
    const dispatch = useDispatch();

    function AddProject(){
      
      dispatch(addArrayElement({
        key:'myproject',
        element: {title:"",Description:"",Start:"",End:""}
        })  
      )   
    }
    function RemoveProject(){
     
      dispatch(removeArrayElement({key:"myproject" }))
    }
    
  return (
    <div className="p-5 font" style={{textAlign:"left"}}>
        <h1>My Project</h1>
        <hr/>
    
        {project.map((item,index)=>{
            return(
                <div key={index} className='col-lg-5 col-md-6 col-12 mt-5'>
                    <TextField  type="text" value={item.title} placeholder="Enter Project title and description"
                      onChange={(value)=>{
                        
                       
                        dispatch(updateProject({
                          

                          key: 'myproject',
                          value:value,
                          index:index,
                        }))
                      }}
                    />
                    
                </div>
            )
        })}
        <div className='row mt-3 '>
          <div className='col-sm-2 col-12 mt-3'>
            <button className='btn btn-primary p-2'
                      onClick={AddProject}>
                    Add-Project
            </button>
          </div>
          <div className='col-sm-2 col-12 mt-3'>
            <button className='btn btn-primary p-2'
                      onClick={RemoveProject}>
                  Remove 

              </button>
          </div>
        </div>
        <BottomNavigation prevPagePath='/detailsfillingpage/keyskills' nextPagePath='/myresume' isFormValid={props.isFormValid}/>
      
    </div>
  )
}

export default MyProject
