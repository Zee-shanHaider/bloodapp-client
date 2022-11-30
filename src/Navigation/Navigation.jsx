import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect,useState } from 'react'
import {useDispatch} from 'react-redux'
import jwt_decode from 'jwt-decode'

//own imports 
import HomeScreen from '../screens/homeScreen'
import RequestScreen from '../screens/requestScreen'
import DonorScreen from '../screens/donorsScreen'
import SignupScreen from '../screens/signupScreen'
import LoginScreen from '../screens/loginScreen'
import PrivateRoutes from './Private_Routes'
import PublicRoutes from './Public_Routes'
import {Map} from '../components/map/map'
import { isUserLoggedIn } from '../store/user/userActions'


const Navigation = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch()
  // const [loading, setloading] = useState(false)

  useEffect(()=>{
    if(token){
      dispatch(isUserLoggedIn())
    }},[])
  return (
    <div className='App'>
        <Router>
          <Routes>
              <Route exec path='/' element={<HomeScreen/>}/>
            {/* Private Routes */}
            <Route element={<PrivateRoutes/>}>
              <Route exec path='/requests' element={<RequestScreen/>}/>
              <Route exec path='/donors' element={<DonorScreen/>}/>
            </Route>

            {/* Public Routes */}
            <Route element={<PublicRoutes/>}>
              <Route exec path='/login' element={<LoginScreen/>}/>
              <Route exec path='/map' element={<Map/>}/>
              <Route exec path='/signup' element={<SignupScreen/>}/>
            </Route>

          </Routes>
        </Router>
      
    </div>
  
      
    
  )
}

export default Navigation
