import { Grid, ListItem } from '@mui/material';
import React from 'react'

function Form() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
            <p>Paste the instructions</p>
            <input type="text" />
      </Grid>
    </Grid>
  );
}

export default Form