import React from 'react'
import NavBar from './components/NavBar'
import MaterialTheme from './components/MaterialTheme'
import { makeStyles } from '@material-ui/core/styles'


const App = () => {
  const classes = useStyles()
  return <main className={classes.main}>
    <MaterialTheme>
      <NavBar />
    </MaterialTheme>
  </main>

}

const useStyles = makeStyles(() => ({
  main: {
    background: '#ab92b3;',
    height: '100vh'
  }
}))


export default App

