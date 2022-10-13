const baseUrl = 'https://api.iev.aero/api/flights';

export const getFlightsData = data =>
  fetch(`${baseUrl}/${data}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
