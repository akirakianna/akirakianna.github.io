import React from 'react'
import { device } from './Device'
import styled from 'styled-components'


const NavBar = () => {
  return <Nav>
    <div>
      <Link href="#">About</Link>
      <Link href="#">Skills</Link>
      <Link href="#">Projects</Link>
    </div>
    <div>
      <H2>Kianna Love</H2>
    </div>
  </Nav>
}

const Nav = styled.nav`
  overflow: hidden;
  background-color: rgba(255,255,255, 0.7);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 3;
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.4);
  font-family: 'Bebas Neue', cursive;
  color: #80b692;
`

const H2 = styled.h2`
  padding: 1rem 1.5rem;
  margin: 0.5rem;
  font-size: 2.4rem;

  @media ${device.mobileS} {
    font-size: 1.2rem;
    padding: 0.4rem 0.1rem;
  }

  @media ${device.mobileM} { 
    font-size: 1.6rem;
    padding: 0.9rem 0.3rem;
  }

  @media ${device.mobileL} { 
    font-size: 2rem;
    padding: 1.1rem 0.5rem;
  }

  @media ${device.tablet} { 
  font-size: 2.2rem;
  }
`

const Link = styled.a`
  
  display: block;
  color: #80b692;
  border: 1px solid #80b692;
  border-radius: 5px;
  text-align: center;
  padding: 1rem 1.5rem;
  margin: 0.5rem;
  text-decoration: none;
  float: left;
  font-size: 2.2rem;

  @media ${device.mobileS} {
    font-size: 1.2rem;
    padding: 0.4rem 0.2rem;
  }

  @media ${device.mobileM} { 
    font-size: 1.4rem;
    padding: 0.9rem 0.3rem;
  }

  @media ${device.mobileL} { 
    font-size: 1.8rem;
    padding: 1.1rem 0.5rem;
  }
  
  @media ${device.tablet} { 
    font-size: 2rem;
  }
`

export default NavBar




// const Form = styled.form`

//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: white;
//   @media only screen and (min-width: 1000px){

//   }
//   &:hover{

//   }
// `