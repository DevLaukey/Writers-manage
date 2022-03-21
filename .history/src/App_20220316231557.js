import Availableorders from "./components/Availableorders";
import Login from "./components/Login";
import Form from "./components/UploadForm";
import { positions, Provider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";
const options = {
  position: positions.MIDDLE,
};
function App() {
  return (
    <Provider template={AlertMUITemplate} {...options}>
      <Availableorders/>
    </Provider>
  );
}

export default App;
