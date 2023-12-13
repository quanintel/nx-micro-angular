import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ara-menu',
  exposes: {
    './Routes': 'ara-menu/src/app/entry.routes.ts',
  },
};

export default config;
