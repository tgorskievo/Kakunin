import { UserConfig } from './user-config.interface';

const commandArgs = require('minimist')(process.argv.slice(2));

interface KakuninConfig {
  projectPath?: string;
  email?: {
    type?: string;
    config?: any;
  };
  performance?: boolean;
  accounts?: {
    [userType: string]: {
      accounts: [UserConfig];
    };
  };
}

let config: KakuninConfig;

if (process.env.NODE_ENV === 'test') {
  config = {
    projectPath: process.cwd(),
    email: {
      config: {},
    },
  };
} else {
  const configFile = process.argv.find(name => name.indexOf('--config') >= 0);
  const configFilePath = configFile.substr(configFile.indexOf('=') + 1);

  const project = process.argv.find(name => name.indexOf('--projectPath') >= 0);
  const projectPath = project.substr(project.indexOf('=') + 1);

  config = require(configFilePath);
  config.projectPath = projectPath;
  config.performance = commandArgs.performance || false;
}

export default config;
