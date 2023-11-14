
// import React, { useState } from 'react';
// import QuestionsPage from './components/QuestionsPage';
// import ResponsesPage from './components/ResponsesPage';
// import Header from "./components/Header"

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('questions');

//   return (
//     <div className='px-8'>
//       <Header/>
//       <div className="bg-gray-100 px-10 ">
//         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//           <div className="px-4 py-6 sm:px-0">
//             <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
//               <button className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('questions')}>
//                 Questions
//               </button>
//               <button className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('responses')}>
//                 Responses
//               </button>
//               {currentPage === 'questions' ? <QuestionsPage /> : <ResponsesPage />}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import QuestionsPage from './components/QuestionsPage';
// import ResponsesPage from './components/ResponsesPage';
// import Header from "./components/Header"

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('questions');

//   return (
//     <div className='px-8'>
//       <Header/>
//         <div className="bg-blue-300 p-4">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('questions')}>
//             Questions
//           </button>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('responses')}>
//             Responses
//           </button>
//         </div>
//         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white">
//           <div className="px-4 py-6 sm:px-0">
//             {currentPage === 'questions' ? <QuestionsPage /> : <ResponsesPage />}
//           </div>
//         </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import QuestionsPage from './components/QuestionsPage';
import ResponsesPage from './components/ResponsesPage';
import Header from "./components/Header"

const App = () => {
  const [currentPage, setCurrentPage] = useState('questions');

  return (
    <div className='bg-gradient-to-br from-cyan-300 to-cyan-800 min-h-screen text-white '> {/* Add a dark background color */}
      <div className='px-8 pt-8 '>
        <Header/>
          <div className="bg-white p-4">
            <button className="  text-gray-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('questions')}>
              Questions
            </button>
            <button className=" text-gray-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('responses')}>
              Responses
            </button>
          </div>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white text-black"> {/* Change text color to black */}
            <div className="px-4 py-6 sm:px-0">
              {currentPage === 'questions' ? <QuestionsPage /> : <ResponsesPage />}
            </div>
          </div>
      </div>
    </div>
  );
};

export default App;
