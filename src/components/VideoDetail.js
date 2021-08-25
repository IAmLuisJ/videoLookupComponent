import React from "react";

const VideoDetail = (props) => {
  if (!props.video) {
    return <div className="ui segment">Welcome to Video Hour!</div>;
  }

  let videoLink = "https://www.youtube.com/embed/";
  let videoParams = "?autoplay=0";
  videoLink = videoLink + props.video.id.videoId + videoParams;

  console.log("link", videoLink);
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoLink} title={props.video.snippet.title}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="item">{props.video.snippet.title}</h4>
        <p className="description">{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
