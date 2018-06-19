import React, { Component } from 'react';
import axios from 'axios';

import './index.css';

class Home extends Component {
  componentWillMount() {
    axios('https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBhVKdgDSbR2LSxSIG2V9ZSuCvh4NtPiUY&electionId=2000&address=colorado')
      .then(res => console.log(res));
  }
  render() {
    return (
      <div className="Home">
        <p>Hello, world!</p>
      </div>
    );
  }
}

export default Home;
