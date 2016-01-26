import 'source-map-support/register';
import 'babel-polyfill';
import path from 'path';
import logger from 'console';
import envLoader from 'dotenv';
import filter from 'filter-object';
import autobind from 'autobind-decorator';
import envConfigurator from 'node-env-configuration';
import { param, returns, Optional as optional } from 'decorate-this';

const PROTECTED = Symbol('PROTECTED');

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

export class Environment {

  @autobind
  @param(optional({
    root  : optional(String),
    files : optional(Array)
  }))
  @returns(Object)
  setOptions(options = {}) {
    return super.setOptions(options);
  }

  @param(String)
  @returns(String)
  makePath(file = '') {
    return path.join(path.resolve(`${this.options.root}`), `${file}`);
  }

  @autobind
  @returns(Object)
  load() {
    this.options.files.forEach((file)  => {
      let filePath = this.makePath(file);
      let status = this.loader.load({
        silent : true,
        path : filePath
      });
      if (!status && this.options.silent !== true) {
        this.console.warn(`${this.constructor.name}.load:`);
        this.console.warn(`'${file}' could not found at path: ${filePath}`);
      }
    });
    return process.env;
  }

  get config() {
    return this.getConfig();
  }

  @autobind
  @returns(Object)
  getConfig() {
    return this[PROTECTED].config;
  }

  set config(...params) {
    return this.setConfig(...params);
  }

  @autobind
  @param(Object)
  @returns(Object)
  setConfig(config = {}) {
    Object.assign(this[PROTECTED].config, config);
    return this.config;
  }

  get json() {
    return this.getJson();
  }

  get ENV() {
    return Object.freeze(this[PROTECTED].ENV);
  }

  @autobind
  @returns(String)
  getJson() {
    let excludes = this.config.EXCLUDE || '';
    excludes = excludes.split(',') || [];
    return JSON.stringify(filter(this.config, excludes));
  }

  constructor(
    options = new Configuration(),
    console = logger,
    loader = envLoader,
    configurator = envConfigurator
  ) {

    Object.assign(this, { options, loader, console, configurator });

    Object.defineProperty(this, PROTECTED, {
      enumarable : false,
      value : {
        ENV    : {},
        config : {}
      }
    });

    this[PROTECTED].ENV = this.load();

    this.config = this.configurator(undefined, undefined, this.console.warn);
  }
}

export default Environment;
