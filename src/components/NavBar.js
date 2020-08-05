import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'

const NavBar = (props) => {
  const classes = useStyles()
  return <React.Fragment>
    <CssBaseline />
    <AppBar>
      <Toolbar>
        <Button className={classes.button}>About</Button>
        <Button className={classes.newButton}>Skills</Button>
        <Button>Projects</Button>
      </Toolbar>
    </AppBar>
    <Toolbar id="back-to-top-anchor" />
    <ScrollTop {...props}>
      <Fab color="secondary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  </React.Fragment>
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  button: {
    backgroundColor: 'white'
  },
  newButton: {
    backgroundColor: 'red'
  }
}))

function ScrollTop(props) {
  const { children, window } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
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