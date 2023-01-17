  function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  function BinarySearchTree(value) {
    this.head = null;
  }

  function traverse(currNode, node) {
    
  }
  
  BinarySearchTree.prototype.add = function(value) {
    const node = new Node(value);
    const currNode = this.head;
    if (this.head = null){
        this.head = node;
    } else {
        traverse(currNode, node);
    }
  
  };
  
  BinarySearchTree.prototype.contains = function(value) {
  
  };
  
  // applies the callback in the order of depth first (preorder)
  BinarySearchTree.prototype.depthFirstPre = function(callback) {
  
  };
  
  // applies the callback in the order of depth first (inorder)
  BinarySearchTree.prototype.depthFirstIn = function(callback) {
  
  };
  
  // applies the callback in the order of depth first (postorder)
  BinarySearchTree.prototype.depthFirstPost = function(callback) {
  
  };
  
  // applies the callback in the order of breath first (level order)
  BinarySearchTree.prototype.breadthFirst = function(callback) {
  
  };
  
  // Extra Bonus
  // Return the minimum stored value
  BinarySearchTree.prototype.min = function() {
  
  };
  
  // Extra Bonus
  // Return the maximum stored value
  BinarySearchTree.prototype.max = function() {
  
  };
  
  // Extra Bonus
  // Return the height of the tree
  BinarySearchTree.prototype.height = function() {
    
  };
  
  // Extra Bonus
  // Remove an item from the tree and ensure that the children of the item are properly repositioned
  BinarySearchTree.prototype.remove = function(item) {
  
  };