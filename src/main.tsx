import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Modules from './modules'

const container = document.getElementById('root')
const root = createRoot (container!)


root.render(<React.StrictMode>
  <Modules />
</React.StrictMode>)

