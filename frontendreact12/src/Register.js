import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';



const Register = () => {
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
    const [gender, genderchange] = useState("female");


    const navigate = useNavigate();
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter correct ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username.';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += '  name.';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += '  Email.';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += '  Password.';
        }
        if (gender === null || gender === '') {
            isproceed = false;
            errormessage += '  Gender.';
        }
        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/.test(email)) {

            } else {
                isproceed = false;
                toast.warning('Please enter Correct Email')

            }
        }
        return isproceed;
    }
    const handlesubmit = (e) => {

        e.preventDefault();
        let registerObj = { id, name, email, password, gender };
        if (IsValidate()) {
            // console.log(registerObj);
            axios.post('http://localhost/ReactProject/backendphp/crud.php', registerObj).then(function(response){
                console.log(response.data)
            })
            navigate('/login')
        }
    }

    return (
        
            <div className='offset-lg-3 col-lg-6' style={{marginTop :'100px'}}>
                <form className='container' onSubmit={handlesubmit}>
                    <div className='card'>
                        <div className='card-header'>
                            <h1>User Registeration</h1>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>User Name <span className='errmsg'>*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Full Name <span className='errmsg'>*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>email <span className='errmsg'>*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control" placeholder='Name@gmail.com'></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Password <span className='errmsg'>*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Gender </label>
                                        <br></br>
                                        <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                                        <label>Male</label>
                                        <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                                        <label>Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <button type="submit" className="btn btn-primary">Register</button>
                            <button className="btn btn-danger">Back</button>

                        </div>
                    </div>
                </form>
            </div>

       
    )
}

export default Register