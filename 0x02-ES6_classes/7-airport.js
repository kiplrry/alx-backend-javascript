export default class Airport {
  constructor(name, code) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  toString() {
    return `[${typeof this} ${this.code}]`;
  }
}
