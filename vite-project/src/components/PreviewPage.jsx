// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function PreviewPage() {
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/surveys/questions');
//         setQuestions(response.data);
//       } catch (error) {
//         console.error("Failed to fetch questions", error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   return (
//     <div>
//       <h1>PreviewPage</h1>
//       {questions.map((question, index) => (
//         <div key={index}>
//           <h2>{question.question}</h2>
//           {question.options.map((option, i) => (
//             <p key={i}>{option}</p>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PreviewPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PreviewPage = () => {
//   const [surveys, setSurveys] = useState([]);

//   useEffect(() => {
//     // Fetch survey data when the component mounts
//     fetchSurveyData();
//   }, []);

//   const fetchSurveyData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/surveys');
//       setSurveys(response.data);
//       console.log('Survey data retrieved successfully', response.data);
//     } catch (error) {
//       console.error('Failed to retrieve survey data', error);
//     }
//   };

//   return (
//     <div>
//       <h1>PreviewPage</h1>
//       {/* Display survey data from the surveys state */}
//       {surveys.map((survey) => (
//         <div key={survey.id}>
//           <h2>{survey.title}</h2>
//           <p>{survey.description}</p>
//           {/* Add more details as needed */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PreviewPage;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PreviewPage = () => {
//   const [surveys, setSurveys] = useState([]);

//   useEffect(() => {
//     // Fetch survey data when the component mounts
//     fetchSurveyData();
//   }, []);

//   const fetchSurveyData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/surveys');
//       setSurveys(response.data);
//       console.log('Survey data retrieved successfully', response.data);
//     } catch (error) {
//       console.error('Failed to retrieve survey data', error);
//     }
//   };

//   const fetchQuestionsAndOptions = async (surveyId) => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/${surveyId}/questions`);
//       console.log('Questions and options retrieved successfully', response.data);
//       // Process the response data as needed
//     } catch (error) {
//       console.error('Failed to retrieve questions and options', error);
//     }
//   };

//   return (
//     <div>
//       <h1>PreviewPage</h1>
//       {/* Display survey data from the surveys state */}
//       {surveys.map((survey) => (
//         <div key={survey.id}>
//           <h2>{survey.title}</h2>
//           <p>{survey.description}</p>
//           <button onClick={() => fetchQuestionsAndOptions(survey.id)}>
//             Fetch Questions and Options
//           </button>
//           {/* Add more details as needed */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PreviewPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from './Link';


const PreviewPage = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    // Fetch survey data when the component mounts
    fetchSurveyData();
  }, []);

  const fetchSurveyData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/surveys');
      setSurveys(response.data);
      console.log('Survey data retrieved successfully', response.data);
    } catch (error) {
      console.error('Failed to retrieve survey data', error);
    }
  };

  const fetchQuestionsAndOptions = async (surveyId) => {
    try {
      const response = await axios.get(`http://localhost:8081/surveys/${surveyId}/questions`);
      console.log('Questions and options retrieved successfully', response.data);
      // Process the response data as needed
    } catch (error) {
      console.error('Failed to retrieve questions and options', error);
    }
  };

  const handleDeleteSurvey = async (surveyId) => {
    try {
      // Make a DELETE request to the specified API to delete the survey
      await axios.delete(`http://localhost:8081/surveys/${surveyId}`);
      console.log('Survey deleted successfully');
      // Fetch updated survey data after deletion
      fetchSurveyData();
    } catch (error) {
      console.error('Failed to delete survey', error);
    }
  };

  return (
    <div>
      <h1>PreviewPage</h1>
      {/* Display survey data from the surveys state */}
      {surveys.map((survey) => (
        <div key={survey.id}>
          <h2>{survey.title}</h2>
          <p>{survey.description}</p>
          <button onClick={() => fetchQuestionsAndOptions(survey.id)}>
            Fetch Questions and Options
          </button>
          <br/>
          <button  className ="bg-red-500"onClick={() => handleDeleteSurvey(survey.id)}>
            Delete Survey
          </button>
        </div>
      ))}
    </div>
  );
};

export default PreviewPage;






