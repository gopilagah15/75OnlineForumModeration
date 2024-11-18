import React, { useState } from 'react';

const ReportForm = ({ addReport }) => {
  const [username, setUsername] = useState('');
  const [postContent, setPostContent] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !postContent || !reason) {
      alert('Please fill all fields!');
      return;
    }

    const newReport = {
      username,
      postContent,
      reason,
      status: 'Pending',
    };

    addReport(newReport);
    setUsername('');
    setPostContent('');
    setReason('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Post Content"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Reason for Report"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <button type="submit">Report Post</button>
    </form>
  );
};

export default ReportForm;
