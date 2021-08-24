import React from "react";
import VideoItem from "./VideoItem";

// TODO: change return value to videoItem rendered with video details

const VideoQueue = (props) => {
  return (
    <div>
      <button onClick={() => props.onAddToQueue(props.selectedVideo)}>
        Add Video to Queue
      </button>
      <h1>Video Queue</h1>
      {props.list
        ? props.list.map((video) => {
            return <p>Video Saved</p>;
          })
        : null}
    </div>
  );
};

export default VideoQueue;
