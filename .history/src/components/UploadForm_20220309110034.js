import {
  Box,
  Button,
  Fab,
  FormControl,
  Grid,
  InputLabel,
  ListItem,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  FormGroup,
} from "@mui/material";
import { DropzoneArea } from "material-ui-dropzone";
import React, { useState } from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";


function Form() {
  const [files, setFiles] = useState([]);
  const [instructions, setInstructions] = useState();
  const [date, setDate] = useState();
  const handleDrop = (e) => {
          setFiles(e)
          }
  console.log(files);
  return (
    <Grid container spacing={1}>
      <Grid item xs={6} md={6}>
        <p>Paste the instructions:</p>
        <TextField
          required
          value={instructions}
          id="outlined-required"
          onChange={(e) => setInstructions(e.target.value)}
          label="Instructions"
        />
      </Grid>
      <Grid item xs={6} md={8}>
        <p>DeadLine:</p>
        <DateTimePicker
          label="Date&Time picker"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          renderInput={(params) => <TextField {...params} />}
        />
      </Grid>
      <Grid item xs={6} md={8}>
        <p>Paper ID :</p>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Paper Id"
        />
      </Grid>
      <Grid item xs={6} md={8}>
        <p>Cost per page :</p>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
      </Grid>
      <Grid item xs={6} md={8}>
        <p>Attach Document: </p>
        <DropzoneArea
          previewText="true"
          onDrop={handleDrop}
          // onDrop={setFiles(file)}
        />
      </Grid>
    </Grid>
  );
}

export default Form;
