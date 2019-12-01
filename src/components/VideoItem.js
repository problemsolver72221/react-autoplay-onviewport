import React, { useState } from "react";
import propTypes from "prop-types";
import ReactPlayer from "react-player";
import VisibilitySensor from "react-visibility-sensor";

const VideoItem = ({ name, description, videoLink, height }) => {
  const [isVisible, onChange] = useState({
    isVisible: false,
    onChange: isVisible => {
      isVisible ? (isVisible = false) : (isVisible = true);
    }
  });

  return (
    <VisibilitySensor onChange={onChange}>
      <div
        className={
          isVisible
            ? "video-viewport-container active"
            : "video-viewport-container"
        }
      >
        <h2 style={{ padding: "15px 0" }}>{name}</h2>
        <ReactPlayer
          url={videoLink}
          playing={isVisible ? true : false}
          width="100%"
          height={height}
        />
        <div>
          <p
            style={{ fontSize: "11pt", padding: "20px 0" }}
          >{`${description}`}</p>
        </div>
      </div>
    </VisibilitySensor>
  );
};

VideoItem.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  videoLink: propTypes.string.isRequired,
  height: propTypes.string.isRequired
};

export default VideoItem;
