import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Acc from './pages/Acc'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Acc />
  </StrictMode>,
)
