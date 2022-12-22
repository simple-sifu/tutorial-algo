function Stack() {
    this.storage = {};
    this.index = 0;
}

Stack.prototype.push = function(value) {
    this.storage[this.index++] = value;
    return this.index;
};

Stack.prototype.pop = function() {
   delete this.storage[--this.index];
};

Stack.prototype.print = function() {
    Object.keys(this.storage).map(key => {
        console.log(`${key}: ${this.storage[key]}`)
    })
 };

const stack = new Stack();
stack.push("cat");
stack.push("bat");
stack.push("cow");
stack.print();
stack.pop();
stack.pop();
stack.print();

