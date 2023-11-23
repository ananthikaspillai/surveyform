
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import Home from "./components/Home";
import PreviewPage from './components/PreviewPage';
import Link from './components/Link';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [loginId, setLoginId] = useState(null)

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
    }
    else {
      setIsLoggedIn(false)
    }
  }, [newLoginId])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/link" element={<Link />} />
          <Route path="/" element={
            isLoggedIn ? (
              <Home />
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
  );
}
export default App;









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
//           {isLoggedIn ? (
//             <Route path="/" element={<Home />} />
//           ) : (
//             currentForm === "login" ? (
//               <Route path="/" element={<Login onFormSwitch={toggleForm} onLoginSuccess={handleLoginSuccess} />} />
//             ) : (
//               <Route path="/" element={<Signup onFormSwitch={toggleForm} />} />
//             )
//           )}
//           <Route path="/preview" element={<PreviewPage />} />
//           <Route path="/link" element={<Link />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
