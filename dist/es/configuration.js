import path from 'path';
import autobind from 'autobind-decorator';
import { param, returns, Optional as optional, AnyOf as anyOf } from 'decorate-this';

export class Configuration {

  silent = true;

  exclude = '';

  files = [
    '.env.local',
    '.env.production',
    '.env.test',
    '.env.development',
    '.env',
    '.env.nod'
  ];

  root = path.dirname(require.main.filename);

  @autobind
  @param(optional({
    exclude : optional(anyOf(Boolean, String, Array, Object)),
    silent : optional(Boolean),
    root  : optional(String),
    files : optional(Array)
  }))
  @returns(Object)
  setOptions(options = {}) {
    return Object.assign(this, options);
  }

  constructor(options = {}) {
    this.setOptions(options);

    return this;
  }
}

export default Configuration;
