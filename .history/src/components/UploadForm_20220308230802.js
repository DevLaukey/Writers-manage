import { Grid, ListItem } from '@mui/material';
import React from 'react'

function Form() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <ListItem>
          <div className="instruction">
          </div>
        </ListItem>
      </Grid>
      <Grid item xs={6} md={4}>
        <ListItem>xs=6 md=8</ListItem>
      </Grid>
      <Grid item xs={6} md={4}>
        <ListItem>xs=6 md=8</ListItem>
      </Grid>
      <Grid item xs={6} md={8}>
        <ListItem>xs=6 md=8</ListItem>
      </Grid>
    </Grid>
  );
}

export default Form