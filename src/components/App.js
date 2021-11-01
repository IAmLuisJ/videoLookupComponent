import React, {useState} from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import VideoQueue from "./VideoQueue";

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const [queue, setQueue] = useState([]);
  const [timer, setTimer] = useState();

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      }
    });
    console.log("response requested");
    console.log("test")
    setResults(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onPlayQueue = () => {
    const timer = setInterval(() => {
      console.log("playing video");
    }, 60000);
    setTimer(timer);
  };

  const onPauseQueue = () => {
    console.log("pausing queue");
    clearInterval(timer);
  };

  const onVideoSelect = (video) => {
    console.log("from the app", video);
   setSelectedVideo(video);
  };

  const onAddToQueue = (video) => {
    console.log(video);
    setQueue(queue => [...queue, video]);
  };


  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      Search results: {results.length} videos found.
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
            <VideoQueue
              list={queue}
              onAddToQueue={onAddToQueue}
              selectedVideo={selectedVideo}
              onVideoSelect={onVideoSelect}
              onPlayQueue={onPlayQueue}
              onPauseQueue={onPauseQueue}
            />
          </div>
          <div className="five wide column">
            <VideoList
              videos={results}
              onVideoSelect={onVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
