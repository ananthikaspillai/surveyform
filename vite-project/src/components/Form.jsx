import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import FeedIcon from '@mui/icons-material/Feed';
export const Form = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home');
  }

  return (
    <div className="">
      <h1 className="text-3xl  bg-teal-700 text-slate-50 px-[10px]  py-[10px]"> <AppsIcon/> Forms</h1>
      <div  className="bg-gray-200 mt-[40px] px-[20px] py-[40px]">
      <button  className="bg-teal-700 text-white" onClick={handleButtonClick}> <FeedIcon/>New Form</button>
      </div>
    </div>
  );
};