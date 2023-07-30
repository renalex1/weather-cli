import chalk from 'chalk';
import axios from 'axios';
import terminalImage from 'terminal-image';
import dedent from 'dedent-js';

const error = chalk.bold.bgRed;
const success = chalk.bold.bgGreen;
const info = chalk.bold.bgCyan;
const warning = chalk.hex('#FFA500');
const yellow = chalk.bold.bgYellow;

const printError = (err) => {
  console.log(error(' ERROR ') + ' ' + err);
};

const printSuccess = (message) => {
  console.log(success(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
  console.log(
    dedent(
      `${info(' HELP ')}
			Without parameters - weather output
			-s [CITY] to set the city
			-h to display help
			-t [API_KEY] to save the token`
    )
  );
};

const printWeather = (res,icon) => {
  console.log(
    dedent(
      `${yellow(' WEATHER ')} Weather in ${res.name} 
			${icon} ${res.weather[0].description}
			Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
			Humidity: ${res.main.humidity}%
			Wind speed: ${res.wind.speed}`
    )
  );
};

export { printError, printSuccess, printHelp, printWeather };
