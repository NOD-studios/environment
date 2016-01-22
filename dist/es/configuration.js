import path from 'path';

export class Configuration {

  silent = true;

  files = [
    '.env.local',
    '.env.production',
    '.env.test',
    '.env.development',
    '.env',
    '.env.nod'
  ];

  root = path.dirname(require.main.filename);

  constructor(options = {}) {
    Object.assign(this, options);

    return this;
  }
}
