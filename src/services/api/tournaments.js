const api_url = "https://api-search.win.gg";

export function searchTournaments(search) {
  return fetch(api_url+"/search?q=" + search + "&index=tournament", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => {
   return  res.json().then(data => ({status: res.status, body: data}))
  })
  
}

export default searchTournaments;
