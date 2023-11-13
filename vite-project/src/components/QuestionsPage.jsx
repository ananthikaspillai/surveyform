
import React, { useState } from 'react';

const QuestionsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showChoice, setShowChoice] = useState(false);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleChoiceClick = () => {
    setShowChoice(true);
    setQuestion('');
    setOptions(['', '']);
  };

  const handleAddOption = () => {
    setOptions([...options, '']); // Add a new option when "+ Add option" button is clicked
  };

  return (
    <div>
       <h2 className="mb-4 text-2xl font-bold text-center cursor-pointer" onClick={() => setShowForm(!showForm)}>
        Untitled Form
      </h2>
      {showForm && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" />
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="description">
            Description
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" />
        </div>
      )}
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => setShowOptions(!showOptions)}>
        + Add New
      </button>
      {showOptions && (
        <div className="mt-4">
          <button onClick={handleChoiceClick} className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer">
            Choice
          </button>
          <button className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer">
            Text
          </button>
          <button className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer">
            Rating
          </button>
          <button className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer">
            Date
          </button>
          {showChoice && (
            <div>
              <textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
              {options.map((option, index) => (
                <div key={index}>
                  <input type="radio" id={`option${index}`} name="option" value={option} />
                  <label htmlFor={`option${index}`}>
                    <textarea value={option} onChange={(e) => {
                      const newOptions = [...options];
                      newOptions[index] = e.target.value;
                      setOptions(newOptions);
                    }} placeholder={`Option ${index + 1}`} />
                  </label>
                </div>
              ))}
              <button onClick={handleAddOption} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                + Add option
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionsPage;
