function LinkedList(item) {
    this.head = null;
}


function Node(value) {
    this.value = value;
    this.next = null;
}


LinkedList.prototype.push = function(value) {
    const node = new Node(value);
    if (this.head === null){
        this.head = node;
    }else {
        let currentNode = this.head;

        while(currentNode.next){
            currentNode = currentNode.next;
        }

        currentNode.next = node;
    }
    console.log(`LinkedList.push(${value})`);
};

LinkedList.prototype.contains = function(value) {

    let currentNode = this.head;
    do { 
        if (currentNode.value === value) return true;
        currentNode = currentNode.next;
    } while (currentNode.next)

   
    return false;
};


LinkedList.prototype.addToHead = function(value) {

    const firstNode = this.head;
    let node = new Node(value);
    this.head = node;
    node.next = firstNode;
    console.log(`LinkedList.addToHead(${value})`);

};

// insert an item at the position specified
LinkedList.prototype.insert = function(value, position) {

    let currentNode = this.head;
    let prevNode = this.head;
    const node = new Node(value);

    if (position === 1){
        node.next = this.head;
        this.head = node;
    } else {
        for (let i=1; i < position; i++){
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = node;
        node.next = currentNode;
    }

    console.log(`LinkedList.insert(${value}, ${position})`);

};


LinkedList.prototype.removeItem = function (value) {

    let currentNode = this.head;
    let prevNode = this.head;

    do {
        if (currentNode.value === value){
            if (currentNode === this.head){
                this.head = currentNode.next;   
            }else{
                prevNode.next = currentNode.next;
            }
            return;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
    } while (currentNode.next !== null)

    console.log(`LinkedList.removeItem(${value})`);


};

// remove element at specified position in list
LinkedList.prototype.removePosition = function (position) {

    let currentNode = this.head;
    let prevNode = this.head;
    if (position === 1){
        this.head = currentNode.next;
    }else{
        for (let i=1; i<position; i++){
            prevNode = currentNode;
            currentNode = currentNode.next
        }
        prevNode.next = currentNode.next; 
    }
    console.log(`LinkedList.removePosition(${position})`);

};

// remove element at specified position in list
LinkedList.prototype.print = function () {
    let currentNode = this.head;
    let printArr = [];
    while (currentNode != null){
        printArr.push(currentNode.value);
        currentNode = currentNode.next;
    }
    console.log(`LinkedList.print()  => ${printArr.join(", ")}\n`);

};

const linkedList = new LinkedList();
linkedList.push("cat");
linkedList.push("mouse");
linkedList.push("tiger");
linkedList.push("monkey");
linkedList.push("jasmine");
linkedList.print();
linkedList.removePosition(1);
linkedList.print();
linkedList.addToHead("camel");
linkedList.removeItem("tiger");
linkedList.print();
 linkedList.insert("tesla", 2);
linkedList.print();
linkedList.removePosition(2);
linkedList.print();
console.log(`LinkedList.contains(camel) = > ${linkedList.contains("camel")}`);


