
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

// export default ResponsesPage;

import React from 'react';
import { useResponseContext } from '../ResponseContext';

const ResponsesPage = () => {
  const { responseCount } = useResponseContext();

  return (
    <div className='flex justify-between items-center bg-gray-200 p-4'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>{responseCount}</h1>
        <p className='text-xl'>Response</p>
      </div>
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Active</h1>
        <p className='text-xl'>Status</p>
      </div>
    </div>
  );
};

export default ResponsesPage;




