import React, {useEffect} from 'react';
import './App.css';
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get<string>('https://lctp.fly.dev/').then((response) => {
      console.log(response)
      window.open(response.data, '_self');
    });
  }, []);

  return <></>;
}

export default App;
