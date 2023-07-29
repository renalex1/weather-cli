import https from 'https';
import axios from 'axios';
import { getKeyValue, API_DICTIONARY } from './storage.service.js';

const getWeather = async (city) => {
  const token = await getKeyValue(API_DICTIONARY.token);
  if (!token) {
    throw new Error('API key not set, set it with command -t [API_KEY');
  }

  const { data } = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    { params: { q: city, appid: token, lang: 'ru', units: 'metric' } }
  );

  return data;

  // const url = new URL('https://api.openweathermap.org/data/2.5/weather');
  // url.searchParams.append('q', city);
  // url.searchParams.append('appid', token);
  // url.searchParams.append('lang', 'ru');
  // url.searchParams.append('units', 'metric');

  // https.get(url, (response) => {
  //   let res = '';
  //   response.on('data', (chunk) => {
  //     res += chunk;
  //   });
  //   response.on('end', () => {
  //     console.log(res);
  //   });
  // });
};

export { getWeather };
