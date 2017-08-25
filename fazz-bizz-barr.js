class fazzBizzBarr {
  constructor() {
    this.output = '';
  }

  printOutput(integer) {
    if(this.output){ this.output = ''};

    if (integer % 3 == 0) {
      this.output += 'Fazz';
    }
    if (integer % 5 == 0) {
      this.output += 'Bizz';
    }
    if (integer % 7 == 0) {
      this.output += 'Barr';
    }
    console.log(this.output);
    return this.output;
  }
}

export default fazzBizzBarr;
