import React, { useState } from 'react';
import './index.css'
import { Table } from '../public/Table';

function App() {
  const [headers, setHeaders] = useState([]);
  const [bodies, setBodies] = useState([]);

  const addHead = (newHeaderName) => {
    if(headers.length < 7) {
      setHeaders([...headers, <th key={headers.length}>{newHeaderName}</th>]);
    }
  };

  const addBody = (newBodyName) => {
    setBodies([...bodies, <tr key={headers.length}>{newBodyName}</tr>]);
  }

  return (
    <>
      <h1 className="title">Make Your Schedule</h1>
      <div className='buttons'>
        <button onClick={() => addHead(<input type='text'/>)}>ADD DAYS</button>
        <button onClick={() => addBody(<input type='text'/>)}>ADD TIME</button>
      </div>
      <Table headers={headers}  bodies={bodies}/>
    </>
  );
}

export default App
