let calculator = {
    read(){
        return this.a= +prompt('a?',0);
        return this.b= +prompt('b?',0);
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );