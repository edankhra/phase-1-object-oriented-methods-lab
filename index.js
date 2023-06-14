
function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  // veto method
  BoardMember.prototype.veto = function() {
    return "No, I must disagree";
  };
  
  // approve method
  BoardMember.prototype.approve = function() {
    return "You can do that!";
  };
  
  // doCharity method
  BoardMember.prototype.doCharity = function() {
    return "I like to help people.";
  };
  
  // releasePressStatement method
  BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber.";
  };
  
  // sayHi method
  BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  };