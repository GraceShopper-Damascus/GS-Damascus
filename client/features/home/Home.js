import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const { firstName, lastName } = useSelector((state) => state.auth.me);

  return (
    <div>
      <h3>Welcome {firstName} {lastName},</h3>
      <p></p>
    </div>
  );
};

export default Home;
