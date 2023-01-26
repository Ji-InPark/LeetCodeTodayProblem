import React, {useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function Updater() {
  useEffect(() => {
    axios.post<string>('https://lctp.fly.dev/').then(() => {
    });
  }, []);

  return <Link to={'/'}>Go to updated url</Link>;
}

export default Updater;