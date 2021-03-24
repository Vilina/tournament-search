import React, { useState, useEffect, useRef } from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import { Box} from "@material-ui/core";
import { FormControl, CircularProgress } from "@material-ui/core";
import { fetchTournamentsError, setSearchField, fetchTournamentsPending } from '../redux/actions'
import { fetchTournaments, resetSearch } from '../redux/reducer'
import { useSelector, useDispatch } from 'react-redux'


const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const isMounted = useRef(false);
  const error = useSelector((state) => state.error);
  const pending = useSelector((state) => state.pending);

  useEffect(() => {
    if (isMounted.current && search.length) {
      dispatch(resetSearch());
      const timer = setTimeout(() => {
        if (search.length >= 2) {
          dispatch(setSearchField(search));
          dispatch(fetchTournaments());
        } else {
          dispatch(fetchTournamentsError({message:"Minimum 2 characters"}));
        }
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      isMounted.current = true;
    }
  }, [search]);
 
  return (
    <FormControl fullWidth >
      <TextField id="standard-size-small" placeholder="Type here your search tournaments"
                 size="small" variant="outlined" type="search"
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 autoComplete="off"
               />
        {pending &&
         <Box mt={1} textAlign="center" fontFamily="fontFamily">
           <CircularProgress />
         </Box>
        }
        
        {error &&
         <Box mt={1} textAlign="center" fontFamily="fontFamily">
           {error.message}
         </Box>
        }
    </FormControl>
  );
};


export default Search
