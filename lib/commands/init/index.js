const log = require('../log');
const c = log.c;
const jsonfile = require('jsonfile')
const aureliaConfigFilePath = './aurelia_project/aurelia.json'; 

module.exports = class InitProject {
  constructor(settings) {
    this.settings = settings;
  }

  initialize() {
    console.log('TODO...')

    // prompt for Webpack or Jspm preference 
    // http://ilikekillnerds.com/2016/03/ditching-jspmsystem-js-webpack/

    const questions = require('./questions');
    inquirer(questions, (answers) => {
      try {
        // load aurelia.json and add a packageManager entry
        let aureliaConfig = jsonfile.readFileSync(aureliaConfigFilePath);
        aureliaConfig.packageManager = answers.packageManager;
        jsonfile.writeFileSync(aureliaConfigFilePath, aureliaConfig);
      } catch (err) {
        console.error(`Error: Could not access ${aureliaConfigFilePath} in your project`);
      }
    });
  }
}
