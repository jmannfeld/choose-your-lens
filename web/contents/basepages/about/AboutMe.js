import React from 'react'
import maria from './maria.jpg';

export default function AboutMe() {
  return (
    <div>
      <div className="pt-5">
        <img src={maria} alt="Selfie of Maria smiling" className="about-image mr-5 mb-3 w-full md:w-1/2"/>
        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /> <br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Tellus integer feugiat scelerisque varius morbi. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Massa enim nec dui nunc mattis enim. In fermentum et sollicitudin ac orci phasellus. Quam id leo in vitae. Nullam non nisi est sit amet facilisis magna etiam tempor. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Eget nunc lobortis mattis aliquam faucibus purus. </p>
      </div>
      <p className="pretty-quote">Life is a journey, embrace the different paths that lead you back to you, celebrate the small moments. For one day you will look back and you will be amazed by the colors you created on your own journey. Be you, be the amazing you, you are what the world needs!!! Keep making a ruckus!</p>
    </div>
  )
}
