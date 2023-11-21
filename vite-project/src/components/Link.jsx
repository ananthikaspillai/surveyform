
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Link() {
//     const [questionsAndOptions, setQuestionsAndOptions] = useState([]);

//     useEffect(() => {
//         fetchQuestionsAndOptions(localStorage.getItem('surveyid'));
//     }, []);

//     const fetchQuestionsAndOptions = async (surveyId) => {
//         try {
//             const response = await axios.get(`http://localhost:8081/surveys/${surveyId}/questions`);
//             console.log('Questions and options retrieved successfully', response.data);
//             setQuestionsAndOptions(response.data);
//         } catch (error) {
//             console.error('Failed to retrieve questions and options', error);
//         }
//     };

//     const handleSubmit = () => {
//         window.alert('Thanks! Your Response was Submitted Successfully');
//     };

//     return (
//         <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//             <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.5rem', fontWeight: 'bold' }}>Survey Questions</h2>
//             {questionsAndOptions.map((question) => (
//                 <div key={question.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
//                     <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '1.2rem' }}>{question.question}</p>
//                     <div style={{ marginBottom: '10px' }}>
//                         <input type="radio" id={`option1-${question.id}`} name={`question-${question.id}`} value={question.option[0].option1} />
//                         <label htmlFor={`option1-${question.id}`} style={{ marginLeft: '8px' }}>Option 1: {question.option[0].option1}</label>
//                     </div>
//                     <div style={{ marginBottom: '10px' }}>
//                         <input type="radio" id={`option2-${question.id}`} name={`question-${question.id}`} value={question.option[0].option2} />
//                         <label htmlFor={`option2-${question.id}`} style={{ marginLeft: '8px' }}>Option 2: {question.option[0].option2}</label>
//                     </div>
//                     <div style={{ marginBottom: '10px' }}>
//                         <input type="radio" id={`option3-${question.id}`} name={`question-${question.id}`} value={question.option[0].option3} />
//                         <label htmlFor={`option3-${question.id}`} style={{ marginLeft: '8px' }}>Option 3: {question.option[0].option3}</label>
//                     </div>
//                     <button
//                         style={{
//                             backgroundColor: '#4CAF50',
//                             color: 'white',
//                             padding: '10px 15px',
//                             border: 'none',
//                             borderRadius: '5px',
//                             cursor: 'pointer',
//                             fontSize: '1rem',
//                         }}
//                         onClick={handleSubmit}
//                     >
//                         Submit
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Link;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Link() {
    const [questionsAndOptions, setQuestionsAndOptions] = useState([]);

    useEffect(() => {
        fetchQuestionsAndOptions(localStorage.getItem('surveyid'));
    }, []);

    const fetchQuestionsAndOptions = async (surveyId) => {
        try {
            const response = await axios.get(`http://localhost:8081/surveys/${surveyId}/questions`);
            console.log('Questions and options retrieved successfully', response.data);
            setQuestionsAndOptions(response.data);
        } catch (error) {
            console.error('Failed to retrieve questions and options', error);
        }
    };

    const handleSubmit = () => {
        window.alert('Thanks! Your Response was Submitted Successfully');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-400 to-gray-200 py-12 px-4 ">
            <div className="w-[800px] space-y-10 bg-gradient-to-r from-zinc-300 to-zinc-100 p-10 rounded-lg shadow-md" >
                <h1 className="text-3xl text-center font-bold mb-4 bg-teal-600 pt-[45px] pb-[45px] rounded-lg  text-white">Hey Submit the Survey</h1>
                {questionsAndOptions.map((question) => (
                    <div key={question.id} className="mb-8 border rounded p-4  text-black">
                        <p className="font-bold mb-4 text-lg">{question.question}</p>
                        <div className="mb-4">
                            <input type="radio" id={`option1-${question.id}`} name={`question-${question.id}`} value={question.option[0].option1} />
                            <label htmlFor={`option1-${question.id}`} className="ml-2">Option 1: {question.option[0].option1}</label>
                        </div>
                        <div className="mb-4">
                            <input type="radio" id={`option2-${question.id}`} name={`question-${question.id}`} value={question.option[0].option2} />
                            <label htmlFor={`option2-${question.id}`} className="ml-2">Option 2: {question.option[0].option2}</label>
                        </div>
                        <div className="mb-4">
                            <input type="radio" id={`option3-${question.id}`} name={`question-${question.id}`} value={question.option[0].option3} />
                            <label htmlFor={`option3-${question.id}`} className="ml-2">Option 3: {question.option[0].option3}</label>
                        </div>
                        <button
                            className="bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Link;

