import React from 'react'
import { Link } from 'react-router-dom' 
const Home = () => {
  return (
    <>
        <div class="flex h-screen bg-indigo-200">
            <div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">   
            <header>
                <img class="w-20 mx-auto mb-5" src="./Jindal_logo.jpeg" />
            </header>   
            <form>
                <div>
                <Link to="/eff">
                <button class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded p-6  bg-transparentd hover:text-white border border-blue-500 hover:border-transparent">
                Get Carbon and Energy Efficiency
                </button>
                </Link>
                </div>
                <div>      
                <Link to="/charts">    
                <button class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded p-6  bg-transparentd hover:text-white border border-blue-500 hover:border-transparent ">
                Get Efficiency Charts !
                </button>
                </Link>
                </div>     
            </form>  
            <footer>
                <a class="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Give Feedback</a>
            </footer>   
            </div>
        </div>
    </>
  )
}

export default Home