import React from 'react'
import { Link } from 'react-router-dom' 
import backgroundImage from '../gasifier_img.png';
const Home = () => {
  return (
    <>
        <div class="flex h-screen bg-indigo-200" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
            <div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5" style={{backgroundColor: 'rgba(224, 231, 255, 0.5)'}}>   
            <header>
                <img class="w-20 mx-auto mb-5" src="./jindal_log_latest.jpeg" alt='Jindal Logo'/>
            </header>   
            <form>
                <div>
                    <Link to="/eff">
                    <button class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded p-6  bg-transparentd hover:text-white border border-blue-500 hover:border-transparent">
                        Get Carbon and Energy Efficiency
                    </button>
                    </Link>
                </div>    
            </form>     
            </div>
        </div>
    </>
  )
}

export default Home