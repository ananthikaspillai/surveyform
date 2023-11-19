
// import React, { useState } from 'react';
// import QuestionsPage from './components/QuestionsPage';
// import ResponsesPage from './components/ResponsesPage';
// import PreviewPage from './components/PreviewPage'; 
// import CollectResponsePage from './components/CollectResponsePage'; 
// import Header from "./components/Header"

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('questions');

//   return (
//     <div className='bg-gradient-to-br from-cyan-300 to-cyan-800 min-h-screen text-white '>
//       <div className='px-8 pt-8 '>
//         <Header/>
//           <div className="bg-white p-4">
//             <button className="text-green-700 hover:bg-gray-200  font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('questions')}>
//               Questions
//             </button>
//             <button className="text-green-700 hover:bg-gray-200  font-bold py-2 px-6 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('responses')}>
//               Responses
//             </button>
//             <button className="text-green-700 hover:bg-gray-200  font-bold py-2 ml-[650px]  rounded m-2 cursor-pointer" onClick={() => setCurrentPage('preview')}>
//               Preview
//             </button>
//             <button className="text-green-700 hover:bg-gray-200 font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('collect')}>
//               Collect Response
//             </button>
//           </div>
//           <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white text-black"> {/* Change text color to black */}
//             <div className="px-4 py-6 sm:px-0">
//               {currentPage === 'questions' ? <QuestionsPage /> : 
//                currentPage === 'responses' ? <ResponsesPage /> : 
//                currentPage === 'preview' ? <PreviewPage /> : 
//                <CollectResponsePage />}
//             </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import QuestionsPage from './components/QuestionsPage';
// import ResponsesPage from './components/ResponsesPage';
// import PreviewPage from './components/PreviewPage'; 
// import CollectResponsePage from './components/CollectResponsePage'; 
// import Header from "./components/Header"
// import LoginPage from './components/LoginPage';
// import VisibilityIcon from '@mui/icons-material/Visibility';


// const App = () => {
//   const [currentPage, setCurrentPage] = useState('questions');

//   return (
//     <div className='bg-gradient-to-br from-cyan-300 to-cyan-800 min-h-screen text-white '>
//       <div className='px-8 pt-8 '>
//         <Header/>
//           <div className="bg-white p-4">
//             <button className="text-green-700 hover:bg-gray-200  font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('questions')}>
//               Questions
//             </button>
//             <button className="text-green-700 hover:bg-gray-200  font-bold py-2 px-6 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('responses')}>
//               Responses
//             </button>
//             <div className="inline-flex items-center"> 
//             <div className='text-black ml-[650px]'>
//               <VisibilityIcon />
//               </div>
//               <button className="text-green-700 hover:bg-gray-200  font-bold py-2   rounded m-2 cursor-pointer" onClick={() => setCurrentPage('preview')}>
//                 Preview
//               </button>
//             </div>
//             <button className="text-green-700 hover:bg-gray-200 font-bold py-2 px-4 rounded m-1 cursor-pointer" onClick={() => setCurrentPage('collect')}>
//               Collect Response
//             </button>
//           </div>
//           <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white text-black">
//             <div className="px-4 py-6 sm:px-0">
//               {currentPage === 'questions' ? <QuestionsPage /> : 
//                currentPage === 'responses' ? <ResponsesPage /> : 
//                currentPage === 'preview' ? <PreviewPage /> : 
//                <CollectResponsePage />}
//             </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default App;





// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import React, { useState } from 'react';
// import QuestionsPage from './components/QuestionsPage';
// import ResponsesPage from './components/ResponsesPage';
// import PreviewPage from './components/PreviewPage'; 
// import CollectResponsePage from './components/CollectResponsePage'; 
// import Header from "./components/Header"
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import LoginPage from './components/LoginPage'; // Import LoginPage


// const App = () => {
//   // ...

//   return (
//     <Router>
//       <div className='bg-gradient-to-br from-cyan-300 to-cyan-800 min-h-screen text-white '>
//         <div className='px-8 pt-8 '>
//           <Header/>
//           <Routes>
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/" element={
//               <>
//                 <div className="bg-white p-4">
//                   <button className="text-green-700 hover:bg-gray-200  font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('questions')}>
//                     Questions
//                   </button>
//                   <button className="text-green-700 hover:bg-gray-200  font-bold py-2 px-6 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('responses')}>
//                     Responses
//                   </button>
//                   <div className="inline-flex items-center"> 
//                   <div className='text-black ml-[650px]'>
//                     <VisibilityIcon />
//                     </div>
//                     <button className="text-green-700 hover:bg-gray-200  font-bold py-2   rounded m-2 cursor-pointer" onClick={() => setCurrentPage('preview')}>
//                       Preview
//                     </button>
//                   </div>
//                   <button className="text-green-700 hover:bg-gray-200 font-bold py-2 px-4 rounded m-1 cursor-pointer" onClick={() => setCurrentPage('collect')}>
//                     Collect Response
//                   </button>
//                 </div>
//                 <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white text-black">
//                   <div className="px-4 py-6 sm:px-0">
//                     {currentPage === 'questions' ? <QuestionsPage /> : 
//                      currentPage === 'responses' ? <ResponsesPage /> : 
//                      currentPage === 'preview' ? <PreviewPage /> : 
//                      <CollectResponsePage />}
//                   </div>
//                 </div>
//               </>
//             } />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;




// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import QuestionsPage from './components/QuestionsPage';
// import ResponsesPage from './components/ResponsesPage';
// import PreviewPage from './components/PreviewPage'; 
// import CollectResponsePage from './components/CollectResponsePage'; 
// import Header from "./components/Header"
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import React, { useState } from 'react';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('questions');

//   return (
//     <Router>
//       <div className='bg-gradient-to-br from-cyan-300 to-cyan-800 min-h-screen text-white '>
//         <div className='px-8 pt-8 '>
//           <Header/>
//           <Routes>
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/" element={
//               <>
//                 <div className="bg-white p-4">
//                   <button className="text-green-700 hover:bg-gray-200  font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('questions')}>
//                     Questions
//                   </button>
//                   <button className="text-green-700 hover:bg-gray-200  font-bold py-2 px-6 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('responses')}>
//                     Responses
//                   </button>
//                   <div className="inline-flex items-center"> 
//                   <div className='text-black ml-[650px]'>
//                     <VisibilityIcon />
//                     </div>
//                     <button className="text-green-700 hover:bg-gray-200  font-bold py-2   rounded m-2 cursor-pointer" onClick={() => setCurrentPage('preview')}>
//                       Preview
//                     </button>
//                   </div>
//                   <button className="text-green-700 hover:bg-gray-200 font-bold py-2 px-4 rounded m-1 cursor-pointer" onClick={() => setCurrentPage('collect')}>
//                     Collect Response
//                   </button>
//                 </div>
//                 <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white text-black">
//                   <div className="px-4 py-6 sm:px-0">
//                     {currentPage === 'questions' ? <QuestionsPage /> : 
//                      currentPage === 'responses' ? <ResponsesPage /> : 
//                      currentPage === 'preview' ? <PreviewPage /> : 
//                      <CollectResponsePage />}
//                   </div>
//                 </div>
//               </>
//             } />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import QuestionsPage from './components/QuestionsPage';
// import ResponsesPage from './components/ResponsesPage';
// import PreviewPage from './components/PreviewPage'; 
// import CollectResponsePage from './components/CollectResponsePage'; 
// import Header from "./components/Header"
// // import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
// // import Login from './components/Login';

// import VisibilityIcon from '@mui/icons-material/Visibility';


// const App = () => {
//   const [currentPage, setCurrentPage] = useState('questions');

//   return (
//     // <Router>
//     //   <Routes>
//     //     <Route path='/' element={ <Login/>} />
//     <div className='bg-gradient-to-br from-cyan-300 to-cyan-800 min-h-screen text-white '>
//       <div className='px-8 pt-8 '>
//         <Header/>
//           <div className="bg-white p-4">
//             <button className="text-green-700 hover:bg-gray-200  font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('questions')}>
//               Questions
//             </button>
//             <button className="text-green-700 hover:bg-gray-200  font-bold py-2 px-6 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('responses')}>
//               Responses
//             </button>
//             <div className="inline-flex items-center"> 
//             <div className='text-black ml-[650px]'>
//               <VisibilityIcon />
//               </div>
//               <button className="text-green-700 hover:bg-gray-200  font-bold py-2   rounded m-2 cursor-pointer" onClick={() => setCurrentPage('preview')}>
//                 Preview
//               </button>
//             </div>
//             <button className="text-green-700 hover:bg-gray-200 font-bold py-2 px-4 rounded m-1 cursor-pointer" onClick={() => setCurrentPage('collect')}>
//               Collect Response
//             </button>
//           </div>
//           <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white text-black">
//             <div className="px-4 py-6 sm:px-0">
//               {currentPage === 'questions' ? <QuestionsPage /> : 
//                currentPage === 'responses' ? <ResponsesPage /> : 
//                currentPage === 'preview' ? <PreviewPage /> : 
//                <CollectResponsePage />}
//             </div>
//           </div>
//       </div>
//     </div>
//     // </Routes>
//     // </Router>
//   );
// };

// export default App;


// import React from 'react'
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
// import Login from './components/Login'
// import Home from './components/Home'
// import Signup from './components/Signup'

// function App() {
//   return (
//     <div>
//      <Router>
//       <Routes>
//         <Route path='/' element={ <Login />} />
//         <Route path='/signup' element= {<Signup />} />
//         <Route path='/home' element={<Home />} />
//          </Routes>
//      </Router>
//     </div>
//   )
// }

// export default App


import React, { useState } from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import Home from "./components/Home";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <Home/>
      ) : (
        currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Signup onFormSwitch={toggleForm} />
        )
      )}
    </div>
  );
}

export default App;



