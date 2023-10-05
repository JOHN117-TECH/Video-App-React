import { Grid } from '@mui/material';
import './App.css';
import youtube from './api/Youtube.ts';
import SearchBar from './components/SearchBar.js';
import { useState } from 'react';
import VideoDetail from './components/VideoDetail.tsx';
import Video from './components/models/Video.ts';
import VideoList from './components/VideoList.tsx';

function App() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video>();

  return (
    <>
      <Grid style={{ justifyContent: 'center' }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12} style={{marginTop:'40px'}}>
              <SearchBar onSubmit={handleSubmit} />
            </Grid>

            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>

            <Grid item xs={4}>
              <VideoList videos={videos} onSelectVideo={setSelectedVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  async function handleSubmit(searchItem: string) {
    const {
      data: { items: videos },
    } = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyA2DgVYBuGx1FTkFZn01g4njAoXw7PKFBc',
        q: searchItem,
      },
    });
    setVideos(videos);
    console.log(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;
