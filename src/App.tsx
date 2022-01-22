import "./App.css";
import { useError } from "react-use";
function App() {
  const dispatchError = useError();
  const handleClicked = () => {
    dispatchError(
      new Error("shit", {
        cause: {
          message: "something occurred",
          name: "BAD_REQUEST",
        },
      })
    );
  };

  return (
    <div className="App">
      <button onClick={handleClicked}>throw error</button>
    </div>
  );
}

export default App;
