
class hexaBinaryConverter {
  constructor() {
    this.newNumber = '';
  }

  transformToBinary(number) {
    console.log('changing number: ' + number);
    this.newNumber = parseInt(number, 16).toString(2);
    console.log(this.newNumber);
    return this.newNumber;
  }

  reverseToHexa(number) {
    console.log('changing number: ' + number);
    this.newNumber = parseInt(number, 2).toString(16);
    console.log(this.newNumber);
    return this.newNumber;
  }
}

export default hexaBinaryConverter;
