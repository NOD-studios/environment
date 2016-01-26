import path from 'path';
import logger from 'console';
import envLoader from 'dotenv';
import objectFilter from 'filter-object';
import autobind from 'autobind-decorator';
import envConfigurator from 'node-env-configuration';
import { Configuration } from './configuration';
import { param, returns, Optional as optional, AnyOf as anyOf } from 'decorate-this';

const PROTECTED = Symbol('PROTECTED');

export class Environment {

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
  @param(optional(anyOf(Boolean, String, Array, Object)))
  @returns(Object)
  getFilteredConfig(exclude = false) {
    let excludes = exclude || this.options.exclude || this.config.exclude || false;
    excludes = typeof excludes === 'string' ? excludes.split(',') : excludes;
    excludes = excludes === false ? '*' : excludes;

    return this.filter(this.config, excludes);
  }

  @autobind
  @param(optional(anyOf(Boolean, String, Array, Object)))
  @returns(String)
  getJson(exclude = false) {
    return JSON.stringify(this.getFilteredConfig(exclude));
  }

  constructor(
    options = new Configuration(),
    console = logger,
    loader = envLoader,
    configurator = envConfigurator,
    filter = objectFilter
  ) {

    Object.assign(this, { options, loader, console, configurator, filter });

    Object.defineProperty(this, PROTECTED, {
      enumarable : false,
      value : {
        ENV    : {},
        config : {}
      }
    });

    this[PROTECTED].ENV = this.load();

    this.config = this.configurator.apply(this.configurator, [
      undefined,
      undefined,
      this.options.silent ? function() {} : this.console.warn
    ]);
  }
}

export default Environment;
