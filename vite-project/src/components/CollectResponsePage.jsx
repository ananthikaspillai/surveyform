// import React from 'react'

// function CollectResponsePage() {
//   return (
//     <div>
//       <h1>send and collect responses</h1>
//     </div>
//   )
// }

// export default CollectResponsePage


// import React from 'react'

// function CollectResponsePage() {
//   return (
//     <div className='flex flex-col items-center justify-center h-screen bg-gray-200'>
//       <h1 className='text-2xl font-bold mb-4'>Send and collect responses</h1>
//       <textarea className='w-64 h-32 p-2 mb-4' placeholder='Enter your text here...'></textarea>
//       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
//         Copy Link
//       </button>
//     </div>
//   )
// }

// export default CollectResponsePage;



import React from 'react';

function CollectResponsePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Send and Collect Responses</h1>
      <textarea
        className="w-96 h-48 p-4 mb-6 border border-gray-300 rounded-lg resize-none"
        placeholder="Enter your text here..."
      ></textarea>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
        Copy Link
      </button>
    </div>
  );
}

export default CollectResponsePage;
