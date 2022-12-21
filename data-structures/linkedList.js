function LinkedList(item) {
    this.head = null
    this.tail = null;
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

};

// insert an item at the position specified
LinkedList.prototype.insert = function(value, position) {

    let currentNode = this.head;
    let prevNode = this.head;
    const currPosition = 1;
    const node = new Node(value);

    if (position === 1){
        node.next = this.head;
        this.head = node;
    } else {

        for (let i=1; i = position; i++){
            prevNode = currentNode;
            currentNode = currentNode.next
        }
        prevNode.next = node;
        node.next = currentNode;
    }



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

    console.log("LinkedList.removeItem - could not find node to remove")


};