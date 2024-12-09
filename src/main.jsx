import { createRoot } from 'react-dom/client'
import './index.css'
import logo from './assets/react.svg'
import App from './App.jsx'


const root = createRoot(document.getElementById('root'))

root.render(

  <main>
  <img src={logo} alt='React Logo'/>
  <h1>This is another element</h1>
  </main>

)
