

import React, { useState } from 'react';
import QuestionsPage from './components/QuestionsPage';
import ResponsesPage from './components/ResponsesPage';
import Header from "./components/Header"

const App = () => {
  const [currentPage, setCurrentPage] = useState('questions');

  return (
    <div>
      <Header/>
    <div className="bg-gray-100">
      <button className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('questions')}>
        Questions
      </button>
      <button className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer" onClick={() => setCurrentPage('responses')}>
        Responses
      </button>
      {currentPage === 'questions' ? <QuestionsPage /> : <ResponsesPage />}
    </div>
    </div>
  );
};

export default App;
