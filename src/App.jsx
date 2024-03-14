import React from 'react'
import UserDetail from './pages/UserDetail'
import ToastifySample from './pages/ToastifySample'
import 'react-toastify/dist/ReactToastify.css';
import { Link, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Parent from './pages/Parent';
import UseRefSample from './pages/UseRefSample';

function App() {
  
  return (<>

    <ul>
      <li><Link to='/user-detail'>User Detail</Link>  </li>
      <li><Link to='/toastify-sample'>Toastify Sample</Link>  </li>
      <li><Link to='/products'>Products</Link>  </li>
      <li><Link to='/memorize'>Memorize</Link>  </li>
      <li><Link to='/ref'>UseRefSample</Link>  </li>
    </ul>

    <Routes>
      <Route path="/user-detail" element={<UserDetail name='yakintech' />} />
      <Route path="/toastify-sample" element={<ToastifySample />} />
      <Route path='/products' element={<Products />} />
      <Route path='/memorize' element={<Parent/>} />
      <Route path='/ref' element={<UseRefSample/>} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  </>
  )
}

export default App