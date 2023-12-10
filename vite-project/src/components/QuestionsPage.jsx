
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import TitleComponent from './TitleComponent';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import TitleIcon from '@mui/icons-material/Title';
import DeleteIcon from '@mui/icons-material/Delete';
import { current } from '@reduxjs/toolkit';

const QuestionsPage = ({ currentQuestions, currentTitle }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '']);
  const [title, setTitle] = useState('Untitled Form');
  const [description, setDescription] = useState('');
  const [surveyId, setSurveyId] = useState();
  const [savedQuestions, setSavedQuestions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [questionType, setQuestionType] = useState('');
  const [showChoice, setShowChoice] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [answer, setAnswer] = useState('');
  const [showChoiceButton, setShowChoiceButton] = useState(false);
  const [showTextButton, setShowTextButton] = useState(false);

  const modalRef = useRef(null);

  console.log("All Questions", currentQuestions);

  useEffect(() => {
    if (currentQuestions) {
      setSavedQuestions(currentQuestions)
    }
    if (currentTitle) {
      setTitle(currentTitle)
    }
  }, [currentQuestions, currentTitle])

  const handleButtonClick = async () => {
    setShowChoiceButton(true);
    setShowTextButton(true);
    setShowOptions(!showOptions);
  };

  const saveTitleAndDescription = async () => {
    const storedTitle = localStorage.getItem('title');
    const storedDescription = localStorage.getItem('description');

    try {
      const response = await axios.post('http://localhost:8081/surveys/create', {
        title: storedTitle,
        description: storedDescription,
      });

      console.log('Title and description saved successfully', response.data.id);
      localStorage.setItem('surveyid', response.data.id);
      setSurveyId(response.data.id);
      console.log(response.data.id, 'surveyid');
    } catch (error) {
      console.error('Failed to save title and description', error);
    }
  };

  useEffect(() => {
    const storedTitle = localStorage.getItem('title');
    const storedDescription = localStorage.getItem('description');

    if (storedTitle) {
      setTitle(storedTitle);
    }

    if (storedDescription) {
      setDescription(storedDescription);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('title', title);
    localStorage.setItem('description', description);
  }, [title, description]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowForm(false);
        saveTitleAndDescription();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/surveys/${surveyId}/questions`);
        if (response) {
          setSavedQuestions(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch saved questions', error.response);
      }
    };

    const storedSurveyId = localStorage.getItem('surveyid');

    if (storedSurveyId) {
      setSurveyId(storedSurveyId);
    }

    fetchData(); // Fetch saved questions on component mount

  }, [surveyId]); // Trigger the effect when surveyId changes

  const handleQuestionTypeChange = (type) => {
    setQuestionType(type);
    setShowOptions(true);
  };

  const handleChoiceQuestionChange = async () => {
    try {
      const optionsObject = {};
      options.forEach((value, index) => {
        optionsObject[`option${index + 1}`] = value;
      });

      const questionData = {
        question,
        option: optionsObject,
      };

      console.log("Test 1", optionsObject);
      console.log("Test 2", questionData);

      if (questionData?.question && questionData?.option.option1 && questionData?.option.option2 && questionData?.option.option3) {

        await axios.post(`http://localhost:8081/surveys/${surveyId}/questions`, questionData);
        const response = await axios.get(`http://localhost:8081/surveys/${surveyId}/questions`);
        if (response) {
          setQuestion("")
          setOptions(["", "", ""]);
          setSavedQuestions(response.data);
          setQuestionType('');
          setShowOptions(false);
        }

        console.log('Question and options saved successfully', response.data);
      }

    } catch (error) {
      console.error('Failed to save question and options', error);
    }
  };

  const handleTextQuestionChange = async () => {
    console.log("textquestion");
    try {
      const questionData = {
        question,
      };

      if (questionData.question && questionData.question !== "") {
        await axios.post(`http://localhost:8081/surveys/${surveyId}/create/question`, questionData);
        const response = await axios.get(`http://localhost:8081/surveys/${surveyId}/questions`);
        if (response) {
          setQuestion(" ")
          setSavedQuestions(response.data);
          setQuestionType('');
          setShowOptions(false);
        }

        console.log('Text question saved successfully', response.data);
      }

    } catch (error) {
      console.error('Failed to save text question', error);
    }
  };

  const handleDeleteQuestion = async (questionId) => {
    try {
      await axios.delete(`http://localhost:8081/surveys/questions/${questionId}`);
      const updatedQuestions = savedQuestions.filter((question) => question.id !== questionId);
      setSavedQuestions(updatedQuestions);
      console.log(`Question ${questionId} deleted successfully`);
    } catch (error) {
      console.error(`Failed to delete question ${questionId}`, error);
    }
  };

  console.log(savedQuestions, 'questionssaved');

  return (
    <div className="bg-white px-[40px] py-[100px]  ml-[180px] mr-[300px]">
      {showForm ? (
        <div className="mt-2 bg-slate-100  " ref={modalRef}>
          <TitleComponent title={title || currentTitle} setTitle={setTitle} description={description} setDescription={setDescription} />
        </div>
      ) : (
        <div onClick={() => { setShowForm(true) }} className="text-black  text-4xl py-2 px-4 mt-[30px] ">
          <div className="cursor-pointer">{title}</div>
          <div>{description}</div>
        </div>
      )}
  
<div>
  <ul className="bg-slate-100 mt-[50px]">
    {savedQuestions &&
      savedQuestions.map((res, index) => {
        return (
          <li key={index}>
            <button className="text-gray-500 ml-[630px] mt-[30px]" onClick={() => handleDeleteQuestion(res.id)}><DeleteIcon/></button>
            <div>
              <textarea
                defaultValue={res.question}
                className="shadow appearance-none w-[600px] px-2 mb-4 mt-[20px] ml-[50px] border-b-2 focus:outline-none focus:border-green-700 "
              />
            </div>
            {res.option.length > 0 && (
              <>
                <div className="flex">
                  <input
                    type="radio"
                    value={res.option[0].option1}
                    disabled
                    className="ml-2"
                  />
                  <textarea
                    defaultValue={res.option[0].option1}
                    className="shadow appearance-none w-[200px] px-2 mb-4 mt-[20px] ml-[50px] border-b-2 focus:outline-none focus:border-green-700 "
                  />
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    value={res.option[0].option2}
                    disabled
                    className="ml-2"
                  />
                  <textarea
                    defaultValue={res.option[0].option2}
                    className="shadow appearance-none w-[200px] px-2 mb-4 mt-[20px] ml-[50px] border-b-2 focus:outline-none focus:border-green-700 "
                  />
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    value={res.option[0].option3}
                    disabled
                    className="ml-2"
                  />
                  <textarea
                    defaultValue={res.option[0].option3}
                    className="shadow appearance-none w-[200px] px-2 mb-4 mt-[20px] ml-[50px] border-b-2 focus:outline-none focus:border-green-700 "
                  />
                </div>
              </>
            )}
            
            <div>
              <input type="checkbox" className="ml-2" />
              <label className="ml-2">Make this question required</label>
            </div>
          </li>
        );
      })}
  </ul>
</div>


      <div onClick={showChoice ? handleChoiceQuestionChange : handleTextQuestionChange}>
        {showOptions && (
          <div className="mt-4">
            {showText && (
              <>
                <textarea
                  className="shadow appearance-none border rounded w-[600px] py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Question"
                />
                {showAnswers && (
                  <textarea
                    className="shadow appearance-none border rounded w-[600px] py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder=" Answer"
                  />
                )}
              </>
            )}
            {showChoice && questionType === 'choice' && (
              <>
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
              </>
            )}
          </div>
        )}
        <div>
          <button
            className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4  mt-[60px] rounded "
            type="button"
            onClick={handleButtonClick}
          >
            + Add New
          </button>
          {showChoiceButton && (
            <button
              onClick={() => {
                handleQuestionTypeChange('choice');
                setShowChoice(true);
                setShowText(true);
                setShowAnswers(false);
              }}
              className={`${questionType === 'choice'
                ? 'bg-white py-1    rounded ml-[20px]'
                : 'bg-white  py-1 pt-0  border-teal-700 border-4 rounded'
                }  text-black px-[16px] py-[2px] `}
            >
              <RadioButtonCheckedIcon className="inline-block mr-2" />
              Choice
            </button>
          )}
          {showTextButton && (
            <button
              onClick={() => {
                handleQuestionTypeChange('text');
                setShowText(true);
                setShowChoice(false);
                setShowAnswers(true);
              }}
              className={`${questionType === 'text' ? 'bg-blue-500' : 'bg-white   border-teal-700 border-4 rounded '
                } hover:text-white   text-slate-600 px-[17px] py-[1px]  ml-[2px]`}
            >
              <TitleIcon className="inline-block mr-2" />
              Text
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default QuestionsPage;



