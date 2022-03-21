import { TextField } from "@mui/material";
import { DropzoneArea } from "material-ui-dropzone";
import React, { useState } from "react";
import Datepicker from "./Datepicker";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
const styles = (theme) => ({
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "white",
  },
});

function Form() {
  const [files, setFiles] = useState([]);
  const [instructions, setInstructions] = useState();
  const [paperId, setPaperId] = useState();
  const [costPerPage, setCostPerPage] = useState();
  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(e);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            UPLOAD FORM
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              required
              style={{
                backgroundColor: "blue",
              }}
              InputProps={{
                style: {
                  color: "red",
                },
              }}
              value={instructions}
              id="outlined-required"
              onChange={(e) => setInstructions(e.target.value)}
              label="Instructions"
            />
            <Datepicker />
            <TextField
              required
              className="text"
              value={paperId}
              id="outlined-required"
              onChange={(e) => setPaperId(e.target.value)}
              label="PaperId"
            />
            <TextField
              type="number"
              required
              className="text"
              value={costPerPage}
              id="outlined-required"
              onChange={(e) => setCostPerPage(e.target.value)}
              label="Cost per page"
            />
            <DropzoneArea
              previewText="true"
              onDrop={handleDrop}
              // onDrop={setFiles(file)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              UPLOAD
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Form;
