 
// import React, { useState } from 'react';
 
// const ResponsesPage = () => {
//   return (
//     <div className='flex justify-between items-center bg-gray-200 p-4'>
//       <div className='text-center'>
//         <h1 className='text-3xl font-bold'>0</h1>
//         <p className='text-xl'>Response</p>
//       </div>
 
//       <div className='text-center'>
//         <h1 className='text-3xl font-bold'>Active</h1>
//         <p className='text-xl'>Status</p>
//       </div>
//     </div>
//   );
// };
 
 
 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
 
// const ResponsesPage = () => {
//   const [surveyCount, setSurveyCount] = useState(0);
 
//   useEffect(() => {
//     const fetchSurveyData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/surveys/surveyId'); // Replace with your actual API endpoint
//         // console.log('Survey Data:', response.data);
//         console.log('Response Headers:', response.headers);
//         console.log('Response Data:', response.data);
//         setSurveyCount(response.data.surveyCount);
//       } catch (error) {
//         console.error('Failed to fetch survey data', error);
//       }
//     };
 
//     fetchSurveyData();
//   }, []); // Empty dependency array to ensure the effect runs only once when the component mounts
 
//   return (
//     <div className='flex justify-between items-center bg-gray-200 p-4'>
//       <div className='text-center'>
//         <h1 className='text-3xl font-bold'>{surveyCount}</h1>
//         <p className='text-xl'>Response</p>
//       </div>
 
//       <div className='text-center'>
//         <h1 className='text-3xl font-bold'>Active</h1>
//         <p className='text-xl'>Status</p>
//       </div>
//     </div>
//   );
// };
 
// export default ResponsesPage;


// import React, { useState, useEffect } from 'react';
 
// const ResponsesPage = () => {
//   const [surveyCount, setSurveyCount] = useState(0);
//   const surveyId = localStorage.getItem('surveyId');
 
//   useEffect(() => {
   
//     const fetchSurveyData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8081/surveys/${surveyId}`);
       
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
 
//         const data = await response.json();
//         console.log(data);
 
//         setSurveyCount(data.surveyCount);
//       } catch (error) {
//         console.error('Failed to fetch survey data', error);
//       }
//     };
 
//     fetchSurveyData();
//   }, []);
 
//   return (
//     <div className='flex justify-between items-center bg-gray-200 p-4'>
//       <div className='text-center'>
//         <h1 className='text-3xl font-bold'>{surveyCount}</h1>
//         <p className='text-xl'>Response</p>
//       </div>
 
//       <div className='text-center'>
//         <h1 className='text-3xl font-bold'>Active</h1>
//         <p className='text-xl'>Status</p>
//       </div>
//     </div>
//   );
// };
 
// export default ResponsesPage;

import React, { useState, useEffect } from 'react';

const ResponsesPage = () => {
  const [surveyData, setSurveyData] = useState({});
  const surveyId = localStorage.getItem('surveyId');

  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/surveys/${surveyId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
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
