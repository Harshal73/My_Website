import React from 'react'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
const Portfolio = () => {
  return (
    <div name="portfolio"
    className='bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen'
    
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full
        '>
            <div>
                <p>Portfolio</p>
                <p>Check out some of my work right here</p>
            </div>
            <div>

            </div>
            <div>
                <img src={reactWeather} alt=""/>
                <div>
                    <button>Demo</button>
                    <button>Code</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio