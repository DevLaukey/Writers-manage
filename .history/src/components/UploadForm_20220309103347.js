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

function Form() {
  const [files, setFiles] = useState([]);
  const handleDrop = (e) => {
            console.log("DCss");
          }
  
  return (
    <Grid container spacing={1}>
      <Grid item xs={6} md={6}>
        <p>Paste the instructions:</p>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
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
