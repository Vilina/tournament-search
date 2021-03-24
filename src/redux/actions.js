export const SET_SEARCH = 'SET_SEARCH';
export const FETCH_TOURNAMENTS_PENDING = 'FETCH_TOURNAMENTS_PENDING';
export const FETCH_TOURNAMENTS_SUCCESS = 'FETCH_TOURNAMENTS_SUCCESS';
export const FETCH_TOURNAMENTS_ERROR = 'FETCH_TOURNAMENTS_ERROR';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const SAVE_TOURNAMENT = 'SAVE_TOURNAMENT';
export const SET_SAVED_TOURNAMENTS = 'SET_SAVED_TOURNAMENTS';
export const DELETE_TOURNAMENT = 'DELETE_TOURNAMENT';

export function setSearchField(searchField) {
  return {
    type: SET_SEARCH,
    searchField: searchField
  }
}

export function fetchTournamentsPending() {
  return {
    type: FETCH_TOURNAMENTS_PENDING
  }
}

export function fetchTournamentsSuccess(tournaments) {
  return {
    type: FETCH_TOURNAMENTS_SUCCESS,
    payload: tournaments.length ? tournaments[0].documents : [],
    error: {}
  }
}

export function fetchTournamentsError(error) {
  return {
    type: FETCH_TOURNAMENTS_ERROR,
    error: error
  }
}

export function openSnackBar(message) {
  return {
    type: OPEN_SNACKBAR,
    snackbarStatus: true,
    snackbarMessage: message
  }
}

export function closeSnackBar() {
  return {
    type: CLOSE_SNACKBAR,
    snackbarStatus: false,
    snackbarMessage: ''
  }
}

export function saveTournament(tournament) {
  return {
    type: SAVE_TOURNAMENT,
    tournament: tournament,
  }
}

export function setSavedTournaments(tournaments) {
  return {
    type: SET_SAVED_TOURNAMENTS,
    tournaments: tournaments,
  }
}

export function deleteTournament(tournamentId) {
  return {
    type: DELETE_TOURNAMENT,
    tournamentId: tournamentId,
  }
}
