function Queue() {
   this.storage = {};
   this.front=0;
   this.end=0

}

Queue.prototype.enqueue = function(value) {
    this.storage[this.end++] = value;
    console.log("Queue.enqueue: this.storage =", this.storage);
};

Queue.prototype.dequeue = function() {
    delete this.storage[this.front++]
    console.log("Queue.dequeue: this.storage =", this.storage);
};

// Queue.prototype.print = function() {
//     console.log("Queue.print: this.storage =", this.storage);
// }



const queue = new Queue();
queue.enqueue("cat");
queue.enqueue("dog");
queue.enqueue("camel");
queue.enqueue("shark");
// queue.print();
queue.dequeue()
queue.dequeue();
// queue.print();