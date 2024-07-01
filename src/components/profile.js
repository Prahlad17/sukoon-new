import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './userContext'; // Assuming you have a UserContext

const Profile = () => {
  const { user } = useContext(UserContext); // Access user data from context
  const [assessmentResults, setAssessmentResults] = useState([]); // State for assessment results

  // Fetch assessment results on component mount
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`http://localhost:3001/assessments/user/:userId${user}`); // Replace with your API endpoint
        const data = await response.json();
        setAssessmentResults(data.filter((result) => result.userId === user)); // Filter results for current user
      } catch (error) {
        console.error('Error fetching assessment results:', error);
      }
    };

    fetchResults();
  }, [user]); // Refetch results if user ID changes

  return (
    <div className="profile-container">
      <img src={user.profilePhoto} alt="Profile Photo" className="profile-photo" />
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <h2>Assessment Results</h2>
      <ul className="assessment-list">
        {assessmentResults.map((result) => (
          <li key={result.id}>
            <p>Date: {new Date(result.createdAt).toLocaleDateString()}</p> <p>Normalized Score: {result.normalizedScore}</p>
            <p>Suggestion: {result.textSuggestion}</p>
          </li>
        ))}
      </ul>
      {assessmentResults.length === 0 && <p>No assessment results found.</p>}
    </div>
  );
};

export default Profile;

