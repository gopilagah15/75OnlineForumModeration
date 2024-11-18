import React from 'react';

const ReportedPostsList = ({ reports, handleModeration }) => {
  return (
    <div>
      <h2>Reported Posts</h2>
      {reports.length === 0 && <p>No reported posts.</p>}
      <ul>
        {reports.map((report, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>User:</strong> {report.username} <br />
            <strong>Post:</strong> {report.postContent} <br />
            <strong>Reason:</strong> {report.reason} <br />
            <strong>Status:</strong> {report.status} <br />
            {report.status === 'Pending' && (
              <>
                <button onClick={() => handleModeration(index, 'Reviewed')}>
                  Mark as Reviewed
                </button>
                <button onClick={() => handleModeration(index, 'Deleted')}>
                  Delete Post
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportedPostsList;
