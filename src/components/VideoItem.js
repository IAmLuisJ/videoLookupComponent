import React from 'react';

const VideoItem = (props) => {
    return (
        <div className="item" onClick={() => props.onVideoSelect(props.video)}>
            <img className="ui image" src={props.video.snippet.thumbnails.default.url} alt={props.video.snippet.description}></img>
            <div className="content">
                <div className="header">{props.video.snippet.title}</div>
                <div className="description">{props.video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoItem;