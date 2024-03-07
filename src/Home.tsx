import React, {useEffect} from 'react';
import axios from "axios";

function Home() {

  useEffect(() => {
    axios.get<string>('https://lctp.fly.dev/').then((response) => {
      window.open(response.data, '_self');
    });
  }, []);

  return <h1>
    Leetcode click service have been blocked by Leedcode.
    <br/>
    Please click <a href={'https://leetcode.com'}>here</a> to go to Leetcode.
    <br/>
    Thank you for using our service. This website will be closed soon.
  </h1>;
}

export default Home;