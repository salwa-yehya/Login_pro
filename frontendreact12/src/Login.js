import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, passwordUpdate] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();



    const handleSubmit = (e)=>{
        e.preventDefault();
    }


    useEffect(()=>{
        getUser()
    },[]);



    useEffect(()=>{
        sessionStorage.clear();
    },[]);


    const forNav =()=>{
        navigate('/');
        toast.success('Welcome To Our Home')
    }
   

    const ProceedLogin = () => {
        for(const user of users){
            if(user.email === email && user.password === password && Object.entries(email).length >0 && Object.entries(password).length >0){
                console.log(`Welcome Salwa`)
                forNav();
                return;
                
            }else{
                console.log("Wrong email or password");
                toast.error('Wrong email or password');
            }
            
        }

        }

        const getUser = ()=>{
            axios.get('http://localhost/ReactProject/backendphp/crud.php').then(function(response){
                setUsers(response.data)
            })
          

        }
    
        
//     const Validate =()=>{
//         let result=true;
//         if(username === '' || username ===null){
//         result = false;
//         toast.warning('Please Enter Username');
//     }
//         if(password === '' || password ===null){
//         result = false;
//         toast.warning('Please Enter Password');
//     }
//             return result;
// }
    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{marginTop :'100px'}}>
                <form onSubmit={handleSubmit} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h1>User Login</h1>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className='errmsg'>*</span></label>
                                <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password<span className='errmsg'>*</span></label>
                                <input type="password" value={password} onChange={e=>passwordUpdate(e.target.value)}  className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button onClick={ProceedLogin} type="submit" className="btn btn-primary" > Login </button>
                            <Link className="btn btn-success" to={'/register'} > New User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login