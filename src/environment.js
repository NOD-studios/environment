import 'source-map-support/register';
import 'babel-polyfill';
import path from 'path';
import loading from 'dotenv';
import logger from 'console';
import filter from 'filter-object';
import autobind from 'autobind-decorator';
import { Configuration } from './configuration';
import configurator from 'node-env-configuration';
import { inject } from 'aurelia-dependency-injection';
import { param, returns, Optional as optional } from 'decorate-this';

const PROTECTED = Symbol('PROTECTED');

@inject(Configuration)
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
        console.warn(`${this.constructor.name}.load:`);
        console.warn(`'${file}' could not found at path: ${filePath}`);
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

  constructor(
    options = new Configuration(),
    console = logger,
    configurify = configurator,
    loader = loading
  ) {

    Object.assign(this, { loader, console, options, configurify });

    Object.defineProperty(this, PROTECTED, {
      enumarable : false,
      value : {
        ENV    : {},
        config : {}
      }
    });

    this[PROTECTED].ENV = this.load();

    let warn = (this.options.silent !== true) ? this.console.warn.bind(this.console) : function() {};
    this.config = this.configurify(undefined, undefined, warn);
  }
}

export default Environment;
