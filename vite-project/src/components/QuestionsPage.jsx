

// import React, { useState } from 'react';

// const QuestionsPage = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [showOptions, setShowOptions] = useState(false);
//   const [showChoice, setShowChoice] = useState(false);
//   const [showText, setShowText] = useState(false); // New state variable for the text option
//   const [question, setQuestion] = useState('');
//   const [options, setOptions] = useState(['', '']);

//   const handleChoiceClick = () => {
//     setShowChoice(true);
//     setShowText(false); // Hide the text option when the choice option is shown
//     setQuestion('');
//     setOptions(['', '']);
//   };

//   const handleTextClick = () => { // New function for the text option
//     setShowText(true);
//     setShowChoice(false); // Hide the choice option when the text option is shown
//     setQuestion('');
//     setOptions(['', '']);
//   };

//   const handleAddOption = () => {
//     setOptions([...options, '']);
//   };

//   return (
//     <div className="px-10">
//       <div>
//         <h2 className="mb-4 text-2xl font-bold text-center cursor-pointer " onClick={() => setShowForm(!showForm)}>
//           Untitled Form
//         </h2>
//         {showForm && (
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
//               Title
//             </label>
//             <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" />
//             <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="description">
//               Description
//             </label>
//             <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" />
//           </div>
//         )}
//         <div className="flex space-x-4"> {/* Add a flex container */}
//           <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline active:bg-teal-500 active:scale-100" type="button" onClick={() => setShowOptions(!showOptions)}>
//             + Add New
//           </button>
//           {showOptions && (
//             <>
//               <button onClick={handleChoiceClick} className=" text-gray-500 hover:bg-gray-200 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer">
//                 Choice
//               </button>
//               <button onClick={handleTextClick} className=" text-gray-500 hover:bg-gray-200 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer">
//                 Text
//               </button>
//             </>
//           )}
//         </div>
//         {showChoice && (
//           <div className="mt-4">
//             <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
//             {options.map((option, index) => (
//               <div key={index} className="flex items-center mb-4">
//                 <input type="radio" id={`option${index}`} name="option" value={option} className="mr-2"/>
//                 <textarea value={option} onChange={(e) => {
//                   const newOptions = [...options];
//                   newOptions[index] = e.target.value;
//                   setOptions(newOptions);
//                 }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={`Option ${index + 1}`} />
//               </div>
//             ))}
//             <button onClick={handleAddOption} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//               + Add option
//             </button>
//           </div>
//         )}
//         {showText && ( // New conditional rendering block for the text option
//           <div className="mt-4">
//             <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
//             <textarea value={options[0]} onChange={(e) => {
//               const newOptions = [...options];
//               newOptions[0] = e.target.value;
//               setOptions(newOptions);
//             }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Option" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default QuestionsPage;


import React, { useState } from 'react';

const QuestionsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showChoice, setShowChoice] = useState(false);
  const [showText, setShowText] = useState(false); // New state variable for the text option
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '','']);

  const handleChoiceClick = async() => {
    setShowChoice(true);
    setShowText(false); // Hide the text option when the choice option is shown
    setQuestion('');
    setOptions(['', '','']);

    try {
      const response = await axios.post('http://localhost:8081/surveys/questions', {
        question,
        options,
      });
  
      console.log("Question and options sent successfully", response.data);
    } catch (error) {
      console.error("Failed to send question and options", error);
    }
  };
  const handleTextClick = () => { // New function for the text option
    setShowText(true);
    setShowChoice(false); // Hide the choice option when the text option is shown
    setQuestion('');
    setOptions(['', '','']);
  };
  const handleAddOption = () => {
    setOptions([...options, '']);
  };
  return (
    <div className="px-10">
      <div>
        <h2 className="mb-4 text-2xl font-bold text-center cursor-pointer " onClick={() => setShowForm(!showForm)}>
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
        <div className="flex space-x-4"> {/* Add a flex container */}
          <button className="bg-teal-700 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline active:bg-teal-500 active:scale-100" type="button" onClick={() => setShowOptions(!showOptions)}>
            + Add New
          </button>
          {showOptions && (
            <>
              <button onClick={handleChoiceClick} className=" text-gray-500 hover:bg-gray-200 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer">
                Choice
              </button>
              <button onClick={handleTextClick} className=" text-gray-500 hover:bg-gray-200 text-blue-800 font-bold py-2 px-4 rounded m-2 cursor-pointer">
                Text
              </button>
            </>
          )}
        </div>
        {showChoice && (
          <div className="mt-4">
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
            {options.map((option, index) => (
              <div key={index} className="flex items-center mb-4">
                <input type="radio" id={`option${index}`} name="option" value={option} className="mr-2" disabled /> 
                <textarea value={option} onChange={(e) => {
                  const newOptions = [...options];
                  newOptions[index] = e.target.value;
                  setOptions(newOptions);
                }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={`Option ${index + 1}`} /> 
              </div>
            ))}
            <button onClick={handleAddOption} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              + Add option
            </button>
          </div>
        )}
        {showText && ( // New conditional rendering block for the text option
          <div className="mt-4">
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
            <textarea value={options[0]} onChange={(e) => {
              const newOptions = [...options];
              newOptions[0] = e.target.value;
              setOptions(newOptions);
            }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Option" disabled /> {/* Disable the textarea */}
          </div>
        )}
      </div>
    </div>
  );
};
export default QuestionsPage;







