import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ara-menu',
  exposes: {
    // './Routes': 'ara-menu/src/app/entry.routes.ts',
    './Component': 'ara-menu/src/app/menu-component/menu.component.ts'
  },
};

export default config;
