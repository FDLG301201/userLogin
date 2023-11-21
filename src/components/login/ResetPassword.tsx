import React, { useState } from 'react'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');

    const {resetpassword} = useAuth();
  
    const toLogin = () =>{
        navigate('/login');
      }

    const handleChange = (e:any) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = async(e:any) => {
      e.preventDefault();

        try {

            await resetpassword(email);

        } catch (error){

            alert(error);

        }
    };
  
    return (
      <div className="max-w-md mx-auto mt-8">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Reset Password
            </button>
          </div>
        </form>
        <div className="text-center">
        <button
          className="text-blue-500 hover:underline"
          onClick={toLogin}
        >
          Volver al Login
        </button>
        </div>
      </div>
    );
}

export default ResetPassword;