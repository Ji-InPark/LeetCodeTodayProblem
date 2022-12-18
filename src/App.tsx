import React, {useEffect} from 'react';
import './App.css';
import axios from "axios";
import ReactGA from 'react-ga4';

ReactGA.initialize('G-K9ZBLSZZFE');

function App() {
  ReactGA.send({hitType: 'pageview', page: '/'});
  
  useEffect(() => {
    axios.get<string>('https://lctp.fly.dev/').then((response) => {
      console.log(response)
      window.open(response.data, '_self');
    });
  }, []);

  return <></>;
}

export default App;
