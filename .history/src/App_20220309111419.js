import Login from "./components/Login";
import Form from "./components/UploadForm";// or @mui/lab/Adapter{Dayjs,Luxon,Moment} or any valid date-io adapter
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Form />
    </LocalizationProvider>
  );
}

export default App;
