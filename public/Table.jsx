import React from 'react';
import { TableHeader } from './TableHead';
import { TableBody } from './TableBody';

export function Table({ headers, bodies }) {
  return (
    <table>
      <TableHeader headers={headers} />
      <TableBody bodies={bodies} />
    </table>
  );
}