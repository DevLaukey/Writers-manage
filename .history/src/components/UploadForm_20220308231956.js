import { Grid, ListItem } from '@mui/material';
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
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Item>1</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>2</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>3</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>4</Item>
      </Grid>
    </Grid>
  );
}

export default Form