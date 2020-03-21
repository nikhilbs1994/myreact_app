import React from 'react';

class Data extends React.Component {
    render() {
      return <h1>{process.env.REACT_APP_NOT_SECRET_CODE}</h1>;
    }
}

export default Data;
