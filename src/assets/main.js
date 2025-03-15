const url = 'https://youtube-v311.p.rapidapi.com/playlists/?part=snippet&channelId=UCyxUUHqmz9IiAnrROJc0mag&maxResults=5';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'f21fd5530fmsh889880f57c8b26ep1cd977jsn435d3f821a06',
    'x-rapidapi-host': 'youtube-v311.p.rapidapi.com'
  }
};

async function fetchData(urlApi) {
  try {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

(async () => {
  try {
    const videos = await fetchData(url);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0, 4).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    throw new Error(error);
  }
})();