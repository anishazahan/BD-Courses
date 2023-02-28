import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AllContext from "./Context-Api/AllContext"
// import AuthProvider from './Authentication/AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <AuthProvider> */}
   <AllContext>
        <App/>
    </AllContext>
   {/* </AuthProvider> */}
  </React.StrictMode>
);


reportWebVitals();
