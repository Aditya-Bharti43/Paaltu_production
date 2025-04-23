import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Card1 from './components/Articles/Card1/Card1.jsx'
import Card2 from './components/Articles/Card2/Card2.jsx'
import Card3 from './components/Articles/Card3/Card3.jsx'
import Card4 from './components/Articles/Card4/Card4.jsx'
import Card5 from './components/Articles/Card5/Card5.jsx'
import Card6 from './components/Articles/Card6/Card6.jsx'

createRoot(document.getElementById('root')).render(
  
  
  <BrowserRouter>
  
  <Routes>
  <Route path='/' element={<App/>}></Route>
  <Route path='/blogs' element={<Blogs/>}></Route>
  <Route path='/aboutus' element={<AboutUs/>}></Route>
  <Route path='/contactus' element={<ContactUs/>}></Route>
  <Route path='/blogs/card1' element={<Card1/>}></Route>
  <Route path='/blogs/card2' element={<Card2/>}></Route>  
  <Route path='/blogs/card3' element={<Card3/>}></Route> 
  <Route path='/blogs/card4' element={<Card4/>}></Route> 
  <Route path='/blogs/card5' element={<Card5/>}></Route> 
  <Route path='/blogs/card6' element={<Card6/>}></Route> 

  </Routes>
  
  </BrowserRouter>
    
  
)
