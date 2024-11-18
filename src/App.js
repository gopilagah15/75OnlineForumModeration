import React, { useState } from 'react'; 
import ReportForm from './components/ReportForm';
import ReportedPostsList from './components/ReportedPostsList';
import NotificationList from './components/NotificationList';
import ModerationReport from './components/ModerationReport';

const App = () => {
  const [reports, setReports] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Add a new reported post
  const addReport = (newReport) => {
    setReports([...reports, newReport]);
  };

  // Handle moderation actions
  const handleModeration = (index, action) => {
    const updatedReports = [...reports];
    const report = updatedReports[index];

    if (action === 'Reviewed') {
      report.status = 'Reviewed';
    } else if (action === 'Deleted') {
      report.status = 'Deleted';
    }

    // Add notification for the user
    setNotifications([
      ...notifications,
      `Post "${report.postContent}" was ${action} by moderator.`,
    ]);

    setReports(updatedReports);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Online Forum Moderation System</h1>
      <ReportForm addReport={addReport} />
      <ReportedPostsList reports={reports} handleModeration={handleModeration} />
      <NotificationList notifications={notifications} />
      <ModerationReport reports={reports} />
    </div>
  );
};

export default App;
