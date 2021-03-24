import React, { useEffect, useRef} from 'react';
import { useDispatch, useSelector} from "react-redux";
import Tournament from "./tournament";
import Typography from '@material-ui/core/Typography';
import { Box} from "@material-ui/core";

import { getUserSavedTournaments } from "../redux/reducer";

const SavedTournamentsPanel = () => {
  const dispatch = useDispatch();
  const savedTournaments = useSelector((state) => state.savedTournaments);
  const isMounted = useRef(false);
  
  useEffect(() => {
    if (!isMounted.current) {
      dispatch(getUserSavedTournaments());
      isMounted.current = true;
    }
  }, []);
  
  return (
    <div className="tournaments-panel">
        <Typography className="title" >Your tournaments</Typography>
        <div className="tournaments-container">
            {savedTournaments.map((tournament) =>
              <Tournament tournament={tournament} deleteTournament={true} key={tournament.id}/>
            )}
        </div>
        {!savedTournaments.length &&
            <Box m={1} p={1} className="empty-text" textAlign="center" fontFamily="fontFamily">
                No saved tournaments.
                You can try saving some.
            </Box>
        }
    </div>
  );
  
};

export default SavedTournamentsPanel