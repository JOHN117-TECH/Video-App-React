import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import Video from './models/Video';
React;
const VideoDetail: React.FC<{ video: Video | undefined }> = ({ video }) => {
  const videoId = video?.id.videoId;

  if (!videoId) return <div>Loading ...</div>;

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <Paper elevation={6} style={{ height: '70%' }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video PLayer"
          src={videoSrc}
        />
        <Paper elevation={6} style={{ padding: '15px' }}>
          <Typography variant="h4">
            {video.snippet.title} - {video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle1">
            {video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle2" style={{paddingBottom:'10px',paddingTop:'10px'}}>
            {video.snippet.description}
          </Typography>
          <Typography variant="subtitle2">
            {video.snippet.publishTime}
          </Typography>
        </Paper>
      </Paper>
    </>
  );
};

export default VideoDetail;
