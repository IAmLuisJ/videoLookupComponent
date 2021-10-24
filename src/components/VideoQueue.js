import React from "react";
import VideoItem from "./VideoItem";

const VideoQueue = (props) => {
  return (
    <div>
      <button
        disabled={props.selectedVideo == null ? true : false}
        className="ui primary button"
        onClick={() => props.onAddToQueue(props.selectedVideo)}
      >
        Add Video to Queue
      </button>
      <button className="ui button" onClick={() => props.onPlayQueue()}>
        Play Queue
      </button>
      <button className="ui button" onClick={() => props.onPauseQueue()}>
        Pause Queue
      </button>
      <h1>Video Queue</h1>
      {props.list
        ? props.list.map((video) => {
            return (
              <VideoItem
                video={video}
                key={video.etag}
                onVideoSelect={props.onVideoSelect}
              />
            );
          })
        : null}
    </div>
  );
};

export default VideoQueue;
