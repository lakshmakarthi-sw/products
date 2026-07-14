import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { AppProvider } from './app/AppProvider.jsx'
import { BrowserRouter } from 'react-router'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AppProvider>
  </StrictMode>,
)
