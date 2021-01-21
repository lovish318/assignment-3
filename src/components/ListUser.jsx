import React from 'react'
import api from '../utils/Api'
import profile from '../utils/images/profile-user.svg'
import '../components/component.css'
function ListUser (props) {
  const users = props.list
  async function handleUpdate () {
    var response = await api.updateUser({
      name: 'morpheus',
      job: 'zion resident'
    })
    if (response.status === 201) {
      const data = response
      alert('Update Successful')
    }
  }
  async function handleDelete () {
    var response = await api.deleteUser()
    if (response.status === 204) {
      const data = response
      alert('Delete Successful')
    }
  }
  return (
    <div className='center'>
      {console.log(props, 'props')}
      {users ? (
        users.map(user => {
          return (
            <div className='cardProfile'>
              {props.request === 'user'?<img src={user.avatar} alt={profile} className='imgProfile' />:
              <img src={profile} alt="" className='imgProfile1'/>}
              {props.request === 'user' ? (
                <div>
                  <p className='txtName'>
                    {user.first_name} {user.last_name}
                  </p>
                  <p className='txtName'>{user.email}</p>
                </div>
              ) : (
                <div>
                  <p className='txtName'>{user.name}</p>
                  <p className='txtName'>{user.year}</p>
                  <p className='txtName'>{user.pantone_value}</p>
                </div>
              )}
              <div className='divButtons'>
                <button className='btnUpdate' onClick={()=>handleUpdate()}>
                  Update
                </button>
                <button className='btnUpdate' onClick={()=>handleDelete()}>
                  Delete
                </button>
              </div>
            </div>
          )
        })
      ) : (
        <div />
      )}
    </div>
  )
}
export default ListUser
