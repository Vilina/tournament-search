import React from 'react';
import { useDispatch} from "react-redux";
import { Avatar, Typography, Grid, Tooltip, Box} from '@material-ui/core'
import { openSnackBar } from '../redux/actions'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { saveTournamentMdl, deleteTournamentMdl } from "../redux/reducer";


const host = "https://cdn-images.win.gg/";

const Tournament = ( props ) => {
  const dispatch = useDispatch();
  let imgURL = null;
  if (props.tournament.images) {
    imgURL = props.tournament.images.square ?
      host + props.tournament.images.square.filePath :
      host + props.tournament.images.default.filePath;
  }
  const handleTournamentClick = (tournament, e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(saveTournamentMdl(tournament));
  };
  
  const handelDeleteTournament = (tournamentId, e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(deleteTournamentMdl(tournamentId));
    dispatch(openSnackBar("Tournament removed"));
  };
  
  return (
    <Box border={1}
              borderTop={0}
              borderLeft={0}
              borderRight={0}
              borderColor="grey.300" m={1} p={1}>
      <Tooltip title={props.deleteTournament?'': 'Save'} aria-label={props.deleteTournament?'': 'Save'} >
        <Grid container spacing={1} className="tournament-container"
              onClick={!props.deleteTournament ? (e) => handleTournamentClick(props.tournament, e) : undefined}
              position="relative">
          <Grid container item xs={2} alignItems="center">
            <Avatar alt={props.tournament.title} src={imgURL} variant="square" className='avatar' />
          </Grid>
          <Grid container item xs={10} alignItems="center">
            <Typography variant="subtitle2" gutterBottom noWrap className="tournament-title">
              {props.tournament.title}
            </Typography>
            <Typography variant="subtitle2" gutterBottom fontWeight="fontWeightRegular" color="textSecondary" noWrap>
              {props.tournament.description}
            </Typography>
          </Grid>
          {props.deleteTournament &&
            <Tooltip title="Remove" aria-label="Remove" className="remove-icon" onClick={(e) => handelDeleteTournament(props.tournament.id, e)} >
              <DeleteOutlinedIcon />
            </Tooltip>
          }
        </Grid>
      </Tooltip>
    </Box>
  )
}

export default Tournament
