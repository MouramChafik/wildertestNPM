import chalk from 'chalk';

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' wilders' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('James'));

// Pass in multiple arguments
log(chalk.blue('hello', 'David!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Ahmed', chalk.underline.bgBlue('Francois') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'chafik ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);



