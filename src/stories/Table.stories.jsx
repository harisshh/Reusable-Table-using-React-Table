import React from 'react';
import Table from './Table'; // Update the path accordingly

export default {
  title: 'Reusable/Table',
  component: Table,
};

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
];

const data = [
  { name: 'John Doe', age: 25 },
  { name: 'Jane Smith', age: 30 },
  // Add more data rows as needed
];

export const Default = () => <Table columns={columns} data={data} />;
