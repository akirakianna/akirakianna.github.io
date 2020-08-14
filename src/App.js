import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Doodle from './components/CssDoodle'
import About from './components/About'

import 'css-doodle'
import styled from 'styled-components'


const App = () => {

  return (

    <div className="container">
      <span>C</span>
      <span>O</span>
      <span>M</span>
      <span>I</span>
      <span>N</span>
      <span>G </span>
      <span>S</span>
      <span>O</span>
      <span>O</span>
      <span>N</span>
    </div>

    /* <Doodle className="panels" id="a" />
    
    <Main>
      <section>
        <About className="panels" />
      </section>
    </Main>
    <NavBar />
  </div> */

  )
}



const Main = styled.main`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
top: 50%;
`



export default App

