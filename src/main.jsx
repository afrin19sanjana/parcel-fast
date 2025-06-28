import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'aos/dist/aos.css';
import {

  RouterProvider,
} from "react-router";
import { router } from './route/Router.jsx';
import Aos from 'aos';
Aos.init()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-[#edf1f3]">
 <RouterProvider router={router} />
    </div>
    
  </StrictMode>,
)
