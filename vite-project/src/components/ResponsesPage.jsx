import React, { useState } from 'react';

const ResponsesPage = () => {
  const [responses, setResponses] = useState(1); // Initialize responses to 1

  const handleSubmit = () => {
    setResponses(responses + 1); // Increment responses by 1
  };

  return (
    <div>
      <h1>{responses} Responses</h1>
      <button onClick={handleSubmit}>Submit Response</button>
    </div>
  );
};

export default ResponsesPage;






