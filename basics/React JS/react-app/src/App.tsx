import { Children, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [AlertVisible, setAlertVisibile] = useState(false);
  return (
    <div>
      {AlertVisible && (
        <Alert onClose={() => setAlertVisibile(false)}>How are you!</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibile(true)}>
        Show
      </Button>
    </div>
  );
}

export default App;
