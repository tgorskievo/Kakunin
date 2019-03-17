import * as _ from 'lodash';

interface BrowserInstanceConfig {
  specs: string[];
}

export const prepareBrowserInstance = (
  browserConfig: BrowserInstanceConfig,
  specs: string[]
): BrowserInstanceConfig => {
  const instance = _.cloneDeep(browserConfig);
  instance.specs = specs;

  return instance;
};
