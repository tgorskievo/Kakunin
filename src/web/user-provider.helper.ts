import { UserConfig } from '../core/user-config.interface';
import config from '../core/config.helper';

const accounts = config.accounts;

const userProvider = {
  getUser(userType: string): UserConfig {
    const user = accounts[userType];

    if (user.accounts.length > 1) {
      const usedAccounts = user.accounts.filter((account: UserConfig) => account.used);

      if (usedAccounts.length === user.accounts.length) {
        user.accounts.map((account: UserConfig) => ({
          ...account,
          used: false,
        }));
      }

      return user.accounts.find((account: UserConfig) => !account.used);
    }

    return user.accounts[0];
  },

  lockUser(user: UserConfig, userType: string): void {
    if (accounts[userType].accounts.length > 1) {
      accounts[userType].accounts.forEach((account: UserConfig, index: number) => {
        if (account.email === user.email) {
          accounts[userType].accounts[index].used = true;
        }
      });
    }
  },
};

export default userProvider;
