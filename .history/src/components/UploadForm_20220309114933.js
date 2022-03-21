import { Grid, TextField } from "@mui/material";
import { DropzoneArea } from "material-ui-dropzone";
import React, { useState } from "react";
import Datepicker from "./Datepicker";

function Form() {
  const [files, setFiles] = useState([]);
  const [instructions, setInstructions] = useState();
  const [paperId, setPaperId] = useState();
  const [costPerPage, setCostPerPage] = useState();
  const handleDrop = (e) => {
    setFiles(e);
  };
  console.log(files);
  return (
    <ThemeProvider theme={theme}>
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
        >
           <Typography component="h1" variant="h5">
        Sign in
      </Typography>
          </Box>
      </Container>
      </ThemeProvider>
    


   
      <Grid item xs={6} md={8}>
        <p>DeadLine:</p>
        
      </Grid>
      <Grid item xs={6} md={8}>
        <p>Paper ID :</p>
        <TextField
          required
          value={paperId}
          id="outlined-required"
          onChange={(e) => setPaperId(e.target.value)}
          label="PaperId"
        />
      </Grid>
      <Grid item xs={6} md={8}>
        <p>Cost per page :</p>
        <TextField
          type="number"
          required
          value={costPerPage}
          id="outlined-required"
          onChange={(e) => setCostPerPage(e.target.value)}
          label="Cost per page"
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

<ThemeProvider theme={theme}>
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
       <TextField
          required
          value={instructions}
          id="outlined-required"
          onChange={(e) => setInstructions(e.target.value)}
          label="Instructions"
        />
        <Datepicker />
        {/* <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        /> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      
      </Box>
    </Box>
  </Container>
</ThemeProvider>;