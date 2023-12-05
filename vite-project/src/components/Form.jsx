

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AppsIcon from '@mui/icons-material/Apps';
// import FeedIcon from '@mui/icons-material/Feed';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// import recent from "../assets/recent.png";
// import DeleteIcon from '@mui/icons-material/Delete';
// import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import axios from 'axios';

// export const Form = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [filterKeyword, setFilterKeyword] = useState('');

//   const handleButtonClick = () => {
//     localStorage.removeItem('title');
//     localStorage.removeItem('description');
//     navigate('/home');
//   }

//   const handleRecentButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/pageable?page=1&size=7&sort=id,asc`);
//         setData(response.data.content);
//     } catch (error) {
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const[searchResult, setSearchResult] = useState(null)
//   const handleMyFormsButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/search?query=${filterKeyword}`);
//       setSearchResult(true)

//       setData(response.data);
//     } catch (error) {
//       setSearchResult(false)
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const handleDeleteButtonClick = async (surveyId) => {
//     try {
//       await axios.delete(`http://localhost:8081/surveys/${surveyId}`);
//       handleRecentButtonClick();
//     } catch (error) {
//       console.error('Failed to delete survey', error);
//     }
//   }

//   useEffect(() => {
//     handleRecentButtonClick()
//     if(filterKeyword){    handleMyFormsButtonClick();
//     }
//   }, [filterKeyword]);


//   return (
//     <div className="">
//       <h1 className="text-3xl bg-teal-700 text-slate-50 px-[20px] py-[10px]"> <AppsIcon/> Forms  </h1>
//       <div className="bg-gray-200 px-[30px] py-[50px]">
//         <button className="bg-teal-700 text-white px-[20px] py-[6px] rounded gap-8" onClick={handleButtonClick}> <FeedIcon/>  New Form </button>
//       </div>
//       <div className="flex">
//       <div>
//       <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 text-xm px-[15px] py-[4px] rounded-full mt-8 ml-[50px]" onClick={handleRecentButtonClick}> <AccessTimeIcon/>  Recent </button>
//       <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 px-[17px] py-[4px] rounded-full mt-8 ml-[40px] " onClick={handleMyFormsButtonClick}> <InsertDriveFileIcon/> My forms </button>
//       </div>
//       <div className="flex">
//       <input
//         type="text"
//         className="border-2 border-gray-300 px-4 py-1 mt-8 ml-[550px]"
//         placeholder="Filter by keyword"
//         value={filterKeyword}
//         onChange={(e) => setFilterKeyword(e.target.value)}
//       />
//       <div className="flex mt-[35px] ml-[40px]">
//       <div className=" text-gray-500">< ViewListIcon/></div>
//       <div className=" text-teal-800 ml-[20px] "> <ViewModuleIcon/></div>
//       </div>
//       </div>
//       </div>
//      {  searchResult  && data.length > 0  ? (
//         <div className="flex flex-wrap ">
//           {data.map((item, index) => (
//             <div key={index} style={{ backgroundImage: `url(${recent})`}} className="text-white p-10 mt-7 ml-[40px]">
//               <h2 className="text-xl font-bold">{item.title}</h2>
//               <p className="mt-[6px]">Created Date: {item.createdDate}</p>
//               <p>Created By: {item.createdBy}</p>
//               <p>{item.surveyCount} Response</p>
//               <button onClick={() => handleDeleteButtonClick(item.id)} className="text-white px-5 ml-[120px] mt-[20px]">
//                 <DeleteIcon/>
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>No recent pages available.</div>
//       )}
//     </div>
//   );
// };


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AppsIcon from '@mui/icons-material/Apps';
// import FeedIcon from '@mui/icons-material/Feed';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// import recent from "../assets/recent.png";
// import DeleteIcon from '@mui/icons-material/Delete';
// import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import axios from 'axios';

// export const Form = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [filterKeyword, setFilterKeyword] = useState('');
//   const [page, setPage] = useState(0); // Track the current page

//   const handleButtonClick = () => {
//     localStorage.removeItem('title');
//     localStorage.removeItem('description');
//     navigate('/home');
//   }

//   const handleRecentButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/pageable?page=${page}&size=7&sort=id,asc`);
//       setData(response.data.content);
//     } catch (error) {
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const handleMyFormsButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/search?query=${filterKeyword}&page=${page}&size=7&sort=id,asc`);
//       setData(response.data.content);
//     } catch (error) {
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const handleDeleteButtonClick = async (surveyId) => {
//     try {
//       await axios.delete(`http://localhost:8081/surveys/${surveyId}`);
//       handleRecentButtonClick();
//     } catch (error) {
//       console.error('Failed to delete survey', error);
//     }
//   }

//   const handleShowMoreButtonClick = () => {
//     setPage((prevPage) => prevPage + 1); // Increment the page number
//   }

//   useEffect(() => {
//     handleRecentButtonClick();
//     if (filterKeyword) {
//       handleMyFormsButtonClick();
//     }
//   }, [filterKeyword, page]);

//   return (
//     <div className="">
//       <h1 className="text-3xl bg-teal-700 text-slate-50 px-[20px] py-[10px]"> <AppsIcon /> Forms  </h1>
//       <div className="bg-gray-200 px-[30px] py-[50px]">
//         <button className="bg-teal-700 text-white px-[20px] py-[6px] rounded gap-8" onClick={handleButtonClick}> <FeedIcon />  New Form </button>
//       </div>
//       <div className="flex">
//         <div>
//           <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 text-xm px-[15px] py-[4px] rounded-full mt-8 ml-[50px]" onClick={handleRecentButtonClick}> <AccessTimeIcon />  Recent </button>
//           <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 px-[17px] py-[4px] rounded-full mt-8 ml-[40px] " onClick={handleMyFormsButtonClick}> <InsertDriveFileIcon /> My forms </button>
//         </div>
//         <div className="flex">
//           <input
//             type="text"
//             className="border-2 border-gray-300 px-4 py-1 mt-8 ml-[550px]"
//             placeholder="Filter by keyword"
//             value={filterKeyword}
//             onChange={(e) => setFilterKeyword(e.target.value)}
//           />
//           <div className="flex mt-[35px] ml-[40px]">
//             <div className=" text-gray-500">< ViewListIcon /></div>
//             <div className=" text-teal-800 ml-[20px] "> <ViewModuleIcon /></div>
//           </div>
//         </div>
//       </div>
//       {data.length > 0 ? (
//         <div className="flex flex-wrap ">
//           {data.map((item, index) => (
//             <div key={index} style={{ backgroundImage: `url(${recent})` }} className="text-white p-10 mt-7 ml-[40px]">
//               <h2 className="text-xl font-bold">{item.title}</h2>
//               <p className="mt-[6px]">Created Date: {item.createdDate}</p>
//               <p>Created By: {item.createdBy}</p>
//               <p>{item.surveyCount} Response</p>
//               <button onClick={() => handleDeleteButtonClick(item.id)} className="text-white px-5 ml-[120px] mt-[20px]">
//                 <DeleteIcon />
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>No pages available.</div>
//       )}
//       <button
//         onClick={handleShowMoreButtonClick}
//         className=" text-black px-[20px] py-[6px] rounded mt-4 ml-[50px]"
//       >
//         Show More
//         <KeyboardArrowDownIcon/>
//       </button>
//     </div>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AppsIcon from '@mui/icons-material/Apps';
// import FeedIcon from '@mui/icons-material/Feed';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// import recent from "../assets/recent.png";
// import DeleteIcon from '@mui/icons-material/Delete';
// import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import axios from 'axios';

// export const Form = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [filterKeyword, setFilterKeyword] = useState('');
//   const [page, setPage] = useState(0); // Track the current page
//   const [showDetailedList, setShowDetailedList] = useState(false);

//   const handleButtonClick = () => {
//     localStorage.removeItem('title');
//     localStorage.removeItem('description');
//     navigate('/home');
//   }

//   const handleRecentButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/pageable?page=${page}&size=7&sort=id,asc`);
//       setData(response.data.content);
//     } catch (error) {
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const handleMyFormsButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/search?query=${filterKeyword}&page=${page}&size=7&sort=id,asc`);
//       setData(response.data.content);
//     } catch (error) {
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const handleDeleteButtonClick = async (surveyId) => {
//     try {
//       await axios.delete(`http://localhost:8081/surveys/${surveyId}`);
//       handleRecentButtonClick();
//     } catch (error) {
//       console.error('Failed to delete survey', error);
//     }
//   }

//   const handleShowMoreButtonClick = () => {
//     setPage((prevPage) => prevPage + 1); // Increment the page number
//   }

//   const handleViewListIconClick = () => {
//     setShowDetailedList(!showDetailedList);
//   }

//   useEffect(() => {
//     handleRecentButtonClick();
//     if (filterKeyword) {
//       handleMyFormsButtonClick();
//     }
//   }, [filterKeyword, page]);

//   return (
//     <div className="">
//       <h1 className="text-3xl bg-teal-700 text-slate-50 px-[20px] py-[10px]"> <AppsIcon /> Forms  </h1>
//       <div className="bg-gray-200 px-[30px] py-[50px]">
//         <button className="bg-teal-700 text-white px-[20px] py-[6px] rounded gap-8" onClick={handleButtonClick}> <FeedIcon />  New Form </button>
//       </div>
//       <div className="flex">
//         <div>
//           <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 text-xm px-[15px] py-[4px] rounded-full mt-8 ml-[50px]" onClick={handleRecentButtonClick}> <AccessTimeIcon />  Recent </button>
//           <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 px-[17px] py-[4px] rounded-full mt-8 ml-[40px] " onClick={handleMyFormsButtonClick}> <InsertDriveFileIcon /> My forms </button>
//         </div>
//         <div className="flex">
//           <input
//             type="text"
//             className="border-2 border-gray-300 px-4 py-1 mt-8 ml-[550px]"
//             placeholder="Filter by keyword"
//             value={filterKeyword}
//             onChange={(e) => setFilterKeyword(e.target.value)}
//           />
//           <div className="flex mt-[35px] ml-[40px]">
//             <div className=" text-gray-500 cursor-pointer" onClick={handleViewListIconClick}>< ViewListIcon /></div>
//             <div className=" text-teal-800 ml-[20px] "> <ViewModuleIcon /></div>
//           </div>
//         </div>
//       </div>
//       {showDetailedList && data.length > 0 ? (
//         <div className="mt-4 ml-[40px]">
//           <ul>
//             {data.map((item, index) => (
//               <li key={index} className="text-xl font-bold mb-2">
//                 {item.title} - Created By: {item.createdBy}, Created Date: {item.createdDate}, Response: {item.surveyCount}
//                 <button onClick={() => handleDeleteButtonClick(item.id)} className="text-red-500 ml-2">
//                   <DeleteIcon />
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <div className="flex flex-wrap ">
//           {data.map((item, index) => (
//             <div key={index} style={{ backgroundImage: `url(${recent})` }} className="text-white p-10 mt-7 ml-[40px]">
//               <h2 className="text-xl font-bold">{item.title}</h2>
//               <p className="mt-[6px]">Created Date: {item.createdDate}</p>
//               <p>Created By: {item.createdBy}</p>
//               <p>{item.surveyCount} Response</p>
//               <button onClick={() => handleDeleteButtonClick(item.id)} className="text-white px-5 ml-[120px] mt-[20px]">
//                 <DeleteIcon />
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//       <button
//         onClick={handleShowMoreButtonClick}
//         className="text-black px-[20px] py-[6px] rounded mt-4 ml-[50px]"
//       >
//         Show More
//         <KeyboardArrowDownIcon />
//       </button>
//     </div>
//   );
// };


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AppsIcon from '@mui/icons-material/Apps';
// import FeedIcon from '@mui/icons-material/Feed';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// import recent from "../assets/recent.png";
// import DeleteIcon from '@mui/icons-material/Delete';
// import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import axios from 'axios';

// export const Form = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [filterKeyword, setFilterKeyword] = useState('');
//   const [page, setPage] = useState(0); // Track the current page
//   const [showDetailedList, setShowDetailedList] = useState(false);
//   const [showModuleView, setShowModuleView] = useState(true);

//   const handleButtonClick = () => {
//     localStorage.removeItem('title');
//     localStorage.removeItem('description');
//     navigate('/home');
//   }

//   const handleRecentButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/pageable?page=${page}&size=7&sort=id,asc`);
//       setData(response.data.content);
//     } catch (error) {
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const handleMyFormsButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/search?query=${filterKeyword}&page=${page}&size=7&sort=id,asc`);
//       setData(response.data.content);
//     } catch (error) {
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const handleDeleteButtonClick = async (surveyId) => {
//     try {
//       await axios.delete(`http://localhost:8081/surveys/${surveyId}`);
//       handleRecentButtonClick();
//     } catch (error) {
//       console.error('Failed to delete survey', error);
//     }
//   }

//   const handleShowMoreButtonClick = () => {
//     setPage((prevPage) => prevPage + 1); // Increment the page number
//   }

//   const handleViewListIconClick = () => {
//     setShowDetailedList(!showDetailedList);
//     setShowModuleView(false);
//   }

//   const handleViewModuleIconClick = () => {
//     setShowModuleView(!showModuleView);
//     setShowDetailedList(false);
//   }

//   useEffect(() => {
//     handleRecentButtonClick();
//     if (filterKeyword) {
//       handleMyFormsButtonClick();
//     }
//   }, [filterKeyword, page, showModuleView]);

//   return (
//     <div className="">
//       <h1 className="text-3xl bg-teal-700 text-slate-50 px-[20px] py-[10px]"> <AppsIcon /> Forms  </h1>
//       <div className="bg-gray-200 px-[30px] py-[50px]">
//         <button className="bg-teal-700 text-white px-[20px] py-[6px] rounded gap-8" onClick={handleButtonClick}> <FeedIcon />  New Form </button>
//       </div>
//       <div className="flex">
//         <div>
//           <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 text-xm px-[15px] py-[4px] rounded-full mt-8 ml-[50px]" onClick={handleRecentButtonClick}> <AccessTimeIcon />  Recent </button>
//           <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 px-[17px] py-[4px] rounded-full mt-8 ml-[40px] " onClick={handleMyFormsButtonClick}> <InsertDriveFileIcon /> My forms </button>
//         </div>
//         <div className="flex">
//           <input
//             type="text"
//             className="border-2 border-gray-300 px-4 py-1 mt-8 ml-[550px]"
//             placeholder="Filter by keyword"
//             value={filterKeyword}
//             onChange={(e) => setFilterKeyword(e.target.value)}
//           />
//           <div className="flex mt-[35px] ml-[40px]">
//             <div className=" text-gray-500 cursor-pointer" onClick={handleViewListIconClick}>< ViewListIcon /></div>
//             <div className=" text-teal-800 ml-[20px] cursor-pointer" onClick={handleViewModuleIconClick}> <ViewModuleIcon /></div>
//           </div>
//         </div>
//       </div>
//       {showModuleView && !showDetailedList && data.length > 0 ? (
//         <div className="flex flex-wrap ">
//           {data.map((item, index) => (
//             <div key={index} style={{ backgroundImage: `url(${recent})` }} className="text-white p-10 mt-7 ml-[40px]">
//               <h2 className="text-xl font-bold">{item.title}</h2>
//               <p className="mt-[6px]">Created Date: {item.createdDate}</p>
//               <p>Created By: {item.createdBy}</p>
//               <p>{item.surveyCount} Response</p>
//               <button onClick={() => handleDeleteButtonClick(item.id)} className="text-white px-5 ml-[120px] mt-[20px]">
//                 <DeleteIcon />
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : null}
//       {showDetailedList && data.length > 0 ? (
//         <div className="mt-4 ml-[40px]">
//           <ul>
//             {data.map((item, index) => (
//               <li key={index} className="text-xl font-bold mb-2">
//                 {item.title} - Created By: {item.createdBy}, Created Date: {item.createdDate}, Response: {item.surveyCount}
//                 <button onClick={() => handleDeleteButtonClick(item.id)} className="text-red-500 ml-2">
//                   <DeleteIcon />
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : null}
//       <button
//         onClick={handleShowMoreButtonClick}
//         className="text-black px-[20px] py-[6px] rounded mt-4 ml-[50px]"
//       >
//         Show More
//         <KeyboardArrowDownIcon />
//       </button>
//     </div>
//   );
// };


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AppsIcon from '@mui/icons-material/Apps';
// import FeedIcon from '@mui/icons-material/Feed';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// import recent from "../assets/recent.png";
// import DeleteIcon from '@mui/icons-material/Delete';
// import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import axios from 'axios';

// export const Form = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [filterKeyword, setFilterKeyword] = useState('');
//   const [page, setPage] = useState(0); // Track the current page
//   const [showDetailedList, setShowDetailedList] = useState(false);
//   const [showModuleView, setShowModuleView] = useState(true);

//   const handleButtonClick = () => {
//     localStorage.removeItem('title');
//     localStorage.removeItem('description');
//     navigate('/home');
//   }

//   const handleRecentButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/pageable?page=${page}&size=7&sort=id,asc`);
//       const newData = response.data.content;

//       // Concatenate the new data to the existing data
//       setData((prevData) => [...prevData, ...newData]);
//     } catch (error) {
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const handleMyFormsButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/search?query=${filterKeyword}&page=${page}&size=7&sort=id,asc`);
//       const newData = response.data.content;

//       // Concatenate the new data to the existing data
//       setData((prevData) => [...prevData, ...newData]);
//     } catch (error) {
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const handleDeleteButtonClick = async (surveyId) => {
//     try {
//       await axios.delete(`http://localhost:8081/surveys/${surveyId}`);
//       handleRecentButtonClick();
//     } catch (error) {
//       console.error('Failed to delete survey', error);
//     }
//   }

//   const handleShowMoreButtonClick = () => {
//     setPage((prevPage) => prevPage + 1); // Increment the page number
//   }

//   const handleViewListIconClick = () => {
//     setShowDetailedList(!showDetailedList);
//     setShowModuleView(false);
//   }

//   const handleViewModuleIconClick = () => {
//     setShowModuleView(!showModuleView);
//     setShowDetailedList(false);
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response;
//         if (filterKeyword) {
//           response = await axios.get(`http://localhost:8081/surveys/search?query=${filterKeyword}&page=${page}&size=7&sort=id,asc`);
//         } else {
//           response = await axios.get(`http://localhost:8081/surveys/pageable?page=${page}&size=7&sort=id,asc`);
//         }

//         const newData = response.data.content;

//         // Concatenate the new data to the existing data
//         setData((prevData) => [...prevData, ...newData]);
//       } catch (error) {
//         console.error('Failed to fetch data', error);
//       }
//     };

//     fetchData(); // Fetch data on component mount and when page or filterKeyword changes

//   }, [filterKeyword, page, showModuleView]);

//   return (
//     <div className="">
//       <h1 className="text-3xl bg-teal-700 text-slate-50 px-[20px] py-[10px]"> <AppsIcon /> Forms  </h1>
//       <div className="bg-gray-200 px-[30px] py-[50px]">
//         <button className="bg-teal-700 text-white px-[20px] py-[6px] rounded gap-8" onClick={handleButtonClick}> <FeedIcon />  New Form </button>
//       </div>
//       <div className="flex">
//         <div>
//           <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 text-xm px-[15px] py-[4px] rounded-full mt-8 ml-[50px]" onClick={handleRecentButtonClick}> <AccessTimeIcon />  Recent </button>
//           <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 px-[17px] py-[4px] rounded-full mt-8 ml-[40px] " onClick={handleMyFormsButtonClick}> <InsertDriveFileIcon /> My forms </button>
//         </div>
//         <div className="flex">
//           <input
//             type="text"
//             className="border-2 border-gray-300 px-4 py-1 mt-8 ml-[550px]"
//             placeholder="Filter by keyword"
//             value={filterKeyword}
//             onChange={(e) => setFilterKeyword(e.target.value)}
//           />
//           <div className="flex mt-[35px] ml-[40px]">
//             <div className=" text-gray-500 cursor-pointer" onClick={handleViewListIconClick}>< ViewListIcon /></div>
//             <div className=" text-teal-800 ml-[20px] cursor-pointer" onClick={handleViewModuleIconClick}> <ViewModuleIcon /></div>
//           </div>
//         </div>
//       </div>
//       {showModuleView && !showDetailedList && data.length > 0 ? (
//         <div className="flex flex-wrap ">
//           {data.map((item, index) => (
//             <div key={index} style={{ backgroundImage: `url(${recent})` }} className="text-white p-10 mt-7 ml-[40px]">
//               <h2 className="text-xl font-bold">{item.title}</h2>
//               <p className="mt-[6px]">Created Date: {item.createdDate}</p>
//               <p>Created By: {item.createdBy}</p>
//               <p>{item.surveyCount} Response</p>
//               <button onClick={() => handleDeleteButtonClick(item.id)} className="text-white px-5 ml-[120px] mt-[20px]">
//                 <DeleteIcon />
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : null}
//       {showDetailedList && data.length > 0 ? (
//         <div className="mt-4 ml-[40px]">
//           <ul>
//             {data.map((item, index) => (
//               <li key={index} className="text-xl font-bold mb-2">
//                 {item.title} - Created By: {item.createdBy}, Created Date: {item.createdDate}, Response: {item.surveyCount}
//                 <button onClick={() => handleDeleteButtonClick(item.id)} className="text-red-500 ml-2">
//                   <DeleteIcon />
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : null}
//       <button
//         onClick={handleShowMoreButtonClick}
//         className="text-black px-[20px] py-[6px] rounded mt-4 ml-[50px]"
//       >
//         Show More
//         <KeyboardArrowDownIcon />
//       </button>
//     </div>
//   );
// };



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AppsIcon from '@mui/icons-material/Apps';
// import FeedIcon from '@mui/icons-material/Feed';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// import recent from "../assets/recent.png";
// import DeleteIcon from '@mui/icons-material/Delete';
// import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import axios from 'axios';

// export const Form = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [filterKeyword, setFilterKeyword] = useState('');
//   const [page, setPage] = useState(0); // Track the current page
//   const [showDetailedList, setShowDetailedList] = useState(false);
//   const [showModuleView, setShowModuleView] = useState(true);

//   const handleButtonClick = () => {
//     localStorage.removeItem('title');
//     localStorage.removeItem('description');
//     navigate('/home');
//   }

//   const handleRecentButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/pageable?page=${page}&size=7&sort=id,asc`);
//       const newData = response.data.data;

//       // Update the state with the new data
//       setData((prevData) => [...prevData, ...newData]);
//     } catch (error) {
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const handleMyFormsButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/search?query=${filterKeyword}&page=${page}&size=7&sort=id,asc`);
//       const newData = response.data.data;

//       // Update the state with the new data
//       setData(newData);
//     } catch (error) {
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const handleDeleteButtonClick = async (surveyId) => {
//     try {
//       await axios.delete(`http://localhost:8081/surveys/${surveyId}`);
//       handleRecentButtonClick();
//     } catch (error) {
//       console.error('Failed to delete survey', error);
//     }
//   }

//   const handleShowMoreButtonClick = () => {
//     setPage((prevPage) => prevPage + 1); // Increment the page number
//   }

//   const handleViewListIconClick = () => {
//     setShowDetailedList(!showDetailedList);
//     setShowModuleView(false);
//   }

//   const handleViewModuleIconClick = () => {
//     setShowModuleView(!showModuleView);
//     setShowDetailedList(false);
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response;
//         if (filterKeyword) {
//           response = await axios.get(`http://localhost:8081/surveys/search?query=${filterKeyword}&page=${page}&size=7&sort=id,asc`);
//         } else {
//           response = await axios.get(`http://localhost:8081/surveys/pageable?page=${page}&size=7&sort=id,asc`);
//         }

//         const newData = response.data.data;

//         // Update the state with the new data
//         setData((prevData) => [...prevData, ...newData]);
//       } catch (error) {
//         console.error('Failed to fetch data', error);
//       }
//     };

//     fetchData(); // Fetch data on component mount and when page or filterKeyword changes
//   }, [filterKeyword, page, showModuleView]);

//   return (
//     <div className="">
//       <h1 className="text-3xl bg-teal-700 text-slate-50 px-[20px] py-[10px]"> <AppsIcon /> Forms  </h1>
//       <div className="bg-gray-200 px-[30px] py-[50px]">
//         <button className="bg-teal-700 text-white px-[20px] py-[6px] rounded gap-8" onClick={handleButtonClick}> <FeedIcon />  New Form </button>
//       </div>
//       <div className="flex">
//         <div>
//           <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 text-xm px-[15px] py-[4px] rounded-full mt-8 ml-[50px]" onClick={handleRecentButtonClick}> <AccessTimeIcon />  Recent </button>
//           <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 px-[17px] py-[4px] rounded-full mt-8 ml-[40px] " onClick={handleMyFormsButtonClick}> <InsertDriveFileIcon /> My forms </button>
//         </div>
//         <div className="flex">
//           <input
//             type="text"
//             className="border-2 border-gray-300 px-4 py-1 mt-8 ml-[550px]"
//             placeholder="Filter by keyword"
//             value={filterKeyword}
//             onChange={(e) => setFilterKeyword(e.target.value)}
//           />
//           <div className="flex mt-[35px] ml-[40px]">
//             <div className=" text-gray-500 cursor-pointer" onClick={handleViewListIconClick}>< ViewListIcon /></div>
//             <div className=" text-teal-800 ml-[20px] cursor-pointer" onClick={handleViewModuleIconClick}> <ViewModuleIcon /></div>
//           </div>
//         </div>
//       </div>
//       {showModuleView && !showDetailedList && data.length > 0 ? (
//         <div className="flex flex-wrap ">
//           {data.map((item, index) => (
//             <div key={index} style={{ backgroundImage: `url(${recent})` }} className="text-white p-10 mt-7 ml-[40px]">
//               <h2 className="text-xl font-bold">{item.title}</h2>
//               <p className="mt-[6px]">Created Date: {item.createdDate}</p>
//               <p>Created By: {item.createdBy}</p>
//               <p>{item.surveyCount} Response</p>
//               <button onClick={() => handleDeleteButtonClick(item.id)} className="text-white px-5 ml-[120px] mt-[20px]">
//                 <DeleteIcon />
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : null}
//       {showDetailedList && data.length > 0 ? (
//         <div className="mt-4 ml-[40px]">
//           <ul>
//             {data.map((item, index) => (
//               <li key={index} className="text-xl font-bold mb-2">
//                 {item.title} - Created By: {item.createdBy}, Created Date: {item.createdDate}, Response: {item.surveyCount}
//                 <button onClick={() => handleDeleteButtonClick(item.id)} className="text-red-500 ml-2">
//                   <DeleteIcon />
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : null}
//       <button
//         onClick={handleShowMoreButtonClick}
//         className="text-black px-[20px] py-[6px] rounded mt-4 ml-[50px]"
//       >
//         Show More
//         <KeyboardArrowDownIcon />
//       </button>
//     </div>
//   );
// };



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AppsIcon from '@mui/icons-material/Apps';
// import FeedIcon from '@mui/icons-material/Feed';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// import recent from "../assets/recent.png";
// import DeleteIcon from '@mui/icons-material/Delete';
// import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import axios from 'axios';

// export const Form = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [filterKeyword, setFilterKeyword] = useState('');
//   const [page, setPage] = useState(0);
//   const [showDetailedList, setShowDetailedList] = useState(false);
//   const [showModuleView, setShowModuleView] = useState(true);

// const handleCardClick = (surveyId) => {
//     // You can store the surveyId in localStorage or pass it as a parameter to the next page
//     localStorage.setItem('selectedSurveyId', surveyId);
//     navigate('/questions-page');
//   };

//   const handleButtonClick = () => {
//     localStorage.removeItem('title');
//     localStorage.removeItem('description');
//     navigate('/home');
//   }

//   const handleRecentButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/pageable?page=${page}&size=7&sort=id,asc`);
//       const newData = response.data.content;
//       setData((prevData) => [...prevData, ...newData]);
//     } catch (error) {
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const handleMyFormsButtonClick = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8081/surveys/search?query=${filterKeyword}&page=${page}&size=7&sort=id,asc`);
//       const newData = Array.isArray(response.data.content) ? response.data.content : [];
//       // const newData = response.data.content;
//       setData((prevData) => [...prevData, ...newData]);
//     } catch (error) {
//       console.error('Failed to fetch data', error);
//     }
//   }

//   const handleDeleteButtonClick = async (surveyId) => {
//     try {
//       await axios.delete(`http://localhost:8081/surveys/${surveyId}`);
//       handleRecentButtonClick();
//     } catch (error) {
//       console.error('Failed to delete survey', error);
//     }
//   }

//   const handleShowMoreButtonClick = () => {
//     setPage((prevPage) => prevPage + 1);
//   }

//   const handleViewListIconClick = () => {
//     setShowDetailedList(!showDetailedList);
//     setShowModuleView(false);
//   }

//   const handleViewModuleIconClick = () => {
//     setShowModuleView(!showModuleView);
//     setShowDetailedList(false);
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response;
//         if (filterKeyword) {
//           response = await axios.get(`http://localhost:8081/surveys/search?query=${filterKeyword}&page=${page}&size=7&sort=id,asc`);
//         } else {
//           response = await axios.get(`http://localhost:8081/surveys/pageable?page=${page}&size=7&sort=id,asc`);
//         }

//         // const newData = response.data.content;
//         const newData = Array.isArray(response.data.content) ? response.data.content : [];
//         setData((prevData) => [...prevData, ...newData]);
//       } catch (error) {
//         console.error('Failed to fetch data', error);
//       }
//     };

//     fetchData();

//   }, [filterKeyword, page, showModuleView]);

  

//   return (
//     <div className="">
//       <h1 className="text-3xl bg-teal-700 text-slate-50 px-[20px] py-[10px]"> <AppsIcon /> Forms </h1>
//       <div className="bg-gray-200 px-[30px] py-[50px]">
//         <button className="bg-teal-700 text-white px-[20px] py-[6px] rounded gap-8" onClick={handleButtonClick}> <FeedIcon /> New Form </button>
//       </div>
//       <div className="flex">
//         <div>
//           <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 text-xm px-[15px] py-[4px] rounded-full mt-8 ml-[50px]" onClick={handleRecentButtonClick}> <AccessTimeIcon /> Recent </button>
//           <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 px-[17px] py-[4px] rounded-full mt-8 ml-[40px] " onClick={handleMyFormsButtonClick}> <InsertDriveFileIcon /> My forms </button>
//         </div>
//         <div className="flex">
//           <input
//             type="text"
//             className="border-2 border-gray-300 px-4 py-1 mt-8 ml-[550px]"
//             placeholder="Filter by keyword"
//             value={filterKeyword}
//             onChange={(e) => setFilterKeyword(e.target.value)}
//           />
//           <div className="flex mt-[35px] ml-[40px]">
//             <div className=" text-gray-500 cursor-pointer" onClick={handleViewListIconClick}>< ViewListIcon /></div>
//             <div className=" text-teal-800 ml-[20px] cursor-pointer" onClick={handleViewModuleIconClick}> <ViewModuleIcon /></div>
//           </div>
//         </div>
//       </div>
//       {showModuleView && !showDetailedList && data && data.length > 0 ? (
//         <div className="flex flex-wrap ">
//           {data.map((item, index) => (
//             <div key={index} style={{ backgroundImage: `url(${recent})` }} className="text-white p-10 mt-7 ml-[40px]">
//               <h2 className="text-xl font-bold">{item.title}</h2>
//               <p className="mt-[6px]">Created Date: {item.createdDate}</p>
//               <p>Created By: {item.createdBy}</p>
//               <p>{item.surveyCount} Response</p>
//               <button onClick={() => handleDeleteButtonClick(item.id)} className="text-white px-5 ml-[120px] mt-[20px]">
//                 <DeleteIcon />
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : null}
//       {showDetailedList && data && data.length > 0 ? (
//         <div className="mt-4 ml-[40px]">
//           <ul>
//             {data.map((item, index) => (
//               <li key={index} className="text-xl font-bold mb-2">
//                 {item.title} - Created By: {item.createdBy}, Created Date: {item.createdDate}, Response: {item.surveyCount}
//                 <button onClick={() => handleDeleteButtonClick(item.id)} className="text-red-500 ml-2">
//                   <DeleteIcon />
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : null}
//       <button
//         onClick={handleShowMoreButtonClick}
//         className="text-black px-[20px] py-[6px] rounded mt-4 ml-[50px]"
//       >
//         Show More
//         <KeyboardArrowDownIcon />
//       </button>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import FeedIcon from '@mui/icons-material/Feed';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import recent from "../assets/recent.png";
import DeleteIcon from '@mui/icons-material/Delete';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import axios from 'axios';

export const Form = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filterKeyword, setFilterKeyword] = useState('');
  const [page, setPage] = useState(0);
  const [showDetailedList, setShowDetailedList] = useState(false);
  const [showModuleView, setShowModuleView] = useState(true);


  
// const handleCardClick = (surveyId) => {
//     // You can store the surveyId in localStorage or pass it as a parameter to the next page
//     // localStorage.setItem('selectedSurveyId', surveyId);
//     console.log('Clicked on card with surveyId:', surveyId);
//     navigate('/home', { state: { surveyId } });
//   };

const handleCardClick = async (surveyId) => {
  try {
    const response = await axios.get(`http://localhost:8081/surveys/${surveyId}/questions`);
    const questionsData = response.data;
    navigate('/home', { state: { surveyId, questionsData } });
  } catch (error) {
    console.error('Failed to fetch questions', error);
  }
};


  const handleButtonClick = () => {
    localStorage.removeItem('title');
    localStorage.removeItem('description');
    navigate('/home');
  }

  const handleRecentButtonClick = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/surveys/pageable?page=${page}&size=7&sort=id,asc`);
      const newData = response.data.content;
      setData((prevData) => [...prevData, ...newData]);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  }

  const handleMyFormsButtonClick = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/surveys/search?query=${filterKeyword}&page=${page}&size=7&sort=id,asc`);
      const newData = Array.isArray(response.data.content) ? response.data.content : [];
      // const newData = response.data.content;
      setData((prevData) => [...prevData, ...newData]);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  }

  const handleDeleteButtonClick = async (surveyId) => {
    try {
      await axios.delete(`http://localhost:8081/surveys/${surveyId}`);
      handleRecentButtonClick();
    } catch (error) {
      console.error('Failed to delete survey', error);
    }
  }

  const handleShowMoreButtonClick = () => {
    setPage((prevPage) => prevPage + 1);
  }

  const handleViewListIconClick = () => {
    setShowDetailedList(!showDetailedList);
    setShowModuleView(false);
  }

  const handleViewModuleIconClick = () => {
    setShowModuleView(!showModuleView);
    setShowDetailedList(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (filterKeyword) {
          response = await axios.get(`http://localhost:8081/surveys/search?query=${filterKeyword}&page=${page}&size=7&sort=id,asc`);
        } else {
          response = await axios.get(`http://localhost:8081/surveys/pageable?page=${page}&size=7&sort=id,asc`);
        }

        // const newData = response.data.content;
        const newData = Array.isArray(response.data.content) ? response.data.content : [];
        setData((prevData) => [...prevData, ...newData]);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();

  }, [filterKeyword, page, showModuleView]);

  

  return (
    <div className="">
      <h1 className="text-3xl bg-teal-700 text-slate-50 px-[20px] py-[10px]"> <AppsIcon /> Forms </h1>
      <div className="bg-gray-200 px-[30px] py-[50px]">
        <button className="bg-teal-700 text-white px-[20px] py-[6px] rounded gap-8" onClick={handleButtonClick}> <FeedIcon /> New Form </button>
      </div>
      <div className="flex">
        <div>
          <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 text-xm px-[15px] py-[4px] rounded-full mt-8 ml-[50px]" onClick={handleRecentButtonClick}> <AccessTimeIcon /> Recent </button>
          <button className="bg-gray-300 hover:bg-gray-500 hover:text-white text-slate-600 px-[17px] py-[4px] rounded-full mt-8 ml-[40px] " onClick={handleMyFormsButtonClick}> <InsertDriveFileIcon /> My forms </button>
        </div>
        <div className="flex">
          <input
            type="text"
            className="border-2 border-gray-300 px-4 py-1 mt-8 ml-[550px]"
            placeholder="Filter by keyword"
            value={filterKeyword}
            onChange={(e) => setFilterKeyword(e.target.value)}
          />
          <div className="flex mt-[35px] ml-[40px]">
            <div className=" text-gray-500 cursor-pointer" onClick={handleViewListIconClick}>< ViewListIcon /></div>
            <div className=" text-teal-800 ml-[20px] cursor-pointer" onClick={handleViewModuleIconClick}> <ViewModuleIcon /></div>
          </div>
        </div>
      </div>
      {showModuleView && !showDetailedList && data && data.length > 0 ? (
        <div className="flex flex-wrap ">
          {data.map((item, index) => (
            <div key={index} style={{ backgroundImage: `url(${recent})` }} className="text-white p-10 mt-7 ml-[40px]" onClick={() => handleCardClick(item.id)}>
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="mt-[6px]">Created Date: {item.createdDate}</p>
              <p>Created By: {item.createdBy}</p>
              <p>{item.surveyCount} Response</p>
              <button onClick={() => handleDeleteButtonClick(item.id)} className="text-white px-5 ml-[120px] mt-[20px]">
                <DeleteIcon />
              </button>
            </div>
          ))}
        </div>
      ) : null}
      {showDetailedList && data && data.length > 0 ? (
        <div className="mt-4 ml-[40px]">
          <ul>
            {data.map((item, index) => (
              <li key={index} className="text-xl font-bold mb-2">
                {item.title} - Created By: {item.createdBy}, Created Date: {item.createdDate}, Response: {item.surveyCount}
                <button onClick={() => handleDeleteButtonClick(item.id)} className="text-red-500 ml-2">
                  <DeleteIcon />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <button
        onClick={handleShowMoreButtonClick}
        className="text-black px-[20px] py-[6px] rounded mt-4 ml-[50px]"
      >
        Show More
        <KeyboardArrowDownIcon />
      </button>
    </div>
  );
};