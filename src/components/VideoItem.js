import React, { useState } from "react";
import propTypes from "prop-types";
import ReactPlayer from "react-player";
import VisibilitySensor from "react-visibility-sensor";

const VideoItem = ({ videoLink }) => {
  const [isVisible, onChange] = useState({
    isVisible: false,
    onChange: isVisible => {
      isVisible ? (isVisible = false) : (isVisible = true);
    }
  });

  return (
    <VisibilitySensor onChange={onChange}>
      <div className="player-container">
        <ReactPlayer
          url={videoLink}
          playing={isVisible ? true : false}
          width="100%"
          height="100%"
          config={{
            vimeo: {
              playerOptions: {
                controls: isVisible ? true : false
              }
            }
          }}
        />
      </div>
    </VisibilitySensor>
  );
};

VideoItem.propTypes = {
  videoLink: propTypes.string.isRequired
};

export default VideoItem;
