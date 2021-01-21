import axios from 'axios'

const BASE_URL = 'https://reqres.in/api/'

const create = (baseURL = BASE_URL) => {
    
    // Login
    const Login = async(body) => {
      console.log('login request sent')
      return await axios.post(baseURL+'login', body)
    }
    // Register
    const Register = (body) => {
      return axios.post(baseURL+'register', body)
    }
    // Get all users
    const getAllUser = () => {
      return axios.get(baseURL+'users?page=2')
    }
    // Get single user 
    const getSingleUser = () => {
      return axios.get(baseURL+'users/2')
    }
    // Get List Resource
    const getAllResources = () => {
      return axios.get(baseURL+'unknown')
    }
    // Get single Resource 
    const getSingleResource = () => {
      return axios.get(baseURL+'unknown/2')
    }
    // update user 
    const updateUser = () => {
      return axios.post(baseURL+'users/2')
    }
    // Delete user 
    const deleteUser = () => {
      return axios.delete(baseURL+'users/2')
    }
    // create Resource
    const createResource = (body) => {
      return axios.post(baseURL+'users',body)    }
   
    return {
      // Exporting the list of api functions for use in other modules
        Login,
        Register,
        getAllUser,
        getSingleUser,
        getAllResources,
        getSingleResource,
        deleteUser,
        createResource,
        updateUser
    }
  }
  
  export default create()