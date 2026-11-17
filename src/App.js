import { Button } from "./components/Button";
import { Greeting } from "./components/Greeting";
import { Message } from "./components/Message";

function App() {
  return (
    <>
      <Greeting name={"Sviat"} />
      <Message text={"Are we..."} />
      <Button onClick={console.log("Excellent. Truly excellent.")} />
    </>
  );
}

export default App;
