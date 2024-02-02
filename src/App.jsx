import React, { useState } from 'react';
import './index.css'
import { Table } from '../public/Table';

function App() {
  const [headers, setHeaders] = useState([]);
  const [bodies, setBodies] = useState([]);

  const addHead = (newHeaderName) => {
    if(headers.length < 7) {
      setHeaders([...headers, 
      <th key={headers.length}>
        {newHeaderName}
      </th>]);
    }
  };

  const addBody = (newBodyName) => {
    setBodies([...bodies, 
      <tr key={headers.length}>
        {newBodyName}
        <td><input type='text' placeholder='add activiy'/></td>
      </tr>]);
  }

  return (
    <>
      <h1 className="title">Make Your Schedule</h1>
      <div className='buttons'>
        <button onClick={() => addHead(<input type='text' placeholder='name the day...' name='day'/>)}>ADD DAYS</button>
        <button onClick={() => addBody(<input type='text' placeholder='type the time...' name='time'/>)}>ADD TIME</button>
      </div>
      <Table headers={headers}  bodies={bodies}/>
    </>
  );
}

export default App
