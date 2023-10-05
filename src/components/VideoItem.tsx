import { Grid, Paper, Typography } from '@mui/material';
import Video from './models/Video';
const VideoItem: React.FC<{
  video: Video;
  onVideoSelect: (video: Video) => void;
}> = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer',marginTop:'15px', border: '2px solid red'}}
        onClick={() => onVideoSelect(video)}
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          alt="thumbnail"
          style={{ marginRight: '20px', borderRight:'4px solid red' }}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
