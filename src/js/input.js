export default class Input {
  constructor(disabled = false, value = '', elementId = 'input') {
    this.disabled = disabled;
    this.value = value;
    this.elementId = elementId;
  }
}