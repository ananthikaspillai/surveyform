
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import AppsIcon from '@mui/icons-material/Apps';
// import FeedIcon from '@mui/icons-material/Feed';
// import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

// export const Form = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate('/home');
//   }

//   const handleRecentButtonClick = () => {
  
//   }

//   return (
//     <div className="">
//       <div className='flex  px-[20px]  py-[10px]  bg-teal-700 text-slate-50'> <AppsIcon/>
//       <h1 className="text-3xl"> Forms  </h1><QuestionMarkIcon/> </div>
//       <div  className="bg-gray-200  px-[30px] py-[50px]">
//       <button  className="bg-teal-700 text-white px-[20px] py-[6px] rounded gap-8" onClick={handleButtonClick}> <FeedIcon/>  New Form </button>
//       </div>
//       <button  className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 text-xm px-[15px] py-[4px] rounded-full mt-8 ml-[50px]" onClick={handleRecentButtonClick}> <AccessTimeIcon/>  Recent </button>
//       <button  className="bg-gray-300 hover:bg-gray-500 hover:text-white   text-slate-600 px-[17px] py-[4px] rounded-full mt-8 ml-[40px] " onClick={handleRecentButtonClick}> <InsertDriveFileIcon/> My forms </button> 
//       <input type="text" className="border-2 border-gray-300  px-4 py-1 mt-8 ml-[550px]" placeholder="Filter by keyword" />
//    </div>
//   );
// };



import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import FeedIcon from '@mui/icons-material/Feed';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import recent from "../assets/recent.png"
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export const Form = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleButtonClick = () => {
    navigate('/home');
  }

  const handleRecentButtonClick = async () => {
    try {
      const response = await axios.get('http://localhost:8081/surveys');
      // setData(response.data);
      setData([response.data[response.data.length - 1]]);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  }

  const handleMyFormsButtonClick = async () => {
    try {
      const response = await axios.get('http://localhost:8081/surveys');
      setData(response.data); // Set data to all surveys
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  }

  const handleDeleteButtonClick = async (surveyId) => {
    try {
      await axios.delete(`http://localhost:8081/surveys/${surveyId}`);
      handleRecentButtonClick(); // Refresh the data
    } catch (error) {
      console.error('Failed to delete survey', error);
    }
  }

  // useEffect(() => {
  //   handleRecentButtonClick();
  // }, []);
  useEffect(() => {
    handleMyFormsButtonClick(); // Fetch all surveys when the component mounts
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl  bg-teal-700 text-slate-50 px-[20px]  py-[10px]"> <AppsIcon/> Forms  <QuestionMarkIcon/> </h1>
      <div  className="bg-gray-200  px-[30px] py-[50px]">
      <button  className="bg-teal-700 text-white px-[20px] py-[6px] rounded gap-8" onClick={handleButtonClick}> <FeedIcon/>  New Form </button>
      </div>
      <button  className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 text-xm px-[15px] py-[4px] rounded-full mt-8 ml-[50px]" onClick={handleRecentButtonClick}> <AccessTimeIcon/>  Recent </button>
      <button  className="bg-gray-300 hover:bg-gray-500 hover:text-white   text-slate-600 px-[17px] py-[4px] rounded-full mt-8 ml-[40px] " onClick={handleMyFormsButtonClick}> <InsertDriveFileIcon/> My forms </button> 
      <input type="text" className="border-2 border-gray-300  px-4 py-1 mt-8 ml-[550px]" placeholder="Filter by keyword" />
      <div className="flex flex-wrap ">
        {data.map((item, index) => (
          <div key={index}  style={{ backgroundImage: `url(${recent})`}}className=" text-white p-10  mt-7  ml-[40px]">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-[6px]">Created Date: {item.createdDate}</p>
            <p>Created By: {item.createdBy}</p>
            <p>{item.surveyCount} Response</p>
            <button onClick={() => handleDeleteButtonClick(item.id)} className="  text-white   px-5  ml-[120px] mt-[20px]">
              <DeleteIcon/>
            </button>
          </div>
        ))}
      </div>
   </div>
  );
};

