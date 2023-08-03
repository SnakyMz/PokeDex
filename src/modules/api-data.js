export default class API {
  constructor() {
    this.urls = {
      pokemons: 'https://pokeapi.co/api/v2/pokemon/',
      likes: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0YSAdjw9FalqCv0vGDYS/likes',
      comments: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L3cd5MnXmz3nt1juQH1n/comments',
    };
  }

  async get(url) {
    this.url = url;
    const response = await fetch(url);
    return response.json();
  }

  async post(url, data) {
    this.url = url;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    });
    const res = await response;
    return res;
  }
}