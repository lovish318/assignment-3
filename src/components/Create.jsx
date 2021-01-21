import React, { useState } from 'react'
import api from '../utils/Api'
import '../container/container.css'
import profile from '../utils/images/profile-user.svg'

function Create(){
    const[name,setName]=useState('')
    const[job,setJob]=useState('')
    
    async function handleCreate(event){
        event.preventDefault()
        var response = await api.createResource({name:name,job:job})
        if(response.status===201)
        {
            const data =response;
            alert('Create Successful')
            console.log(data)
        }
        else{
            console.log(response)
        }
    } 
    
    return(
            <div className='layout'>
                <img src={profile} alt='' className='profile'/>
                
                <form className='formLayout'>
                    <input
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className='input'
                    required/>
                    <input
                    type='text'
                    placeholder='Job'
                    value={job}
                    onChange={(e)=>setJob(e.target.value)}
                    className='input'
                    required/>
                    <input type='submit' value='Create' className='inputButton' onClick={e=>handleCreate(e)}/>
                    
                </form>
            </div>
        )
}
export default Create