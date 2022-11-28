import React, {useEffect} from 'react';
import './App.css';
import axios from "axios";

function App() {
  const query = '\n    query questionOfToday {\n  activeDailyCodingChallengeQuestion {\n    date\n    userStatus\n    link\n    question {\n      acRate\n      difficulty\n      freqBar\n      frontendQuestionId: questionFrontendId\n      isFavor\n      paidOnly: isPaidOnly\n      status\n      title\n      titleSlug\n      hasVideoSolution\n      hasSolution\n      topicTags {\n        name\n        id\n        slug\n      }\n    }\n  }\n}\n    ';

  useEffect(() => {
    axios.post('/graphql', {query: query}).then((response) => {
      const link = response.data.data.activeDailyCodingChallengeQuestion.link;

      console.log(link);

      window.close();
      window.open('https://leetcode.com' + link, '_self');
    });
  }, []);

  return <></>;
}

export default App;
