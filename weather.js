#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import {
  printHelp,
  printError,
  printSuccess,
  printWeather,
} from './services/log.service.js';
import { saveKeyValue, API_DICTIONARY, getKeyValue } from './services/storage.service.js';
import { getWeather, getIcon } from './services/api.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    return printError('Token not transferred!');
  }
  try {
    await saveKeyValue(API_DICTIONARY.token, token);
    printSuccess('Token saved!');
  } catch (err) {
    printError(err.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    return printError('City not transferred!');
  }
  try {
    await saveKeyValue(API_DICTIONARY.city, city);
    printSuccess('City saved!');
  } catch (err) {
    printError(err.message);
  }
};

const getForecast = async () => {
  try {
		const city = process.env.CITY ?? (await getKeyValue(API_DICTIONARY.city));
    const weather = await getWeather(city);
		printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (err) {
    if (err?.response?.status == 400) {
      printError('City not transferred!');
    } else if (err?.response?.status == 401) {
      printError('Invalid token!');
    } else if (err?.response?.status == 404) {
      printError('Invalid city!');
    } else {
      printError(err.message);
    }
  }
};

const initCLI = async () => {
  const args = getArgs(process.argv);
	
  if (args.h) {
    // Show help
    printHelp();
  }
  if (args.s) {
    // Save city
    saveCity(args.s);
  }
  if (args.t) {
    // Save token
    return saveToken(args.t);
  }
  // Show weather
  await getForecast();
};

initCLI();


