import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ContextShare from './ContextSareApi/ContextShare'
import TokenAuth from './ContextSareApi/TokenAuth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
<ContextShare>
  <TokenAuth>
    
        <BrowserRouter>
          <App />
        </BrowserRouter>
  </TokenAuth>
</ContextShare>

  </React.StrictMode>

)