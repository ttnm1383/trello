import CssBaseline from '@mui/material/CssBaseline'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App.jsx'
import theme from '~/theme.js'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <StrictMode>
      <CssVarsProvider theme={theme} >
        <CssBaseline />
        <App />
      </CssVarsProvider>
    </StrictMode>
  )
