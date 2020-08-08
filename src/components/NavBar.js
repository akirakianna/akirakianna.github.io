import React from 'react'


const NavBar = () => {
  return <nav className="navbar">
    <div className="links">
      <a href="#">About</a>
      <a href="#">Skills</a>
      <a href="#">Projects</a>
    </div>
    <div>Logo</div>
  </nav>
}


export default NavBar




// import styled from 'styled-components'


// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   min-height: 30vh;
//   min-width: 300px;
//   justify-content: space-around;  
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: white;
//   @media only screen and (min-width: 1000px){

//   }
//   &:hover{

//   }
// `