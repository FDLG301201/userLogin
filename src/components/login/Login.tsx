import React, { useEffect, useState } from 'react'
import { fondo } from '../../assets/img/ImgCollection';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const Login = () => {


  const {login} = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email:'',
    pass: ''
  });

  const handleChange = (e: any) => {
    setUser({...user, [e.target.id]: e.target.value});
  }

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    console.log(user);
    try{
      await login(user.email, user.pass);
      navigate('/');
    } catch(error){
      alert(error);
    }
  }

  const toRegister = () =>{
    navigate('/register');
  }

  return (
    <>
    <div className='flex justify-center items-center h-screen w-screen'>
        <div className="w-[50%] max-w-xs pr-4">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username or Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="email"
                    type="text"
                    placeholder="Username"
                    onChange={handleChange} 
                    />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="pass" 
                    type="password" 
                    placeholder="******************"
                    onChange={handleChange}  
                    />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                onClick={toRegister}
                >
                Register Now!
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 Francisco Daniel Lora. Todo los derechos reservados.
          </p>
        </div>

        <div className='w-[60%] h-[80%] bg-cover bg-center bg-no-repeat rounded-3xl' 
               style={{backgroundImage: `url(${fondo})`}}
               />
    </div>
    </>
  )
}

export default Login;