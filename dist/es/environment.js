import 'source-map-support/register';
import "babel-polyfill";
import path from 'path';
import console from 'console';
import loader from 'dotenv';
import filter from 'filter-object';
import autobind from 'autobind-decorator';
import { Base } from '@nod/base';
import configurator from 'node-env-configuration';
import { param, returns, Optional as optional } from 'decorate-this';

const PROTECTED = Symbol('PROTECTED');

export class Environment extends Base {

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
      let status = this.options.loader.load({
        silent : true,
        path : filePath
      });
      if (!status && this.options.silent !== true) {
        console.warn(`${this.constructor.name}.load: '${file}' could not found at path: ${filePath}`);
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

  constructor(options = {}) {
    super(options, {
      silent      : true,
      files       : [
        '.env.local',
        '.env.production',
        '.env.test',
        '.env.development',
        '.env',
        '.env.nod'
      ],
      root : path.dirname(require.main.filename),
      configurator,
      loader
    });

    this[PROTECTED] = this[PROTECTED] || {};

    Object.assign(this[PROTECTED], {
      ENV    : {},
      config : {}
    });

    this.ENV = this.load();

    let warn = (this.options.silent !== true) ? console.warn.bind(console) : function() {};
    this.config = this.options.configurator(undefined, undefined, warn);
  }
}

export default Environment;
