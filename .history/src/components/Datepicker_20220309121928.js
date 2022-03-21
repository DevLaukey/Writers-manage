import React from 'react'
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { DateTimePicker } from '@mui/lab';


function Datepicker() {
 const [value, setValue] = React.useState(null);

 return (
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


