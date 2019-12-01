import React, { Component } from "react";
import VideoList from "./components/VideoList";
import sampleData from "./sampleData/sampleData";
import "./App.css";

class App extends Component {
  state = {
    videoList: sampleData
  };

  render() {
    const { videoList } = this.state;
    return (
      <div>
        <VideoList data={videoList} />
      </div>
    );
  }
}

export default App;
