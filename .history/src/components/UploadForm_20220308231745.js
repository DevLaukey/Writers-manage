import { Grid, ListItem } from '@mui/material';
import React from 'react'

function Form() {
  return (
    <Grid container spacing={1}>
  <Grid container item spacing={3}>
    <FormRow />
  </Grid>
  <Grid container item spacing={3}>
    <FormRow />
  </Grid>
  <Grid container item spacing={3}>
    <FormRow />
  </Grid>
</Grid>
  );
}

export default Form