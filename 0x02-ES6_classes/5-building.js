export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (typeof this.evacuationWarningMessage !== 'function'
            && this.constuctor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
  }
}
