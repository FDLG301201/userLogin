import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const Register = () => {

  const {signUp} = useAuth();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: '',
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleChange = (data: any) => {
    setNewUser({...newUser, [data.target.id]:data.target.value})
  }

  const handleSubmit = async (data: any) => {
    data.preventDefault();

    try{

      await signUp(newUser.email, newUser.password);
      const tologin = window.location.pathname.replace('register', 'login');
      navigate(tologin);

    } catch(error) {
      alert(error);
      console.log(error);
    }

  }


  return (
    <>
  <div className='flex h-screen w-screen justify-center items-center border-2'>
  <form className="w-full max-w-lg" onSubmit={handleSubmit}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3 mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          E-mail
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              placeholder="JaneDoe12@fakemail.com"
              onChange={handleChange}/>
      </div>
    <div className="w-full px-3 mb-6">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        UserName
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
             id="userName"
             type="text"
             placeholder="JaneDoe12"
             onChange={handleChange}/>
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
             id="firstName"
             type="text"
             placeholder="Jane"
             onChange={handleChange}
             />
      {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" /> */}
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
             id="lastName"
             type="text"
             placeholder="Doe"
             onChange={handleChange} />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
             id="password"
             type="password"
             placeholder="******************"
             onChange={handleChange}/>
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        City
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
             id="city"
             type="text"
             placeholder="Albuquerque"
             onChange={handleChange}/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="state"
                onChange={handleChange}>
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Zip
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
             id="zipCode"
             type="text"
             placeholder="90210"
             onChange={handleChange}/>
    </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-6" type='submit'>
        Register
      </button>
  </div>
</form>
  </div>
    </>
  )
}

export default Register;