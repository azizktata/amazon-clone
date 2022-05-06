import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { auth } from '../../firebase'

import "./Login.css"

function Login() {
    const history = useNavigate();
    const [loginData, setLoginData] = useState({
        email:"",
        password:""
    })
   
    const [error,setError] = useState("")
    const handleChange = e =>{
       

        const {name, value} = e.target
        setLoginData(prevData => {
            return{
                ...prevData,
                [name]:value
            }
        })
    }

    const handleSubmit = e=>{
        e.preventDefault();
        const {email, password} = loginData
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history("/")
        })
        .catch(error => alert(error.message))

    }

    const handleRegister = e =>{
        e.preventDefault();
        const {email, password} = loginData
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>
            history("/")
         
         )
         .catch(error =>
         alert(error.message)
         )
    }
    
  return (
      <div className='login'>
    <div className='login-page'>
        <Link to="/">
        <img 
                className='logo'
                src='https://holyokestpatricksroadrace.org/wp-content/uploads/2020/03/amazon-logo-preview.png' 
                alt='logo'
            />
        </Link>
        <div className='log-in-box'>
            <h2>Sign-in</h2>
            <form className='sign-in-form'>
                <div className='input'>
                <label htmlFor='email'>Email</label>
                <input
                    type="email"
                    name='email'
                    required
                    value={loginData.email}
                    onChange={handleChange}
                />
                </div>
                <div className='input'>
                <label htmlFor='password'>Password</label>
                <input
                    type="password"
                    name='password'
                    value={loginData.password}
                    onChange={handleChange}
                />
                </div>
                <button className='sign-in-btn' disabled={loginData.email==="" || loginData.password===""} onClick={handleSubmit}>Sign In</button>
            </form>
                <p>
                    En passant votre commande, vous acceptez les Conditions générales de vente d’Amazon.
                    Veuillez consulter notre Notice Protection de vos informations personnelles,
                    notre Notice Cookies et notre Notice Annonces publicitaires basées sur vos centres d’intérêt.
                </p>
                <button className='create-btn' onClick={handleRegister}>Create your Amazon Account</button>

        </div>
    </div>
    </div>
  )
}

export default Login