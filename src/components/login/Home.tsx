import React, { Component, useContext, useEffect } from 'react'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const {user, logout, loading} = useAuth();   
    const navigate = useNavigate(); 

    useEffect(() => {
      console.log(user);
    },[user]);

    if(loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div role="status">
          <svg aria-hidden="true" className="w-32 h-32 text-gradient animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>

    )}

    // useEffect(() => {
    //   console.log(authContext);
    // },[authContext]);

    const handleLogOut = async() => {
      navigate('/login');
      await logout();
    }

    return (
      <>
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-screen">
  {/* Difuminado en la parte superior */}
  <div className="absolute inset-0 transform-gpu blur-3xl sm:hidden" aria-hidden="true">
    <div className="aspect-[1097/845] w-full h-full bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
  </div>
  {/* Difuminado en la parte inferior */}
  <div className="absolute inset-0 transform-gpu blur-3xl hidden sm:block" aria-hidden="true">
    <div className="aspect-[1097/845] w-full h-full bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
  </div>
  {/* Contenido del componente */}
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Welcome back {user.email}</h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
    </div>
    {/* Botón en la esquina superior derecha */}
    <button className="absolute top-4 right-4 bg-gradient-to-tr from-[#ff4694] to-[#776fff] text-white px-4 py-2 rounded-md hover:opacity-80 focus:outline-none"
            onClick={handleLogOut}>
      Sign Out
    </button>
  </div>
</div>



      </>
    )
}

export default Home;