import chalk from 'chalk';
import dedent from 'dedent-js';

const error = chalk.bold.bgRed;
const success = chalk.bold.bgGreen;
const info = chalk.bold.bgCyan;
const warning = chalk.hex('#FFA500'); 

const printError = (error) => {
  console.log(error(' ERROR ') + ' ' + error);
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

export { printError, printSuccess, printHelp };
