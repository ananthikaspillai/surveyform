import React, { useState } from 'react';
import QuestionsPage from './QuestionsPage';
import ResponsesPage from './ResponsesPage';
import PreviewPage from './PreviewPage'; 
import CollectResponsePage from './CollectResponsePage'; 
import Header from "./Header"

import VisibilityIcon from '@mui/icons-material/Visibility';


const Home = () => {
  const [currentPage, setCurrentPage] = useState('questions');

  return (
    <div className='bg-gradient-to-br from-cyan-300 to-cyan-800 min-h-screen text-white '>
      <div className='px-8 pt-8 '>
        <Header/>
          <div className="bg-white p-4">
            <button className="text-green-700 hover:bg-gray-200  font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('questions')}>
              Questions
            </button>
            <button className="text-green-700 hover:bg-gray-200  font-bold py-2 px-6 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('responses')}>
              Responses
            </button>
            <div className="inline-flex items-center"> 
            <div className='text-black ml-[650px]'>
              <VisibilityIcon />
              </div>
              <button className="text-green-700 hover:bg-gray-200  font-bold py-2   rounded m-2 cursor-pointer" onClick={() => setCurrentPage('preview')}>
                Preview
              </button>
            </div>
            <button className="text-green-700 hover:bg-gray-200 font-bold py-2 px-4 rounded m-1 cursor-pointer" onClick={() => setCurrentPage('collect')}>
              Collect Response
            </button>
          </div>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white text-black">
            <div className="px-4 py-6 sm:px-0">
              {currentPage === 'questions' ? <QuestionsPage /> : 
               currentPage === 'responses' ? <ResponsesPage /> : 
               currentPage === 'preview' ? <PreviewPage /> : 
               <CollectResponsePage />}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;