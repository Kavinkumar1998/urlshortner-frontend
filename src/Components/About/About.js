import React from 'react'
import "./About.css";
import Navbar from '../Navbar/Navbar';

const About = () => {
  return (
    
 <div className="Main">
    <Navbar/>
    <h1>About us</h1>
      <h2>
        Welcome to Url shortnerr app, in this app you can short your long url in to shortest. and you can veiw the same ite with our Url.
        you can see how many veiwed through your shortern url
      </h2>
      <h4>contact Us</h4>
        <h3>
          Email : <label>kavinajith412@gmail.com</label>
        </h3>
      </div>
  )
}

export {About};