// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { ResponseProvider } from './ResponseContext';


// ReactDOM.render(
//   <React.StrictMode>
//     <ResponseProvider>
//     <App />
//     </ResponseProvider>
//   </React.StrictMode>,
//     document.getElementById('root')

import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css'

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);
