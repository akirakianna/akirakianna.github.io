import React from 'react'

const Doodle = () => {
  return (
    <main>
      <div className="circleContainer">
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
    :container {
      background: #fff;
)`}</css-doodle>
      </div>
    </main>
  )
}

export default Doodle