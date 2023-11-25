
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const PreviewPage = () => {
  const [surveys, setSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [questionsAndOptions, setQuestionsAndOptions] = useState([]);
  const [surveysId, setSurveysId] = useState();
  const [questionId, setQuestionId] = useState();

  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(() => {
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
      setSurveysId(surveyId);
      setQuestionsAndOptions(response.data);
      setSelectedSurvey(surveyId);
      console.log(surveyId, 'survey');
      localStorage.setItem('surveyId', surveyId);
      setQuestionId(response.data[0].id);
      console.log(questionId);
    } catch (error) {
      console.error('Failed to retrieve questions and options', error);
    }
  };

  const handleDeleteSurvey = async (surveyId) => {
    try {
      await axios.delete(`http://localhost:8081/surveys/${surveyId}`);
      console.log('Survey deleted successfully');
      fetchSurveyData();
      setSelectedSurvey(null);
      setQuestionsAndOptions([]);
    } catch (error) {
      console.error('Failed to delete survey', error);
    }
  };

  const submitSurveyResponse = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8081/surveys/${surveysId}/questions/submit`,
        selectedOptions
      );

      console.log('Survey Submitted!', response);

      window.alert('Thanks! Your Response was Submitted');
    } catch (error) {
      console.error('Failed to submit survey response', error);
    }
  };

  const handleOptionChange = (questionId, selectedOption) => {
    const updatedOptions = [...selectedOptions];
   
    const existingIndex = updatedOptions.findIndex(
      (option) => option.questionId === questionId
    );
    if (existingIndex !== -1) {
      updatedOptions[existingIndex] = {
        questionId,
        selectedOption,
      };
    } else {
      updatedOptions.push({
        questionId,
        selectedOption,
      });
    }
   
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-[800px] space-y-10 bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl text-center font-bold mb-4">Response</h1>
        {surveys.map((survey) => (
          <div key={survey.id} className="border p-4 rounded-lg mb-4">
            <h2 className="text-2xl font-bold mb-2">{survey.title}</h2>
            <p className="mb-4">{survey.description}</p>
            <button
              className="bg-blue-500 text-white rounded-md px-6 mr-[10px] py-2 mb-2"
              onClick={() => fetchQuestionsAndOptions(survey.id)}
            >
              Fetch Questions and Options
            </button>
            <button
              className=" text-black rounded-md px-4 py-2 mr-2"
              onClick={() => handleDeleteSurvey(survey.id)}
            >
             <DeleteIcon/>
            </button>

            {selectedSurvey === survey.id && (
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-2">Questions and Options:</h3>
                {questionsAndOptions.map((question) => (
                  <div key={question.id} className="border p-4 rounded-lg mb-4">
                    <p className="font-bold">{question.question}</p>
                    <div>
                      <input
                        type="radio"
                        id={`option1-${question.id}`}
                        name={`question-${question.id}`}
                        value={question.option[0].option1}
                        onChange={() => handleOptionChange(question.id, question.option[0].option1)}
                      />
                      <label htmlFor={`option1-${question.id}`} className="ml-2">
                        Option 1: {question.option[0].option1}
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id={`option2-${question.id}`}
                        name={`question-${question.id}`}
                        value={question.option[0].option2}
                        onChange={() => handleOptionChange(question.id, question.option[0].option2)}
                      />
                      <label htmlFor={`option2-${question.id}`} className="ml-2">
                        Option 2: {question.option[0].option2}
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id={`option3-${question.id}`}
                        name={`question-${question.id}`}
                        value={question.option[0].option3}
                        onChange={() => handleOptionChange(question.id, question.option[0].option3)}
                      />
                      <label htmlFor={`option3-${question.id}`} className="ml-2">
                        Option 3: {question.option[0].option3}
                      </label>
                    </div>
                  </div>
                ))}
                <button
                  className="bg-green-500 text-white rounded-md px-4 py-2"
                  onClick={submitSurveyResponse}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        ))}
        <Link className="ml-[500px]" to="/Link" state={{ surveyCount: selectedSurvey }}>
          Link
        </Link>
      </div>
    </div>
  );
};

export default PreviewPage;





