import React from 'react'
import profile from '../utils/images/profile-user.svg'
import '../components/component.css'
function ListUser(props){
    const user= props.user
                return(
                    <div className='center'>
                    <div className='cardProfile'>
                    {props.request === 'user'?<img src={user.avatar} alt={profile} className='imgProfile' />:
              <img src={profile} alt="" className='imgProfile1'/>}
                    {props.request==='user'?
                    <div>
                        <p className='txtName'>{user.first_name} {user.last_name}</p>
                        <p className='txtName'>{user.email}</p>
                    </div>:
                    <div>
                        <p className='txtName'>{user.name}</p>
                        <p className='txtName'>{user.year}</p>
                        <p className='txtName'>{user.pantone_value}</p>
                    </div>}
                    </div>
                    </div>
                
            
            
    )
}
export default ListUser