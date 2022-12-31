function HashTable() {
    this.SIZE = 4;
  
    // the array will be instantiated as [undefined, undefined....]
    // pop() and push() shouldn't be used on the storage
    this.storage = new Array(this.SIZE);
  }
  
  // stores a value in the storage array
  // hint: use the hash function to determine where in the array to store the value
  HashTable.prototype.set = function(key, value) {
    const arrayIndex = hashCode(key, this.SIZE);
    if (this.storage[arrayIndex] ===  undefined){ // no collision
      this.storage[arrayIndex] = {
        key: value
      }
    }else {
      this.storage[arrayIndex][key] = value;
    }
    console.log("HashTable.set: this.storage =", this.storage);
    return this.storage.length;
  };
  
  // return a previously stored value
  HashTable.prototype.get = function(key) {
    const arrayIndex = hashCode(key);
    return this.storage[arrayIndex][key];
  };
  
  // returns and removes a key from the hash table
  HashTable.prototype.remove = function(key) {
    const arrayIndex = hashCode(key);
    delete this.storage[arrayIndex][key];
    return this.storage.length;
  };

  function print(){
    console.log("HashTable.print: this.storage =", this.storage);
  }
  
  // returns a number between 0 and size that is unique* and generated from the the inputted string
  function hashCode(string, size){
    let hash = 0;
    if (string.length == 0) return hash;
    for (let i = 0; i < string.length; i++) {
      const letter = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + letter;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash) % size ;
  }


  const hashTable = new HashTable();
  hashTable.set("1", "Tommy");
  hashTable.set("2", "Jamie");
  hashTable.set("3", "Claude");
  hashTable.set("5", "Jackie");
  hashTable.set("6", "James");
  hashTable.set("7", "Jeff");
  hashTable.set("8", "Joe");