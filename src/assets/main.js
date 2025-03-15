const url = 'https://youtube-v311.p.rapidapi.com/playlists/?part=snippet&channelId=UCyxUUHqmz9IiAnrROJc0mag&maxResults=5';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'f21fd5530fmsh889880f57c8b26ep1cd977jsn435d3f821a06',
    'x-rapidapi-host': 'youtube-v311.p.rapidapi.com'
  }
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}