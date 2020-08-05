import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'


const MaterialTheme = ({ children }) => {
  const theme = createMuiTheme({
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: '#ffe4cb'
        }
      },
      MuiToolbar: {
        root: {
          display: 'flex',
          justifyContent: 'space-between'
        }
      }
    }
  })

  //! Creating a custom provider, material UI's own theme provider

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )

}

export default MaterialTheme
