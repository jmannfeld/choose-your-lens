import React from 'react'
import maria from './maria.jpg';

export default function AboutMe() {
  return (
    <div>
    <p className="pretty-quote">Life is a journey, embrace the different paths that lead you back to you, celebrate the small moments. For one day you will look back and you will be amazed by the colors you created on your own journey. Be you, be the amazing you, you are what the world needs!!! Keep making a ruckus!</p>
    <div className="flex flex-col md:flex-row pt-5">
      <img src={maria} alt="Selfie of Maria smiling" className="w-full md:w-1/2 about-image"/>
      <div>
        <p className="px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="px-5">Tellus integer feugiat scelerisque varius morbi. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Massa enim nec dui nunc mattis enim. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Amet justo donec enim diam vulputate ut pharetra sit. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Posuere sollicitudin aliquam ultrices sagittis orci a.</p>
      </div>
    </div>
    </div>
  )
}
