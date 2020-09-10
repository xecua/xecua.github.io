export {};

declare global {
  interface Number {
    addPxUnit(): string;
  }
}

Number.prototype.addPxUnit = function () {
  return `${this}px`;
};
