function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  function BinarySearchTree(){
    this.head = null;
  }

  function searchTree(currNode, newNode){
    if (currNode.value < newNode.value){
      (currNode.left === null) ? currNode.left = newNode : searchTree(currNode.left, newNode);
    } else if (currNode.value > newNode.value ) {
     (currNode.right === null) ? currNode.right = newNode : searchTree(currNode.right, newNode);
    } else {
      return;
    }

  }
  BinarySearchTree.prototype.add = function(value) {
    const node = new Node(value);
    let currNode = this.head;
    if (this.head === null){
      this.head = node;
    }else{
      searchTree(currNode, node);
    }
  };

  const inOrder = function (node){
    let result = [];
    if (node) {
      result = result.concat(inOrder(node.right));
      result.push(node.value);
      result = result.concat(inOrder(node.left))
    }
    return result;
  }

  BinarySearchTree.prototype.inOrder = function() {
    return inOrder(this.head);
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

  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.add(12); 
  binarySearchTree.add(10); 
  binarySearchTree.add(6); 
  binarySearchTree.add(11); 
  binarySearchTree.add(15); 
  binarySearchTree.add(18); 
  binarySearchTree.add(13); 
  console.log("bst.inorder binarySearchTree.inOrder=", binarySearchTree.inOrder())