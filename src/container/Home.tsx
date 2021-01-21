import React, { Fragment, useEffect, useState } from 'react'
import api from '../utils/Api'
import ListUser from '../components/ListUser'
import SingleUser from '../components/SingleUser'
import Create from '../components/Create'
import '../container/container.css'
import axios from 'axios'

function Home(){
    const [action,setAction]=useState('listUsers')
    const [listRes,setListRes]=useState([])
    const [listUser,setListUser]=useState([])
    const [singleUser,setSingleUser]=useState({})
    const [singleRes,setSingleRes]=useState({})

    useEffect(()=>{
        async function initiate() {
            var response = await api.getAllUser()
            console.log(response.data.data,'response')
            setListUser(response.data.data)
          }
          initiate()
    },[])
    async function getAllUser(e:any) {
        e.preventDefault()
        setAction('listUser')
        var response = await api.getAllUser()
        console.log(response.data.data,'response')
        setListUser(response.data.data)
    }
    async function getAllRes(e:any){
        e.preventDefault()
        setAction('listRes')
        var response = await api.getAllResources()
        console.log(response)
        setListRes(response.data.data)
    }
    async function getSingleUser(e:any) {
        e.preventDefault()
        setAction('singleUser')
        var response = await api.getSingleUser()
        console.log(response)
        setSingleUser(response.data.data)
    }
    async function getsingleRes(e:any) {
        e.preventDefault()
        setAction('singleRes')
        var response = await api.getSingleResource()
        console.log(response)
        setSingleRes(response.data.data)
    }
    

    return(
        <Fragment>
        <div className='Nav'>
            <ul>
                <li onClick={(e)=>getAllUser(e)}>List Users</li>
                <li onClick={(e)=>getSingleUser(e)}> Single User</li>
                <li onClick={(e)=>getAllRes(e)}>List Resources</li>
                <li onClick={(e)=>getsingleRes(e)}>Single Resource</li>
                <li onClick={()=>setAction('create')}>Create</li>
            </ul>
        </div>
        {action==='listRes'?<ListUser list={listRes} request='res'/>:
        action==='singleRes'?<SingleUser user={singleRes} request='res'/>:
        action==='singleUser'?<SingleUser user={singleUser} request='user'/>:
        action==='create'?<Create />:<ListUser list={listUser} request='user'/>}
        </Fragment>
    )
}
export default Home