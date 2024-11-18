import React from 'react';

const ModerationReport = ({ reports }) => {
  const totalReports = reports.length;
  const reviewedCount = reports.filter((report) => report.status === 'Reviewed').length;
  const deletedCount = reports.filter((report) => report.status === 'Deleted').length;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Moderation Summary Report</h2>
      <p>Total Reported Posts: {totalReports}</p>
      <p>Reviewed Posts: {reviewedCount}</p>
      <p>Deleted Posts: {deletedCount}</p>
    </div>
  );
};

export default ModerationReport;
