function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  function BinarySearchTree(){
    this.head = null;
  }

  function traverse(currNode, newNode){
    if (currNode.value > newNode.value){
      (currNode.left === null) ? currNode.left = newNode : traverse(currNode.left, newNode);
    } else if (currNode.value < newNode.value ) {
     (currNode.right === null) ? currNode.right = newNode : traverse(currNode.right, newNode);
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
      traverse(currNode, node);
    }
  };

  const inOrder = function (node){
    let result = [];
    if (node) {
      result = result.concat(inOrder(node.left));
      result.push(node.value);
      result = result.concat(inOrder(node.right))
    }
    return result;
  }

  BinarySearchTree.prototype.inOrder = function() {
    return inOrder(this.head);
  };
  
  function searchValue(currNode, value){
    if (currNode.value > value){
      if (currNode.left === null){
        return false;
      } else {
        return searchValue(currNode.left, value);
      }
    } else if (currNode.value < value ) {
     if (currNode.right === null) {
        return false 
      } else {
        return searchValue(currNode.right, value);
      } 
    } else {
      return true
    }
  }
  BinarySearchTree.prototype.contains = function(value) {
    return searchValue(this.head, value)
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
  console.log("bst.contains(15) =", binarySearchTree.contains(15) );
  console.log("bst.contains(3) =", binarySearchTree.contains(3) );