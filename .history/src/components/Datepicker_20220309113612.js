import React from 'react'
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";


function Datepicker() {
 const [value, setValue] = React.useState(null);

 return (
   <LocalizationProvider dateAdapter={AdapterDateFns}>
     <LocalizationProvider dateAdapter={AdapterDateFns}>
       <DateTimePicker
         renderInput={(props) => <TextField {...props} />}
         label="DateTimePicker"
         value={value}
         onChange={(newValue) => {
           setValue(newValue);
         }}
       />
     </LocalizationProvider>
   </LocalizationProvider>
 );
}

export default Datepicker


