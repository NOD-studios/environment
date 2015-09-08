import 'source-map-support/register';
import console from 'console';
import loader from 'dotenv';
import path from 'path';
import root from 'app-root-path';
import filter from 'filter-object';
import autobind from 'autobind-decorator';
import configurator from 'node-env-configuration';
import { param, returns, Optional as optional } from 'decorate-this';

const PROTECTED = Symbol('PROTECTED');

let info = console.log.bind(console),
  debug = info,
  warn = console.error.bind(console);

export class Environment {

  defaults = {
    files       : [
      '.env.local',
      '.env.production',
      '.env.test',
      '.env.development',
      '.env',
      '.env.nod'
    ],
    [PROTECTED] : {
      ENV    : {},
      config : {}
    },
    configurator,
    root,
    loader,
    debug,
    info,
    warn
  }

  constructor(options = {}) {
    this.setOptions(options);
    this.ENV = this.load();
    this.config = this.configurator(undefined, undefined, this.warn);

    this.info(`${this.constructor.name}: Initialized.`);
  }

  @autobind
  @param(optional({
    root        : optional(String),
    files       : optional(Array),
    [PROTECTED] : optional(Object)
  }))
  @returns(Object)
  setOptions(options = {}) {
    return Object.assign(this, this.defaults, options);
  }

  @param(String)
  @returns(String)
  makePath(file = '') {
    return path.join(path.resolve(`${this.root}`), `${file}`);
  }

  @autobind
  @returns(Object)
  load() {
    this.debug(`${this.constructor.name}.load: loading '${this.files}'.`);
    this.files.forEach((file)  => {
      let filePath = this.makePath(file);
      let status = this.loader.load({
        silent : true,
        path : filePath
      });
      if (status) {
        this.info(`${this.constructor.name}.load: '${file}' loaded.`);
      } else {
        this.warn(`${this.constructor.name}.load: '${file}' could not loaded`);
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

  @autobind
  @returns(String)
  getJson() {
    let excludes = this.config.EXCLUDE || '';
    excludes = excludes.split(',') || [];
    return JSON.stringify(filter(this.config, excludes));
  }
}

export default Environment;
