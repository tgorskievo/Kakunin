import fetch from 'node-fetch';

const FixturesLoader = {
  reloadFixtures(endpoint: string) {
    return fetch(endpoint);
  },
};

export default FixturesLoader;
