import React from 'react';

export function TableHeader({ headers }) {
  return (
    <thead>
      <tr>
        <th>Time &#128071; DAYS &#128073;</th>
        <th>
          {headers}
        </th>
      </tr>
    </thead>
  );
}