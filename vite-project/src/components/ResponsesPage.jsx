// import React, { useState } from 'react';

// const ResponsesPage = () => {

//   return (
//     <div>
//       <h1 className='ml-[70px]'> 0</h1>
//       <p className='ml-[40px] mt-[20px] '>Response</p>
  
//       <h1 className='ml-[840px] '>Active</h1>
//       <p className='ml-[840px]'>Status</p>
//       </div>
//   );
// };

// export default ResponsesPage;


import React, { useState } from 'react';

const ResponsesPage = () => {

  return (
    <div className='flex justify-between items-center bg-gray-200 p-4'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>0</h1>
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





