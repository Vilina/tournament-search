import React from 'react';
import SavedTournamentsPanel from './components/tournamentsPanel'
import TournamentsList from './components/tournamentsList'
import Search from './components/search'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Snackbar } from "@material-ui/core";
import { useDispatch, useSelector} from "react-redux";
import { closeSnackBar } from "./redux/actions";



const App = () => {
  const dispatch = useDispatch();
  const snackbarStatus = useSelector((state) => state.snackbarStatus);
  const snackbarMessage = useSelector((state) => state.snackbarMessage);
  const handleClose= () => {
    dispatch(closeSnackBar())
  }

  
  return (
    <Container maxWidth="md" overflow="hidden">
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Paper className="paper-container">
            <Search />
            <TournamentsList />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Paper className="paper-container">
            <SavedTournamentsPanel />
          </Paper>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{vertical: "bottom", horizontal: "right"}}
        open={snackbarStatus}
        autoHideDuration={2000}
        onClose={handleClose}
        message={snackbarMessage}
        key={{vertical: "bottom", horizontal: "right"}}
      />
    </Container>
  );

};

export default App;