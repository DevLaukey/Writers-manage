import {
  FormControl,
  Grid,
  InputLabel,
  ListItem,
  MenuItem,
  OutlinedInput,
  Select,
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
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={90}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={8}>
        <p>Paper ID :</p>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
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
