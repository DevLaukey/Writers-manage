import { Grid, ListItem, Paper } from '@mui/material';
import React from 'react'
import { styled } from "@mui/system";


function Form() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Item>xs=2</Item>
        </Grid>
      ))}
    </Grid>
  );
}

export default Form