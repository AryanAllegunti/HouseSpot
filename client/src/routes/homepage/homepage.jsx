import { useContext } from 'react'
import Searchbar from '../../components/searchbar/SearchBar'
import './homepage.scss'
import { AuthContext } from '../../context/AuthContext'

function Homepage(){

const {currentUser} =useContext(AuthContext)
console.log(currentUser)

  return (
    <div className='homepage'>
        <div className='textContainer'>
         <div className='wrapper'>
         <h1 className='title'>
          Find Real Estate & Get Your Dream Place
          </h1>
          <p>
          Design a basic optical link budget system for the given scenario, 
          considering different types of optical networks and selecting the most suitable one. 
          Take into account optical losses and incorporate various components to ensure an 
          </p>
          <Searchbar/>
          <div className='boxes'>
             <div className='box'>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
             </div>
             <div className='box'>
              <h1>200</h1>
              <h2>Award Gained</h2>
             </div>
             <div className='box'>
              <h1>2000+</h1>
              <h2>Property Ready</h2>
             </div>
          </div>
          </div> 
          </div>
        <div className='imgContainer'>
          <img src="/bg.png"></img>
        </div>
    </div>
  )
}

export default Homepage