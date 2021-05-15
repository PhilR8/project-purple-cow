import { useEffect, useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import countapi from "countapi-js";

const COUNT_API_KEY = "1ccb732e-b55a-4404-ad3f-0f99c02fe44e";

function App() {
  const [count, updateCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const result = await countapi.get(COUNT_API_KEY);
      updateCount(result?.value ?? 0);
    };

    fetchCount();
  }, []);

  const clickHandler = async () => {
    const result = await countapi.hit(COUNT_API_KEY);
    updateCount(result?.value ?? 0);
  };

  return (
    <div className="App">
      <div className="cow-emoji">&#128004;</div>
      <div className="count">{count.toLocaleString()}</div>
      <div className="incrementor">
        <Button variant="outlined" size="large" onClick={clickHandler}>
          +1
        </Button>
      </div>
    </div>
  );
}

export default App;
