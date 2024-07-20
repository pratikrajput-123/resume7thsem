import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {templateImagesPaths} from '../Data/Data'
import { useDispatch } from 'react-redux'
import {updateState} from '../../ReduxManager/dataStoreSlice'
import './home.css';
import YouTube from 'react-youtube';
import Footer from '../Footer/Footer'
const shortid= require('shortid')
 
function Home() {
    const videoId = 'c0qRfChAN0s';
    const [isMouseOver, setIsMouseOver] = useState('MouseIsNotOver')
    
    const dispatch = useDispatch();
    return (

        <div>
        <h2 style={{padding:'5px',textAlign:'center',fontFamily:'fantasy',fontSize:'34px'}}>Create your resume in just 10 minutes</h2>
        <div className="resume">
          <div className="resume-image">
            <img height="600px" width="540px" src="./resume.png" alt="resume" />
          </div>
          <div className="resume-para">
            <h3>THE BEST ONLINE</h3>
            <h1>RESUME BUILDER</h1>
            <p>
              Create a standout resume in minutes with our easy-to-use builder.
              Choose from professional templates and customize your resume to
              fit your career goals. Join thousands of users and take the first
              step towards your dream job today!
            </p>
            <div className="stats-wrap">
              <div className="interview">
                <h2>2x</h2>
                <p>more interviews</p>
              </div>
              <div className="placement">
                <h2>30%</h2>
                <p>more JOB placements</p>
              </div>
            </div>
            <div className="hired-candidates">
              <h4 style={{ fontSize: "20px" }}>Hired Candidates</h4>
              <div className="scrolling-text">
                <div className="text-content">
                  <span>John Doe - Software Engineer</span>
                  <span>Jane Smith - Data Scientist</span>
                  <span>Michael Brown - Project Manager</span>
                  <span>Emily Davis - UX Designer</span>
                  <span>David Wilson - Marketing Specialist</span>
                  <span>Olivia Johnson - Product Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div style={{minWidth:'300px'}}>
    
            <div className='d-flex justify-content-center mt-5' >
                
            <h2 style={{textAlign:'center',fontFamily:'fantasy',fontSize:'34px'}}>Select A Template To Get Started</h2>
            </div>
           

            <div className='container' style={{color:'#1f4287',}}>

                <div className='row'>
                    {templateImagesPaths.map((currentTemplate)=>{
                            return(
                                <div className='col col-lg-3 col-md-6  col-12 mt-5' key={shortid.generate()}>
                                    <div 
                                        style= {{ position:'relative'}}
                                        onMouseOver= {()=>{
                                            //this function allows us to display 'Use Template'button on the top of the targeted template, when the user hovers over it by setting state's value to the targeted template name.//
                                            setIsMouseOver(currentTemplate.name)
                                        }}
                                        onMouseOut= {()=>{
                                            //this function allows us to hide 'Use Template' button when the user moves out from the particular template//
                                            setIsMouseOver('MouseIsNotOver')
                                        }}
                                    >
                                    <div className='w-100 d-flex justify-content-center'><h3>{currentTemplate.name}</h3></div>
                                    <img className="w-100 image-aspect-ratio" src={currentTemplate.imageSource} alt='template'/>
                                    {isMouseOver === currentTemplate.name           //this conditional rendering is showing 'useTemplate' button when isMouseOver === currentTemplate.name //
                                        ?<Link to="/detailsfillingpage/personalinfo">
                                            <button className='btn btn-primary'
                                                    style={{position: 'absolute',top:'50%' , right:'30%',}}
                                                    onClick= {()=>{
                                                        dispatch(updateState({  //this dispatch function is used to update value of 'selectedTemplate' with the targetedTemplate in dataStoreSlice.js//
                                                        key: 'selectedTemplate',
                                                        value:currentTemplate.name
                                                        }))
                                                    }}
                                            >
                                            Use Template
                                            </button>
                                        </Link>
                                        :null
                                    }
                                </div>
                                </div>
                                
                            )
                        })}
                </div>
            </div>
            
            
        </div>

    <div className='Youtube'>
    <div className='Youtubeleft'>
        <YouTube videoId={videoId} opts={{ width: '700', height: '400' }}/>
    </div>
    <div className='Paragraphright'>
        <p>
            Explore our comprehensive video tutorial for a hands-on learning experience. Dive deep into the intricacies of our platform as we guide you through each step with clarity and precision. From mastering advanced features to optimizing your workflow, our video offers invaluable insights to propel your journey towards success. Join us on this immersive learning adventure and unlock the full potential of our platform today!
        </p>
    </div>
    </div>


    <div>

        <Footer/>
    </div>
    </div>
    )
}

export default Home
