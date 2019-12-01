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
            <li key={index} style={{ listStyle: "none" }}>
              <VideoItem
                name={d.name}
                description={d.description}
                videoLink={d.videoLink}
                height={d.height}
              />
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
