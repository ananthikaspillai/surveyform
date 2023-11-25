
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResponsesPage = () => {
  const [surveyData, setSurveyData] = useState({});
  const surveyId = localStorage.getItem('surveyId');

  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/surveys/${surveyId}`);
        const data = response.data;
        console.log(data);

        setSurveyData(data);
      } catch (error) {
        console.error('Failed to fetch survey data', error);
      }
    };

    fetchSurveyData();
  }, [surveyId]);

  return (
    <div className='flex justify-between items-center bg-gray-300 p-4'>
      <div className='ml-[15px]'>
        <h1 className='text-2xl font-bold '>Title : {surveyData.title}</h1>
        <p className='text-xl  '>Response : {surveyData.surveyCount}</p>
      </div>

      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Active</h1>
        <p className='text-xl'>Status</p>
      </div>
    </div>
  );
};

export default ResponsesPage;
