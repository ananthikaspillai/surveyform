
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionsPage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '']);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [surveyId, setSurveyId] = useState();
  const [savedQuestions, setSavedQuestions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  }

  const handleSave = async () => {
    try {
      const response = await axios.post('http://localhost:8081/surveys/create', {
        title,
        description,
      });

      console.log('Title and description saved successfully', response.data.id);
      localStorage.setItem('surveyid', response.data.id);
      response.data.id && setSurveyId(response.data.id);
      console.log(surveyId, 'surveyid');
    } catch (error) {
      console.error('Failed to save title and description', error);
    }
  };

  const handleQuestionSubmit = async () => {
    try {
      const optionsObject = {};
      options.forEach((value, index) => {
        optionsObject[`option${index + 1}`] = value;
      });
      setQuestion("");
      setOptions(['', '', '']);
      const questionData = {
        question: question,
        option: optionsObject,
      };
      await axios.post(`http://localhost:8081/surveys/${surveyId}/questions`, questionData);

      const response = await axios.get(`http://localhost:8081/surveys/${surveyId}/questions`);
      setSavedQuestions(response.data);

      console.log('Question and options saved successfully', response.data);
    } catch (error) {
      console.error('Failed to save question and options', error);
    }
  };

  useEffect(() => {
    const fetchExistingQuestions = async () => {
      try {
        if (surveyId) {
          const response = await axios.get(`http://localhost:8081/surveys/${surveyId}/questions`);
          setSavedQuestions(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch existing questions', error);
      }
    };

    fetchExistingQuestions();
  }, [surveyId]);

  return (
    <div className=" bg-white px-[40px] py-[80px] ml-[220px] mr-[220px] ">
      <button
           onClick={handleButtonClick}
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
         >
           Untitled
           </button>

      {/* <div className="mb-2">
        <label
          className="block text-gray-700  ml-[450px] text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <textarea
          className="shadow appearance-none border ml-[300px] rounded w-[400px]  py-1 px-2 text-gray-800 leading-tight "
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label
          className="block text-gray-700 ml-[450px] text-sm font-bold mb-2 mt-4"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="shadow appearance-none border ml-[300px]  rounded w-[400px] py-1 px-2 text-gray-800 leading-tight"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div> */}
       
       {showForm && (
        <div className="mt-4">
          <textarea
            className="shadow appearance-none border rounded w-[600px] py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            className="shadow appearance-none border rounded w-[600px] py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
      )}
  
      <div>
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-700 text-white mt-[50px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
        >
          Save
        </button>
        <button
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
          type="button"
          onClick={() => setShowOptions(!showOptions)}
        >
          + Add New
        </button>
        {showOptions && (
          <div className="mt-4">
            <textarea
              className="shadow appearance-none border rounded w-[600px] py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
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
                  className="shadow appearance-none border rounded w-[300px] py-1 px-2 text-gray-700 leading-tight"
                  placeholder={`Option ${index + 1}`}
                />
              </div>
            ))}
            <button
              onClick={() => handleQuestionSubmit()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
            >
              Save Question
            </button>
          </div>
        )}
       {savedQuestions.length > 0 && (
        <div className="mt-4">
          <h3 className="text-2xl  mt-[30px] font-bold text-green-700">Saved Questions</h3>
          {savedQuestions.map((savedQuestion, index) => (
            <div key={index} className="mt-2">
            <p><strong className=" ml-[40px]">Question:</strong></p><textarea
                className="shadow border rounded w-[600px] ml-2   mb-2 py-1 px-2 mt-[10px] text-gray-700 leading-tight"
                value={savedQuestion.question}
                readOnly
              />
              <br />
              <p><input  className="mt-[20px] ml-[30px]" type="radio" disabled /> <strong className="ml-[5px]">Option1:</strong></p>
              <textarea
                className="shadow border rounded ml-2 w-[300px]  mb-2 py-1 px-2 mt-[10px] text-gray-700 leading-tight"
                value={savedQuestion.option[0].option1}
                readOnly
              />
              <br />
              <p><input  className="mt-[20px] ml-[30px]" type="radio" disabled /><strong className="ml-[5px]">Option2:</strong></p>
              <textarea
                className="shadow border rounded  ml-2 w-[300px]  mb-2 py-1 px-2 text-gray-700  mt-[10px] leading-tight"
                value={savedQuestion.option[0].option2}
                readOnly
              />
              <br />
             <p> <input className="mt-[20px] ml-[30px]" type="radio" disabled /><strong className="ml-[5px]">Option3:</strong></p>
              <textarea
                className="shadow border rounded  ml-2 w-[300px]  mb-2 py-1 px-2 mt-[10px]  text-gray-700 leading-tight"
                value={savedQuestion.option[0].option3}
                readOnly
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;


