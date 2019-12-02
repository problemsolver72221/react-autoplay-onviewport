import React from "react";
import propTypes from "prop-types";
import VideoItem from "./VideoItem";

const VideoList = ({ data }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Autoplay Video On Viewport
      </h1>
      <ul>
        {data.map((d, index) => {
          return (
            <li
              key={index}
              className="video-viewport-container"
              style={{ listStyle: "none" }}
            >
              <h2 style={{ padding: "15px" }}>{d.name}</h2>
              <VideoItem videoLink={d.videoLink} />
              <p
                style={{ fontSize: "11pt", padding: "15px" }}
              >{`${d.description}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

VideoList.propTypes = {
  data: propTypes.array.isRequired
};

export default VideoList;
