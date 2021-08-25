import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import VideoQueue from "./VideoQueue";

class App extends React.Component {
  state = { results: [], selectedVideo: null, queue: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      results: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    console.log("from the app", video);
    this.setState({ selectedVideo: video });
  };

  onAddToQueue = (video) => {
    console.log(video);
    this.setState({ queue: [...this.state.queue, video] });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        Search results: {this.state.results.length} videos found.
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
              <VideoQueue
                list={this.state.queue}
                onAddToQueue={this.onAddToQueue}
                selectedVideo={this.state.selectedVideo}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.results}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
