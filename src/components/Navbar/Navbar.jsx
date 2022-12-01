import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar_style.css'
import { UserLogout } from '../../store/user/userActions'
import { useDispatch } from 'react-redux'
const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div>
        <div className="nav">
            <p className='para'>
              Blood Bank Management System
            </p>
            <div className="dropdown">
                <button className="dropdown-toggle bg-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  User
                </button>
                <ul className="dropdown-menu">
                  <li className='border-btm'><a className="dropdown-item" href="#">Action</a></li>
                  <li className='border-btm'><a className="dropdown-item" href="#">Another action</a></li>
                  <li className='border-btm'><a className="dropdown-item" href="#">Something else here</a></li>
                  <li className='border-btm'><button className="dropdown-item" onClick={()=>{
                    localStorage.clear()
                    dispatch(UserLogout())
                    navigate('/login')
                  }}
                    >Sign out</button></li>
                </ul>
            </div>
        </div> 

       
    </div>
  ) 
}

export default Navbar
