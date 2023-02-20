import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    
// const navigate = useNavigate() ;
//     useEffect(()=>{
//     let email =sessionStorage.getItem('email');
//     if(email==='' || email===null){
//         navigate('/login');
//     }
//     },[]);
  return (
    <div>
    <div className='header'>
       <Link to={'/'}>Home</Link>
       <Link style={{float:'right'}} to={'/login'}>Logout</Link>

    </div>
           <div>
            <h1 className="text-center">Home</h1>
            </div>

    </div>
  )
}

export default Home