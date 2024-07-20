import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TextField from '../InputComponents/TextField'
import { updateKeySkills ,addArrayElement,removeArrayElement } from '../../ReduxManager/dataStoreSlice'
import BottomNavigation from './BottomNavigation'



function KeySkills(props) {
    const skillHeads = useSelector(state => state.dataStore.skills) 
    const dispatch = useDispatch();

    function AddSkill(){
      
      dispatch(addArrayElement({
        key:'skills',
        element: {skillName:"",}
        })  
      )   
    }
    function RemoveSkill(){
      
      dispatch(removeArrayElement({key:"skills" }))
    }
    
  return (
    <div className="p-5 font" style={{textAlign:"left"}}>
        <h1>Key Skills</h1>
        <hr/>
    
        {skillHeads.map((item,index)=>{
            return(
                <div key={index} className='col-lg-5 col-md-6 col-12 mt-5'>
                    <TextField  type="text" value={item.skillName}
                      onChange={(value)=>{
                        
                       
                        dispatch(updateKeySkills({
                          

                          key: 'skillName',
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
                      onClick={AddSkill}>
                  Add-Skill

              </button>
          </div>
          <div className='col-sm-2 col-12 mt-3'>
            <button className='btn btn-primary p-2'
                      onClick={RemoveSkill}>
                  Remove

              </button>
          </div>
        </div>
        <BottomNavigation prevPagePath='/detailsfillingpage/education' nextPagePath='/detailsfillingpage/myproject' isFormValid={props.isFormValid}/>
      
    </div>
  )
}

export default KeySkills
