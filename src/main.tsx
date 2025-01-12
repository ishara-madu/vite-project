import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './screens/App.tsx'
import "/node_modules/flag-icons/css/flag-icons.min.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
