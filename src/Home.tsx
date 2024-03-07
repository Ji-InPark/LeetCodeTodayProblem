import React, {useEffect} from 'react';
import axios from "axios";

function Home() {

  useEffect(() => {
    axios.get<string>('https://lctp.fly.dev/').then((response) => {
      window.open(response.data, '_self');
    });
  }, []);

  return <h1>
    Something went wrong..! Please try again later.
  </h1>;
}

export default Home;