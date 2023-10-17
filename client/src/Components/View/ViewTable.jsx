import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons'; // Import Material-UI icons

import './style.css'; // Import the custom CSS

const MyTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your database, for example, using an API
    // Replace this with actual data fetching code
    fetch('your-database-endpoint')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      <Typography variant="h4" component="h2">
        View Items
      </Typography>
      <TableContainer component={Paper} className="table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="table-header-cell">Field 1</TableCell>
              <TableCell className="table-header-cell">Field 2</TableCell>
              <TableCell className="table-header-cell">Field 3</TableCell>
              <TableCell className="table-header-cell">Field 4</TableCell>
              <TableCell className="table-header-cell">Field 5</TableCell>
              <TableCell className="table-header-cell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="table-cell">{item.field1}</TableCell>
                <TableCell className="table-cell">{item.field2}</TableCell>
                <TableCell className="table-cell">{item.field3}</TableCell>
                <TableCell className="table-cell">{item.field4}</TableCell>
                <TableCell className="table-cell">{item.field5}</TableCell>
                <TableCell className="table-cell">
                  <IconButton className="icon">
                    <Edit />
                  </IconButton>
                  <IconButton className="icon">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyTable;