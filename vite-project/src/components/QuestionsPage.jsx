
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionsPage = () => {

  const [showForm, setShowForm] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showChoice, setShowChoice] = useState(false);
  const [showText, setShowText] = useState(false);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '']);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [surveyId, setSurveyId] = useState(); // New state to keep track of the survey ID


  const handleChoiceClick = () => {
    setShowChoice(true);
    setShowText(false);
    setQuestion('');
    setOptions(['', '', '']);
  };

  const handleTextClick = () => {
    setShowText(true);
    setShowChoice(false);
    setQuestion('');
    setOptions(['', '', '']);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleSave = async () => {
    try {
      // Save title and description to the specified API
      const response = await axios.post('http://localhost:8081/surveys/create', {
        title,
        description,
      });

      console.log('Title and description saved successfully', response.data.id);

      // Extract survey ID from the response
      // const { id: newSurveyId } = response.data;

      // Set the survey ID in the state
      response.data.id && setSurveyId(response.data.id);
      console.log(surveyId, 'surveyid')
    } catch (error) {
      console.error('Failed to save title and description', error);
    }
  };

  const handleChoiceSubmit = async (surveyId) => {
    console.log(surveyId, 'id')
    console.log(question, 'question')
    console.log(options, 'option')
    try {
      const optionsObject = {};
      options.forEach((value, index) => {
        optionsObject[`option${index + 1}`] = value;
      });
      const questionData =
      {
        "question": question,
        "option": optionsObject,


      }
      const response = await axios.post(`http://localhost:8081/surveys/${surveyId}/questions`, questionData
      );

      console.log('Question and options saved successfully', response.data);
    } catch (error) {
      console.error('Failed to save question and options', error);
    }
  };

  return (
    <div className="px-10">
      <div>
        <h2
          className="mb-4 text-2xl font-bold text-center cursor-pointer "
          onClick={() => setShowForm(!showForm)}
        >
          Untitled Form
        </h2>
        {showForm && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2 mt-4"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        )}
        <div className="flex space-x-4">

          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
            Save
          </button>
          <button
            className="bg-teal-700 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline active:bg-teal-500 active:scale-100"
            type="button"
            onClick={() => setShowOptions(!showOptions)}
          >
            + Add New
          </button>
          {showOptions && (
            <>
              <button
                onClick={handleChoiceClick}
                className="text-gray-500 hover:bg-gray-200 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer"
              >
                Choice
              </button>
              <button
                onClick={handleTextClick}
                className="text-gray-500 hover:bg-gray-200 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer"
              >
                Text
              </button>
            </>
          )}
        </div>

        {showChoice && (
          <div className="mt-4">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Question"
            />
            {options.map((option, index) => (
              <div key={index} className="flex items-center mb-4">
                <input
                  type="radio"
                  id={`option${index}`}
                  name="option"
                  value={option}
                  className="mr-2"
                  disabled
                />
                <textarea
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder={`Option ${index + 1}`}
                />
              </div>
            ))}
            <button
              onClick={handleAddOption}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              + Add option
            </button>
            <button
              onClick={() => handleChoiceSubmit(surveyId)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
            >
              Save Question
            </button>
          </div>
        )}

        {showText && (
          <div className="mt-4">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Question"
            />
            <textarea
              value={options[0]}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[0] = e.target.value;
                setOptions(newOptions);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Option"
              disabled
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;





