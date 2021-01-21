import React, { useState } from 'react'
import api from '../utils/Api'
import '../container/container.css'
import profile from '../utils/images/profile-user.svg'

function Login(props:any){
    const[newUser,setNewUser]=useState(false)
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')

    async function handleLogin(event:any){
        event.preventDefault()
        var response = await api.Login({email:email,password:password})
        if(response.status===200)
        {
            const data =response;
            alert('Login Successful')
            console.log(data)
            props.history.push({
                pathname: '/home',
              })
        }
        else{
            console.log(response)
        }
    } 
    async function handleRegistarion(event:any){
        event.preventDefault()
        var response = await api.Register({email:email,password:password})
        if(response.status===200)
        {
            const data = response;
            alert('User Registered Successfully!!')
            console.log(data)
        }
        else{
            console.log(response)
            alert(response)
        }
        handleLogin(event)
    }   
    return(
            <div className='layout'>
                <img src={profile} alt='' className='profile'/>
                {newUser?
                <form onSubmit={handleRegistarion} className='formLayout'>
                    <input
                    type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    className='input'
                    required/>
                    <input
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    className='input'
                    required/>
                    <input
                    type='email'
                    placeholder='Email ID'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className='input'
                    required/>
                    <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className='input'
                    required/>
                    <input type='submit' value='Register' className='inputButton'/>
                    <p className='txt1' onClick={()=>setNewUser(false)}>Already User? Login Here</p>
                </form>
                :
                <form className='formLayout'>
                    <input
                    type='email'
                    placeholder='Email ID'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className='input'
                    required/>
                    <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className='input'
                    required/>
                    <input type='submit' value='Login' className='inputButton' onClick={e=>handleLogin(e)}/>
                    <p className='txt1' onClick={()=>setNewUser(true)}>If New User Register Here!</p>
                </form>}
            </div>
        )
}
export default Login