import { Stack, TextField } from "@mui/material";
import { DropzoneArea, DropzoneAreaBase } from "material-ui-dropzone";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DateTimePicker } from "@mui/lab";
import axios from "axios";
import { Alert } from "@mui/material";


const theme = createTheme();

function Form() {
  const [files, setFiles] = useState([]);
  const [instructions, setInstructions] = useState();
  const [paperId, setPaperId] = useState();
  const [time, setTime] = useState(null);
  const [numberPages, setNumberPages] = useState();
  const [costPerPage, setCostPerPage] = useState();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
   const [open, setOpen] = React.useState(false);

   const handleClick = () => {
     setOpen(true);
   };

   const handleClose = (event, reason) => {
     if (reason === "clickaway") {
       return;
     }

     setOpen(false);
   };

  const uploadForm = (event) => {
    console.log(time);
    event.preventDefault();

    if (
      paperId == undefined ||
      costPerPage == undefined ||
      numberPages == undefined ||
      instructions == undefined ||
      files == undefined
    ) {
      alert("Please enter all the required parameters");
    } else {
      const data = {
        paperId: paperId,
        costPerPage: costPerPage,
        instructions: instructions,
        deadline: time,
        pages: numberPages,
        attachments: files,
      };
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      axios
        .post("http://localhost:3000/orders", data, config)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          error.message = error.message;
        });
    }
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
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              required
              style={{
                marginBottom: 3,
              }}
              InputProps={{
                style: {
                  color: "black",
                },
              }}
              value={instructions}
              id="outlined-required"
              onChange={(e) => setInstructions(e.target.value)}
              label="Instructions"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  style={{
                    marginBottom: 3,
                  }}
                  InputProps={{
                    style: {
                      color: "black",
                    },
                  }}
                  renderInput={(props) => <TextField {...props} />}
                  label="DeadLine"
                  value={time}
                  onChange={(newValue) => {
                    setTime(newValue);
                  }}
                />
              </LocalizationProvider>
            </LocalizationProvider>
            <TextField
              style={{
                marginBottom: 3,
              }}
              InputProps={{
                style: {
                  color: "black",
                },
              }}
              required
              className="text"
              value={paperId}
              id="outlined-required"
              onChange={(e) => setPaperId(e.target.value)}
              label="PaperId"
            />

            <TextField
              style={{
                marginBottom: 3,
              }}
              InputProps={{
                style: {
                  color: "black",
                },
              }}
              required
              className="text"
              value={numberPages}
              id="outlined-required"
              onChange={(e) => setNumberPages(e.target.value)}
              label="Number of Pages"
            />
            <TextField
              style={{
                marginBottom: 3,
              }}
              InputProps={{
                style: {
                  color: "black",
                },
              }}
              type="number"
              required
              className="text"
              value={costPerPage}
              id="outlined-required"
              onChange={(e) => setCostPerPage(e.target.value)}
              label="Cost per page"
            />

            <DropzoneArea onDrop={(files) => setFiles(files)} />

            <Button
              onClick={uploadForm}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              UPLOAD
            </Button>
          </Box>
        </Box>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Button variant="outlined" onClick={handleClick}>
            Open success snackbar
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              This is a success message!
            </Alert>
          </Snackbar>
          <Alert severity="error">This is an error message!</Alert>
          <Alert severity="warning">This is a warning message!</Alert>
          <Alert severity="info">This is an information message!</Alert>
          <Alert severity="success">This is a success message!</Alert>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default Form;
