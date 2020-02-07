import React from 'react';

import history from '../../utils/history';

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          history.push('/first');
        }}
      >
        First
      </button>
      <br />
      <button
        onClick={() => {
          history.push('/calc');
        }}
      >
        Calc
      </button>
    </>
  )
};

export default Dashboard;
