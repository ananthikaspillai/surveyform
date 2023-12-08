
// import React, { useRef, useState, useEffect } from 'react';
// import axios from 'axios';
// import TitleComponent from './TitleComponent';
// import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
// import TitleIcon from '@mui/icons-material/Title';

// const QuestionsPage = () => {
//   const [showOptions, setShowOptions] = useState(false);
//   const [question, setQuestion] = useState('');
//   const [options, setOptions] = useState(['', '', '']);
//   const [title, setTitle] = useState('Untitled Form');
//   const [description, setDescription] = useState('');
//   const [surveyId, setSurveyId] = useState();
//   const [savedQuestions, setSavedQuestions] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [questionType, setQuestionType] = useState('');
//   const [showChoice, setShowChoice] = useState(false);
//   const [showText, setShowText] = useState(false);
//   const [showAnswers, setShowAnswers] = useState(false);
//   const [answer, setAnswer] = useState('');
//   const [showChoiceButton, setShowChoiceButton] = useState(false);
//   const [showTextButton, setShowTextButton] = useState(false);

//   const modalRef = useRef(null);
//   // const divRef = useRef(null);

//   const handleButtonClick = async () => {

//     setShowChoiceButton(true);
//     setShowTextButton(true);
//     setShowOptions(!showOptions)
//     //   if (showChoiceButton && questionType === 'choice') {
//     //    handleChoiceQuestionChange();
//     //  } else if (showTextButton && questionType === 'text') {
//     //    handleTextQuestionChange();
//     //  }
//   };

//   const saveTitleAndDescription = async () => {
//     const storedTitle = localStorage.getItem('title');
//     const storedDescription = localStorage.getItem('description');

//     try {
//       const response = await axios.post('http://localhost:8081/surveys/create', {
//         title: storedTitle,
//         description: storedDescription,
//       });

//       console.log('Title and description saved successfully', response.data.id);
//       localStorage.setItem('surveyid', response.data.id);
//       setSurveyId(response.data.id);
//       console.log(response.data.id, 'surveyid');
//     } catch (error) {
//       console.error('Failed to save title and description', error);
//     }
//   };

//   useEffect(() => {
//     const storedTitle = localStorage.getItem('title');
//     const storedDescription = localStorage.getItem('description');

//     if (storedTitle) {
//       setTitle(storedTitle);
//     }

//     if (storedDescription) {
//       setDescription(storedDescription);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('title', title);
//     localStorage.setItem('description', description);
//   }, [title, description]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         setShowForm(false);
//         saveTitleAndDescription();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [modalRef]);

//   // useEffect(() => {
//   //   const handleClickOutside = (event) => {
//   //     if (divRef.current && !divRef.current.contains(event.target)) {
//   //       handleQuestionSubmit();
//   //     }
//   //   };

//   //   document.addEventListener('mousedown', handleClickOutside);
//   //   return () => {
//   //     document.removeEventListener('mousedown', handleClickOutside);
//   //   };
//   // }, [divRef]);

//   const handleQuestionTypeChange = (type) => {
//     setQuestionType(type);
//     setShowOptions(true);
//   };

//   // useEffect(() => {
//   const handleChoiceQuestionChange = async () => {
//     try {
//       const optionsObject = {};
//       options.forEach((value, index) => {
//         optionsObject[`option${index + 1}`] = value;
//       });

//       const questionData = {
//         question,
//         option: optionsObject,
//       };

//       console.log("Test 1", optionsObject);
//       console.log("Test 2", questionData);
//       // console.log("Test 3", );
//       // console.log("Test 4", );


//       if (questionData?.question && questionData?.option.option1 && questionData?.option.option2 && questionData?.option.option3) {

//         await axios.post(`http://localhost:8081/surveys/${surveyId}/questions`, questionData);
//         const response = await axios.get(`http://localhost:8081/surveys/${surveyId}/questions`);
//         if (response) {
//           setQuestion("")
//           setOptions(["", "", ""]);
//           setSavedQuestions(response.data);
//           setQuestionType('');
//           setShowOptions(false);
//         }

//         console.log('Question and options saved successfully', response.data);
//       }


//     } catch (error) {
//       console.error('Failed to save question and options', error);
//     }
//   };

//   //   if (showChoice && questionType === 'choice') {
//   //     handleChoiceQuestionChange();
//   //   }
//   // }, [question, options, surveyId, showChoice, questionType]);

//   // useEffect(() => {
//   const handleTextQuestionChange = async () => {
//     console.log("textquestion");
//     try {
//       const questionData = {
//         question,
//       };

//       if (questionData.question && questionData.question !== "") {
//         await axios.post(`http://localhost:8081/surveys/${surveyId}/create/question`, questionData);
//         const response = await axios.get(`http://localhost:8081/surveys/${surveyId}/questions`);
//         if (response) {
//           setQuestion(" ")
//           setSavedQuestions(response.data);
//           setQuestionType('');
//           setShowOptions(false);
//         }

//         console.log('Text question saved successfully', response.data);
//       }

//     } catch (error) {
//       console.error('Failed to save text question', error);
//     }
//   };

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await axios.get(`http://localhost:8081/surveys/${surveyId}/questions`);
//   //       if (response) {
//   //         setSavedQuestions(response.data);
//   //       }
//   //     } catch (error) {
//   //       console.error('Failed to fetch saved questions', error);
//   //     }
//   //   };

//   //   const storedSurveyId = localStorage.getItem('surveyid');

//   //   if (storedSurveyId) {
//   //     setSurveyId(storedSurveyId);
//   //     fetchData();
//   //   }
//   // }, []);

//   // const handleDeleteQuestion = async (questionId) => {
//   //   try {
//   //     await axios.delete(`http://localhost:8081/surveys/questions/${questionId}`);
//   //     const updatedQuestions = savedQuestions.filter((question) => question.id !== questionId);
//   //     setSavedQuestions(updatedQuestions);
//   //     console.log(`Question ${questionId} deleted successfully`);
//   //   } catch (error) {
//   //     console.error(`Failed to delete question ${questionId}`, error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   const LocalSurveyId = localStorage.getItem('surveyid');
//   //   try {
//   //     if (surveyId) {
//   //       const response = axios.get(`http://localhost:8081/surveys/${LocalSurveyId}/questions`);
//   //       if (response) {
//   //         setQuestion(" ")
//   //         setSavedQuestions(response.data);
//   //       }
//   //       console.log('Text question saved successfully', response.data);
//   //     }

//   //   } catch (error) {
//   //     console.error('Failed to save text question', error);
//   //   }
//   // }, [savedQuestions])

//   console.log(savedQuestions, 'questionssaved')

//   //   if (showText && questionType === 'text') {
//   //     handleTextQuestionChange();
//   //   }
//   // }, [question, surveyId, showText, questionType]);

//   return (
//     <div className="bg-white px-[40px] py-[80px]  ml-[220px] mr-[220px]">
//       {showForm ? (

//         <div className="mt-2 bg-slate-400  " ref={modalRef}>
//           <TitleComponent title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
//         </div>
//       ) : (
//         <div onClick={() => { setShowForm(true) }} className="text-black  text-4xl py-2 px-4 mt-[30px] ">
//           <div className="cursor-pointer">{title}</div>
//           <div>{description}</div>
//         </div>
//       )}
//       <div>
//         <ul>
//           {savedQuestions && savedQuestions.map((res, index) => {
//             console.log(res, 'response')
//             return (
//               <li key={index}>
//                 <span>QUESTION: {res.question}</span><br />
//                 {res.option.length > 0 ? (
//                   <>
//                     <span>OPTION 1: {res.option[0].option1}</span><br />
//                     <span>OPTION 2: {res.option[0].option2}</span><br />
//                     <span>OPTION 3: {res.option[0].option3}</span><br />
//                   </>
//                 ) : (
//                   <textarea
//                     placeholder='Answer'
//                     disabled
//                     className="shadow border rounded ml-2 w-[300px] mb-2 py-1 px-2 mt-[10px] text-gray-700 leading-tight"
//                     readOnly
//                   />
//                 )}
//               </li>
//             )
//           })}
//         </ul>
//       </div>


//       {/* <div onClick={showChoice ? handleChoiceQuestionChange : handleTextQuestionChange} >
//         {showOptions && (
//           <div className="mt-4" onClick={showChoice ? handleChoiceQuestionChange : handleTextQuestionChange}>

//             {showText && (
//               <>
//                 <textarea
//                   className="shadow appearance-none border rounded w-[600px] py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
//                   value={question}
//                   onChange={(e) => setQuestion(e.target.value)}
//                   placeholder="Question"
//                 />
//                 {showAnswers && (
//                   <textarea
//                     className="shadow appearance-none border rounded w-[600px] py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
//                     value={answer}
//                     onChange={(e) => setAnswer(e.target.value)}
//                     placeholder=" Answer"
//                   />
//                 )}
//               </>
//             )}
//             {showChoice && questionType === 'choice' && (
//               <>
//                 {options.map((option, index) => (
//                   <div key={index} className="flex items-center mb-4">
//                     <input
//                       type="radio"
//                       id={`option${index}`}
//                       name="option"
//                       value={option}
//                       className="mr-2"
//                       disabled
//                     />
//                     <textarea
//                       value={option}
//                       onChange={(e) => {
//                         const newOptions = [...options];
//                         newOptions[index] = e.target.value;
//                         setOptions(newOptions);
//                       }}
//                       className="shadow appearance-none border rounded w-[300px] py-1 px-2 text-gray-700 leading-tight"
//                       placeholder={`Option ${index + 1}`}
//                     />
//                   </div>
//                 ))}
//               </>
//             )}
//           </div>
//         )} */}

// <div onClick={showChoice ? handleChoiceQuestionChange : handleTextQuestionChange}>
//   {showOptions && (
//     <div className="mt-4">
//       {showText && (
//         <>
//           <textarea
//             className="shadow appearance-none border rounded w-[600px] py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             placeholder="Question"
//           />
//           {showAnswers && (
//             <textarea
//               className="shadow appearance-none border rounded w-[600px] py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
//               value={answer}
//               onChange={(e) => setAnswer(e.target.value)}
//               placeholder=" Answer"
//             />
//           )}
//         </>
//       )}
//       {showChoice && questionType === 'choice' && (
//         <>
//           {options.map((option, index) => (
//             <div key={index} className="flex items-center mb-4">
//               <input
//                 type="radio"
//                 id={`option${index}`}
//                 name="option"
//                 value={option}
//                 className="mr-2"
//                 disabled
//               />
//               <textarea
//                 value={option}
//                 onChange={(e) => {
//                   const newOptions = [...options];
//                   newOptions[index] = e.target.value;
//                   setOptions(newOptions);
//                 }}
//                 className="shadow appearance-none border rounded w-[300px] py-1 px-2 text-gray-700 leading-tight"
//                 placeholder={`Option ${index + 1}`}
//               />
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   )}
//         {/* {savedQuestions.length > 0 && (
//           <div className="mt-4">
//             <h3 className="text-2xl mt-[30px] font-bold text-green-700">Saved Questions</h3>
//             {savedQuestions.map((savedQuestion, index) => (
//               <div key={index} className="mt-2">
//                 <p>
//                   <strong className="ml-[40px]">Question:</strong>
//                 </p>
//                 <textarea
//                   className="shadow border rounded w-[600px] ml-2 mb-2 py-1 px-2 mt-[10px] text-gray-700 leading-tight"
//                   value={savedQuestion.question}
//                   readOnly
//                 />
//                 <br />
//                 {showChoice === true ?
//                   <>
//                     <p>
//                       <input className="mt-[20px] ml-[30px]" type="radio" disabled />{' '}
//                       <strong className="ml-[5px]">Option1:</strong>
//                     </p>
//                     <textarea
//                       className="shadow border rounded ml-2 w-[300px] mb-2 py-1 px-2 mt-[10px] text-gray-700 leading-tight"
//                       value={savedQuestion?.option.option1}
//                       readOnly
//                     />
//                     <br />
//                     <p>
//                       <input className="mt-[20px] ml-[30px]" type="radio" disabled />{' '}
//                       <strong className="ml-[5px]">Option2:</strong>
//                     </p>
//                     <textarea
//                       className="shadow border rounded ml-2 w-[300px] mb-2 py-1 px-2 text-gray-700 mt-[10px] leading-tight"
//                       value={savedQuestion.option.option2}
//                       readOnly
//                     />
//                     <br />
//                     <p>
//                       <input className="mt-[20px] ml-[30px]" type="radio" disabled />{' '}
//                       <strong className="ml-[5px]">Option3:</strong>
//                     </p>
//                     <textarea
//                       className="shadow border rounded ml-2 w-[300px] mb-2 py-1 px-2 mt-[10px] text-gray-700 leading-tight"
//                       value={savedQuestion.option.option3}
//                       readOnly
//                     /> </>
//                   :
//                   <textarea
//                     placeholder='Answer'
//                     disabled
//                     className="shadow border rounded ml-2 w-[300px] mb-2 py-1 px-2 mt-[10px] text-gray-700 leading-tight"
//                     readOnly
//                   />
//                 }
//               </div>
//             ))}
//           </div>
//         )} */}
//   <button
//           className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4  mt-[60px] rounded "
//           type="button"
//           onClick={
//             handleButtonClick
//           }
//         >
//           + Add New
//         </button>

//         <div>
//           {showChoiceButton && (
//             <button
//               onClick={() => {
//                 handleQuestionTypeChange('choice');
//                 setShowChoice(true);
//                 setShowText(true);
//                 setShowAnswers(false);
//               }}
//               className={`${questionType === 'choice'
//                 ? 'bg-white py-2 border-8 border-teal-700 px-4 rounded ml-[20px]'
//                 : 'bg-gray-300 hover:bg-gray-500'
//                 } hover:text-white text-slate-600 px-[15px] py-[4px] rounded-full`}
//             >
//               <RadioButtonCheckedIcon className="inline-block mr-2" />
//               Choice
//             </button>
//           )}
//           {showTextButton && (
//             <button
//               onClick={() => {
//                 handleQuestionTypeChange('text');
//                 setShowText(true);
//                 setShowChoice(false);
//                 setShowAnswers(true);
//               }}
//               className={`${questionType === 'text' ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-500'
//                 } hover:text-white   text-slate-600 px-[17px] py-[4px] rounded-full ml-[2px]`}
//             >
//               <TitleIcon className="inline-block mr-2" />
//               Text
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionsPage;




import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import TitleComponent from './TitleComponent';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import TitleIcon from '@mui/icons-material/Title';
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
    <div className="bg-white px-[40px] py-[80px]  ml-[220px] mr-[220px]">
      {showForm ? (
        <div className="mt-2 bg-slate-400  " ref={modalRef}>
          <TitleComponent title={title || currentTitle} setTitle={setTitle} description={description} setDescription={setDescription} />
        </div>
      ) : (
        <div onClick={() => { setShowForm(true) }} className="text-black  text-4xl py-2 px-4 mt-[30px] ">
          <div className="cursor-pointer">{title}</div>
          <div>{description}</div>
        </div>
      )}
      <div>
        <ul>
          {savedQuestions && savedQuestions.map((res, index) => {
            console.log(res, 'response')
            return (
              <li key={index}>
                <span>QUESTION: {res.question}</span><br />
                {res.option.length > 0 ? (
                  <>
                    <span>OPTION 1: {res.option[0].option1}</span><br />
                    <span>OPTION 2: {res.option[0].option2}</span><br />
                    <span>OPTION 3: {res.option[0].option3}</span><br />
                  </>
                ) : (
                  <textarea
                    placeholder='Answer'
                    disabled
                    className="shadow border rounded ml-2 w-[300px] mb-2 py-1 px-2 mt-[10px] text-gray-700 leading-tight"
                    readOnly
                  />
                )}
                <button onClick={() => handleDeleteQuestion(res.id)}>Delete</button>
              </li>
            )
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



