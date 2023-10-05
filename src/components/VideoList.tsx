import { Grid } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import VideoItem from './VideoItem';
import Video from './models/Video';

const VideoList: React.FC<{ videos: Video[]; onSelectVideo: Dispatch<SetStateAction<Video | undefined>> }> = ({
  videos,
  onSelectVideo,
}) => {
  const listOfVideos = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onSelectVideo}
    />
  ));

  return <Grid spacing={10}>{listOfVideos}</Grid>;
};

export default VideoList;
