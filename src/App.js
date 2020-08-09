import React from 'react'
import NavBar from './components/NavBar'
import ProjectCard from './components/ProjectCard'
import 'css-doodle'

const App = () => {
  return (
    <main>
      <ProjectCard />
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
      // background: #d8ec8f;
      transform: scale(5) rotate(90deg);
    }
    :container {
      background: #fff;
    //   grid-gap: 5px;
    //   transform: rotate(45deg) scale(1);
    //   background: linear-gradient(
    //     @stripe(
    //       #60569e 20%, #e6437d 20%, #ebbf4d 20%, #60569e 20%
    //     )
    //   );
    }
    // --bg: #60569e;
    // background: linear-gradient(
    //   @rand(45deg),
    //   @stripe(#60569e 20%, #e6437d 20%, #ebbf4d 20%, #e6437d 20%, #60569e 20%),
    //   @var(--bg) 60%, transparent 90%
    // );
    // transform: scale(@rand(.4, .9));
)`}</css-doodle>
      </div>
      <NavBar />
    </main>
  )
}


// const classes = useStyles()
// return ( <>
//     <NavBar />
{/* <div className="patterns">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <pattern id="puzzle" x="0" y="0" width="600" height="600" patternUnits="userSpaceOnUse">
              <path fill="#8cd790" d="M 115.51 110.516 C 112.957 101.749 154.172 65.527 167.286 110.564 C 209.31 86.716 212.838 129.584 195.292 139.541 C 230.537 165.769 187.425 179.065 182.503 167.901 C 191.434 172.705 161.884 194.331 140.493 182.826 C 139.85 190.607 95.357 202.877 97.568 176.118 C 94.721 183.058 60.341 182.834 74.963 147.181 C 67.603 150.522 62.855 132.293 75.234 126.675 C 64.046 117.692 85.35 86.303 115.51 110.516 Z"></path>
              <path d="M 124.787 453.414 C 122.234 462.181 163.449 498.403 176.563 453.366 C 218.587 477.214 222.115 434.346 204.569 424.389 C 239.814 398.161 196.702 384.865 191.78 396.029 C 200.711 391.225 171.161 369.599 149.77 381.104 C 149.127 373.323 104.634 361.053 106.845 387.812 C 103.998 380.872 69.618 381.096 84.24 416.749 C 76.88 413.408 72.132 431.637 84.511 437.255 C 73.323 446.238 94.627 477.627 124.787 453.414 Z"></path>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#puzzle)" />
          {/* <rect x="100" width="100" height="100" y="100"></rect> */}
{/* </svg>
      </div> */}
// <ProjectCard />
// </> 
// )
// }

// const useStyles = makeStyles(() => ({
//   main: {
//     background: '#bfb8da',
//     height: '100vh'

//   }
// }))


export default App

