import {
  SET_SEARCH,
  FETCH_TOURNAMENTS_PENDING,
  FETCH_TOURNAMENTS_SUCCESS,
  FETCH_TOURNAMENTS_ERROR,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  SAVE_TOURNAMENT,
  SET_SAVED_TOURNAMENTS,
  DELETE_TOURNAMENT,
  fetchTournamentsPending,
  fetchTournamentsSuccess,
  fetchTournamentsError,
  setSearchField,
  saveTournament,
  openSnackBar,
  deleteTournament,
  setSavedTournaments
} from './actions';
import searchTournaments from "../services/api/tournaments";

const initialState = {
  savedTournaments: [],
  searchField: "",
  tournaments: [],
  snackbarStatus: false,
  snackbarMessage: "",
  error: {},
  pending: false
  
};

export default function appReducer(state = initialState, action) {
  
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchField: action.searchField
      };
    case FETCH_TOURNAMENTS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        tournaments: action.payload,
        error: {}
      };
    case FETCH_TOURNAMENTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case SAVE_TOURNAMENT:
      return {
        ...state,
        savedTournaments: [...state.savedTournaments, action.tournament]
      };
    case SET_SAVED_TOURNAMENTS:
      return {
        ...state,
        savedTournaments: action.tournaments
      };
    case DELETE_TOURNAMENT:
      return {
        ...state,
        savedTournaments: state.savedTournaments.filter(tournament => tournament.id !== action.tournamentId)
      };
    case OPEN_SNACKBAR:
      return {
        ...state,
        snackbarStatus: action.snackbarStatus,
        snackbarMessage: action.snackbarMessage
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarStatus: action.snackbarStatus,
        snackbarMessage: action.snackbarMessage
      };
    default:
      return state
  }
}

export const getSavedTournaments = state => state.savedTournaments;

export const fetchTournaments = () => async (dispatch, getState) => {
  dispatch(fetchTournamentsPending());
  var searchField = getState().searchField;
  return searchTournaments(searchField)
    .then(res => {
      if (res.status !== 200) {
        throw(res.body.error);
      }
      if (!res.body.length) {
        dispatch(fetchTournamentsError({message:"No tournaments found."}));
      }
      dispatch(fetchTournamentsSuccess(res.body));
    })
    .catch(error => {
      dispatch(fetchTournamentsError(error));
    })
};

export const saveTournamentMdl = (tournament) => (dispatch, getState) =>{
  let savedTournaments = getState().savedTournaments;
  let containsTournament = savedTournaments.filter(function(savedTournament){ return savedTournament.id === tournament.id });
  if (!containsTournament.length) {
    dispatch(saveTournament(tournament));
    dispatch(openSnackBar("Tournament saved"));
    dispatch(resetSearch());
    localStorage.setItem('tournaments', JSON.stringify(getSavedTournaments(getState())));
  } else {
    dispatch(openSnackBar("Tournament already saved"));
  }
};

export const deleteTournamentMdl = (tournamentId) => (dispatch, getState) => {
  dispatch(deleteTournament(tournamentId));
  localStorage.setItem('tournaments', JSON.stringify(getSavedTournaments(getState())));
};

export const resetSearch = () => (dispatch, getState) => {
  dispatch(fetchTournamentsSuccess([]));
  dispatch(setSearchField(''))
};

export const getUserSavedTournaments = () => async (dispatch, getState) => {
  let savedUserTournaments = JSON.parse(localStorage.getItem('tournaments')) || [];
  dispatch(setSavedTournaments(savedUserTournaments));
};