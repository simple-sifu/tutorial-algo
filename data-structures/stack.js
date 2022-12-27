function Stack() {
   this.storage = {};
   this.index = 0;
}

Stack.prototype.push = function(value) {
   this.storage[this.index++] = value;
   console.log("stack.push storage =", this.storage);
   return this.index;
};

Stack.prototype.pop = function() {
   delete this.storage[--this.index];
   console.log("stack.pop  storage =", this.storage);
};

// Stack.prototype.print = function() {
//     Object.keys(this.storage).map(key => {
//         console.log(`stack.print => ${key}: ${this.storage[key]}`)
//     })
//  };

const stack = new Stack();
stack.push("cat");
stack.push("bat");
stack.push("cow");
// stack.print();
stack.pop();
stack.pop();
// stack.print();

