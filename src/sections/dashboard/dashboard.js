import React from 'react';

class Dashboard extends React.Component {
  render() {
    return <h1>{process.env.REACT_APP_API_BASE_URL}</h1>;
  }
}

export default Dashboard;
