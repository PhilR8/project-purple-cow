import { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";

import countapi from "countapi-js";

import EmojiContainer from "./components/emoji-container"

import "./App.css";

const COUNT_API_KEY = "1ccb732e-b55a-4404-ad3f-0f99c02fe44e";

const App = () => {
  const [count, updateCount] = useState(0);

  const setCount = (apiResponse) => {
    updateCount(apiResponse?.value ?? 0);
  };

  useEffect(() => {
    const fetchCount = async () => {
      const result = await countapi.get(COUNT_API_KEY);
      setCount(result);
    };

    fetchCount();
  }, []);

  const clickHandler = async () => {
    const result = await countapi.hit(COUNT_API_KEY);
    setCount(result);
  };

  return (
    <div className="App">
      <div className="cow-brand">
        <EmojiContainer decimalCode="&#128004;" color="purple"/>
      </div>
      <div className="count">{count.toLocaleString()}</div>
      <div className="incrementor">
        <Button variant="outlined" size="large" onClick={clickHandler}>
          <span>+1&nbsp;</span>
          <EmojiContainer decimalCode="&#128591;" />
        </Button>
      </div>
    </div>
  );
}

export default App;
