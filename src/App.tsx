import { Grid } from '@mui/material';
import './App.css';

function App() {
  return (
    <>
      <Grid style={{ justifyContent: 'center' }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}></Grid>

            <Grid item xs={8}></Grid>

            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
