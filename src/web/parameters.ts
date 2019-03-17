const Parameters = {
  getReloadFixturesEndpoint(): string {
    const config = this.getConfig();

    return config.fixturesReloadHost;
  },

  getConfig(): object | Error {
    if (typeof process.env.FIXTURES_RELOAD_HOST === 'undefined') {
      throw new Error('Missing fixtures reload url. Use export FIXTURES_RELOAD_HOST=valid-host for setup.');
    }

    return {
      fixturesReloadHost: process.env.FIXTURES_RELOAD_HOST,
    };
  },
};

export default Parameters;
