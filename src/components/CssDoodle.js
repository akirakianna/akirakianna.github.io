import React from 'react'
import styled from 'styled-components'

const Doodle = () => {
  return (
    <Container>
      <css-doodle>{`
    :doodle {
      @grid: 20 / 100vmax;
      @shape: circle;
      overflow: hidden;
      
    }
    @even {
      @shape: rhombus;
      background: radial-gradient(
        circle at @r(70%) @r(70%),
        @m(20, (
          @p(#d8ec8f, #80b692) calc((@n - 1) * 100% / @N),
          @lp calc(@n * 60% / @N)
        ))
      );
      transform: scale(5) rotate(90deg);
    }
    // :container {
    //   background: #fff;
)`}</css-doodle>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center; 
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`


export default Doodle