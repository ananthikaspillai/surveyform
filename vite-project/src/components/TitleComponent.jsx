
import React from 'react';

const TitleComponent = ({ title, setTitle,description, setDescription  }) => {
  return (
<div>
    <textarea
      className="shadow appearance-none  w-[600px] py-1 px-2  mb-4"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
    />
    <textarea
    className="shadow  w-[600px] py-1 px-2 text-gray-700  mb-4"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Description"
  />
  </div>
  );
};

export default TitleComponent;
