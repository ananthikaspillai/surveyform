
import React from 'react';

const TitleComponent = ({ title, setTitle,description, setDescription  }) => {
  return (
<div className="relative">
    <textarea
      className="shadow appearance-none  w-[600px]  px-2  mb-4 mt-[20px] ml-[50px]   border-b-2  focus:outline-none focus:border-green-700 p-2"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
    />
    <textarea
    className="shadow  w-[600px] font-light   px-2 text-gray-700  mb-4 mt-[10px] ml-[50px]   border-b-2  focus:outline-none focus:border-green-700 p-2"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Description"
  />
  </div>
  );
};

export default TitleComponent;
