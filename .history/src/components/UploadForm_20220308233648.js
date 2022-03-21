import {
  FormControl,
  Grid,
  InputLabel,
  ListItem,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

function Form() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={6}>
        <p>Paste the instructions:</p>
      </Grid>

      <Grid item xs={6} md={8}>
        <FormControl sx={{ width: "25ch" }}>
          <OutlinedInput placeholder="Please enter text" />
        </FormControl>
      </Grid>
      <Grid item xs={6} md={8}>
        <p>DeadLine:</p>
        <TextField
          id="outlined-number"
          label="Deadline"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={8}>
        <p>Paper ID :</p>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
      </Grid>
      <Grid item xs={6} md={8}>
        <p>Cost per page :</p>
        <input type="text" />
      </Grid>
      <Grid item xs={6} md={8}>
        <p>Attach Document: </p>
        <input type="text" />
      </Grid>
    </Grid>
  );
}

export default Form;
