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
import React from "react";

function Form() {
  	const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
      setSelectedFile(event.target.files[0]);
      setIsSelected(true);
    };

    const handleSubmission = () => {};
  return (
    <Grid container spacing={1}>
      <Grid item xs={6} md={6}>
        <p>Paste the instructions:</p>
      </Grid>

      <Grid item xs={6} md={6}>
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
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
      </Grid>
      <Grid item xs={6} md={8}>
        <p>Attach Document: </p>
        <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
          <div>
            <input type="file" name="file" onChange={changeHandler} />
            {isSelected ? (
              <div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
                <p>
                  lastModifiedDate:{" "}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
            <div>
              <button onClick={handleSubmission}>Submit</button>
            </div>
          </div>{" "}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Form;
