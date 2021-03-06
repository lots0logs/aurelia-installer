const program = require('commander');
const ComponentUnBundler = require('../lib/commands/unbundle');

program
  .command('unbundle <name>')
  .description('Unbundle a component from the application')
  .action(function(name) {    
    new ComponentUnBundler().unbundle(name);
  })
