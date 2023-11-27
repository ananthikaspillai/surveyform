
// import React, { useState } from 'react';
// import QuestionsPage from './QuestionsPage';
// import ResponsesPage from './ResponsesPage';
// import PreviewPage from './PreviewPage';
// import CollectResponsePage from './CollectResponsePage';
// import Header from "./Header"

// import VisibilityIcon from '@mui/icons-material/Visibility';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const [currentPage, setCurrentPage] = useState('questions');
//   const [surveys, setSurveys] = useState([]);

//   const navigate = useNavigate

//   const setLogout = () => {
//     localStorage.removeItem("LoginId")
//     window.location.reload(false);
//     navigate('/login')
//   }

//   return (
//     <div className=' '>
//       <div className=''>
//         <Header />
//         <div className="bg-white p-4">
//           <button
//             className="text-green-700 hover:bg-gray-200 font-bold py-2 px-4 rounded m-2 cursor-pointer"
//             onClick={() => setCurrentPage('questions')}
//           >
//             Questions
//           </button>
//           <button
//             className="text-green-700 hover:bg-gray-200 font-bold py-2 px-6 rounded m-2 cursor-pointer"
//             onClick={() => setCurrentPage('responses')}
//           >
//             Responses
//           </button>
//           <div className="inline-flex items-center">
//             <div className='text-black ml-[550px]'>
//               <VisibilityIcon />
//             </div>
//             <button
//               className="text-green-700 hover:bg-gray-200 font-bold py-2 rounded m-2 cursor-pointer mr-[0px]"
//               onClick={() => setCurrentPage('preview')}
//             >
//               Preview
//             </button>
//           </div>
//           <button
//             className="text-green-700 hover:bg-gray-200 font-bold py-2 px-4 rounded m-1 cursor-pointer"
//             onClick={() => setCurrentPage('collect')}
//           >
//             Collect Response
//           </button>
//           <button
//             className="text-red-800  hover:bg-red-200 font-bold py-2 px-4 rounded m-1 cursor-pointer"
//             onClick={() => setLogout()}
//           >
//             Logout
//           </button>
//         </div>
//         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white text-black">
//           <div className="px-4 py-6 sm:px-0">
//             {currentPage === 'questions' ? <QuestionsPage /> :
//               currentPage === 'responses' ? <ResponsesPage /> :
//                 currentPage === 'preview' ? <PreviewPage surveys={surveys} /> :
//                   <CollectResponsePage />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState } from 'react';
import QuestionsPage from './QuestionsPage';
import ResponsesPage from './ResponsesPage';
import PreviewPage from './PreviewPage';
import CollectResponsePage from './CollectResponsePage';
import Header from "./Header"
import background from "../assets/background_design.jpg"

import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [currentPage, setCurrentPage] = useState('questions');
  const [surveys, setSurveys] = useState([]);

  const navigate = useNavigate();

  const setLogout = () => {
    localStorage.removeItem("LoginId");
    window.location.reload(false);
    navigate('/login');

  }

  return (
    <div className='  '>
      
        <Header />
        <div className="bg-white  ">
          <button
            className="text-green-700 hover:bg-gray-200 font-bold py-2 px-4 rounded m-2 cursor-pointer"
            onClick={() => setCurrentPage('questions')}
          >
            Questions
          </button>
          <button
            className="text-green-700 hover:bg-gray-200 font-bold py-2 px-6 rounded m-2 cursor-pointer"
            onClick={() => setCurrentPage('responses')}
          >
            Responses
          </button>
          <div className="inline-flex items-center">
            <div className='text-black ml-[550px]'>
              <VisibilityIcon />
            </div>
            <button
              className="text-green-700 hover:bg-gray-200 font-bold py-2 rounded m-2 cursor-pointer mr-[0px]"
              onClick={() => setCurrentPage('preview')}
            >
              Preview
            </button>
          </div>
          <button
            className="text-green-700 hover:bg-gray-200 font-bold py-2 px-4 rounded m-1 cursor-pointer"
            onClick={() => setCurrentPage('collect')}
          >
            Collect Response
          </button>
          <button
            className="text-red-800  hover:bg-red-200 font-bold py-2 px-4 rounded m-1 cursor-pointer"
            onClick={() => setLogout()}
          >
            Logout
          </button>
        </div>
        <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', color: 'black' }} className="py-[70px]  text-black">
          <div className="px-4 py-6 sm:px-0">
            {currentPage === 'questions' ? <QuestionsPage /> :
              currentPage === 'responses' ? <ResponsesPage /> :
                currentPage === 'preview' ? <PreviewPage surveys={surveys} /> :
                  <CollectResponsePage />}
          </div>
        </div>
      </div>
  );
};

export default Home;
