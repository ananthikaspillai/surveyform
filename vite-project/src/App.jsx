
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Login } from "./components/Login";
// import { Signup } from "./components/Signup";
// import Home from "./components/Home";
// import PreviewPage from './components/PreviewPage';
// import Link from './components/Link';

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
 
//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }
//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   }
//   const newLoginId = localStorage.getItem('LoginId')

//   useEffect(() => {
//     if (newLoginId) {
//       setIsLoggedIn(true)
//     }
//     else {
//       setIsLoggedIn(false)
//     }
//   }, [newLoginId])

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/preview" element={<PreviewPage />} />
//           <Route path="/link" element={<Link />} />
//           <Route path="/" element={
//             isLoggedIn ? (
//               <Home />
//             ) : (
//               currentForm === "login" ? (
//                 <Login onFormSwitch={toggleForm} onLoginSuccess={handleLoginSuccess} />
//               ) : (
//                 <Signup onFormSwitch={toggleForm} />
//               )
//             )
//           } />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// export default App;




// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Login } from "./components/Login";
// import { Signup } from "./components/Signup";
// import Home from "./components/Home";
// import PreviewPage from './components/PreviewPage';
// import Link from './components/Link';
// import { Form } from './components/Form';

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
 
//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }
//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   }
//   const newLoginId = localStorage.getItem('LoginId')

//   useEffect(() => {
//     if (newLoginId) {
//       setIsLoggedIn(true)
//     }
//     else {
//       setIsLoggedIn(false)
//     }
//   }, [newLoginId])

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/preview" element={<PreviewPage />} />
//           <Route path="/link" element={<Link />} />
//           <Route path="/form" element={<Form />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/" element={
//             isLoggedIn ? (
//               <Form />
//             ) : (
//               currentForm === "login" ? (
//                 <Login onFormSwitch={toggleForm} onLoginSuccess={handleLoginSuccess} />
//               ) : (
//                 <Signup onFormSwitch={toggleForm} />
//               )
//             )
//               } />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import Home from "./components/Home";
import PreviewPage from './components/PreviewPage';
import Link from './components/Link';
import { Form } from './components/Form';
import QuestionsPage from './components/QuestionsPage';  // Import QuestionsPage component
import store from "./redux/store";
import { Provider } from 'react-redux';
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  }

  const newLoginId = localStorage.getItem('LoginId')

  useEffect(() => {
    if (newLoginId) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [newLoginId])

  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/link" element={<Link />} />
          <Route path="/form" element={<Form />} />
          <Route path="/home" element={<Home />} />
          <Route path="/questions-page" element={<QuestionsPage />} />  
          <Route path="/" element={
            isLoggedIn ? (
              <Form />
            ) : (
              currentForm === "login" ? (
                <Login onFormSwitch={toggleForm} onLoginSuccess={handleLoginSuccess} />
              ) : (
                <Signup onFormSwitch={toggleForm} />
              )
            )
          } />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;

// // src/App.js
// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// // import { toggleForm, loginSuccess } from "./redux/authSlice";
// import Login  from "./components/Login";
// import { Signup } from "./components/Signup";
// import Home from "./components/Home";
// import PreviewPage from "./components/PreviewPage";
// import Link from "./components/Link";
// import { Form } from "./components/Form";
// import QuestionsPage from "./components/QuestionsPage";

// function App() {
//   const dispatch = useDispatch();
//   const { currentForm, isLoggedIn } = useSelector((state) => state.auth);

//   const handleLoginSuccess = () => {
//     dispatch(loginSuccess());
//   };

//   const newLoginId = localStorage.getItem("LoginId");

//   useEffect(() => {
//     if (newLoginId) {
//       dispatch(loginSuccess());
//     }
//   }, [dispatch, newLoginId]);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//         <Route path="/preview" element={<PreviewPage />} />
//         <Route path="/link" element={<Link />} />
//            <Route path="/form" element={<Form />} />
//            <Route path="/home" element={<Home />} />
//           <Route path="/questions-page" element={<QuestionsPage />} />
//           <Route
//             path="/"
//             element={
//               isLoggedIn ? (
//                 <Form />
//               ) : (
//                 currentForm === "login" ? (
//                   <Login
//                     onFormSwitch={(form) => dispatch(toggleForm(form))}
//                     onLoginSuccess={handleLoginSuccess}
//                   />
//                 ) : (
//                   <Signup onFormSwitch={(form) => dispatch(toggleForm(form))} />
//                 )
//               )
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
