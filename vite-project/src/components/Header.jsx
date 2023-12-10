// import React from 'react';
// import AppsIcon from '@mui/icons-material/Apps';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// function Form() {
//   return (
//     <div  >
//       <div>
//       <h1 className="text-3xl  bg-teal-700 text-slate-50 px-[10px]  py-[10px]"> <AppsIcon/>  Forms <QuestionMarkIcon/> </h1>
//       </div>
//     </div>
//   )
// }

// export default Form;


// import React, { useState } from 'react';
// import AppsIcon from '@mui/icons-material/Apps';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// import CloseIcon from '@mui/icons-material/Close';

// function Form() {
//   const [showHelp, setShowHelp] = useState(false);

//   const handleHelpClick = () => {
//     setShowHelp(!showHelp);
//   };

//   return (
//     <div>
//       <div>
//         <h1 className="text-3xl bg-teal-700 text-slate-50 px-[10px] py-[10px]">
//           <AppsIcon /> Forms
//           <QuestionMarkIcon style={{ float: 'right' }} onClick={handleHelpClick} />
//         </h1>
//       </div>
//       {showHelp && (
//         <div style={{ position: 'fixed', right: 0, top: 0 }}>
//           <CloseIcon/>
//           <h2>Help</h2>
//           <p>Featured help</p>
//           <p>New to Forms? Start here!</p>
//           <p>Forms help & learning</p>
//           <p>Create a form or quiz</p>
//           <p>Send your form or survey results</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Form;



import React, { useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CloseIcon from '@mui/icons-material/Close';

function Form() {
  const [showHelp, setShowHelp] = useState(false);

  const handleHelpClick = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div className="relative">
      <div>
        <h1 className="text-3xl bg-teal-700 text-slate-50 px-2 py-2">
          <AppsIcon /> Forms
          <QuestionMarkIcon className="float-right" onClick={handleHelpClick} />
        </h1>
      </div>
      {showHelp && (
        <div className="absolute mt-[90px] right-0 w-64  bg-white p-8"> 
          <h1 className="font-bold">Help <CloseIcon onClick={handleHelpClick}  className="ml-[100px]"/> </h1><br/>
          <p>Featured help</p><br/>
          <p className="text-teal-700">New to Forms? Start here!</p>
          <p className="mt-[10px] text-teal-700">Forms help & learning</p>
          <p className="mt-[10px] text-teal-700">Create a form or quiz</p>
          <p className="mt-[10px] text-teal-700">Send your  survey results</p>
        </div>
      )}
    </div>
  );
}

export default Form;
