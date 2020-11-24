describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('constructor', () => {
    it('should initialize the size of the linked list to 0', () => {
      expect(linkedList.size()).toEqual(0);
    });
  });

  describe('insert', () => {
    it('should increase the size of the linked list', () => {
      linkedList.insert(5);
      expect(linkedList.size()).toEqual(1);
    });
    it('should set the first element of the linked list to the given value if the list is empty', () => {
      linkedList.insert(5);

      var firstElementValue = linkedList.head.value;
      expect(firstElementValue).toEqual(5);
    });
    it('should insert a second element after the first in sequence', () => {
      linkedList.insert(5);
      linkedList.insert(13);

      var firstElementValue = linkedList.head.value;
      var secondElementValue = linkedList.head.next.value;
      expect(firstElementValue).toEqual(5);
      expect(secondElementValue).toEqual(13);
    });
    it('should insert a third element after the second in sequence', () => {
      linkedList.insert(5);
      linkedList.insert(13);
      linkedList.insert(17);

      var firstElement = linkedList.head;
      var secondElement = firstElement.next;
      var thirdElement = secondElement.next;

      expect(firstElement.value).toEqual(5);
      expect(secondElement.value).toEqual(13);
      expect(thirdElement.value).toEqual(17);
    });
  });

  describe('remove', () => {
    var testNode1;
    var testNode2;
    var testNode3;
    var testNode4;
    var testNode5;

    beforeEach(() => {
      testNode1 = new Node(5);
      testNode2 = new Node(1);
      testNode3 = new Node(5);
      testNode4 = new Node(7);
      testNode5 = new Node(14);

      testNode1.next = testNode2;
      testNode2.next = testNode3;
      testNode3.next = testNode4;
      testNode4.next = testNode5;

      linkedList.head = testNode1;
      linkedList.listSize = 5;
    });

    it('should replace the start node with the second node when the first node value is 5 and the remove function is called with the value 5', () => {
      linkedList.remove(5);

      var head = linkedList.head;
      expect(head).toEqual(testNode2);
    });
    it('should decrease the size of the list by one when a node is removed', () => {
      expect(linkedList.listSize).toEqual(5);

      linkedList.remove(5);

      expect(linkedList.listSize).toEqual(4);
    });
    it('should not remove anything if the value passed to the remove function does not exist in the list', () => {
      expect(linkedList.listSize).toEqual(5);

      linkedList.remove(74);

      expect(linkedList.listSize).toEqual(5);

      var node1 = linkedList.head;
      var node2 = node1.next;
      var node3 = node2.next;
      var node4 = node3.next;
      var node5 = node4.next;

      expect(node1).toEqual(testNode1);
      expect(node2).toEqual(testNode2);
      expect(node3).toEqual(testNode3);
      expect(node4).toEqual(testNode4);
      expect(node5).toEqual(testNode5);
    });
    it('should remove a node from the middle if that is where the value is found, and preserve the rest of the sequence', () => {
      linkedList.remove(7);

      var node1 = linkedList.head;
      var node2 = node1.next;
      var node3 = node2.next;
      var node4 = node3.next;

      expect(node1).toEqual(testNode1);
      expect(node2).toEqual(testNode2);
      expect(node3).toEqual(testNode3);
      expect(node4).toEqual(testNode5);
    });
    it('should not modify the list sequence if the last node is the node to be removed', () => {
      linkedList.remove(14);

      var node1 = linkedList.head;
      var node2 = node1.next;
      var node3 = node2.next;
      var node4 = node3.next;

      expect(node1).toEqual(testNode1);
      expect(node2).toEqual(testNode2);
      expect(node3).toEqual(testNode3);
      expect(node4).toEqual(testNode4);
    });
    it('should not die if there are no values in the list', () => {
      linkedList = new LinkedList();
      linkedList.remove(45);
      expect(linkedList.head).toEqual(null);
    });
  });

  describe('size', () => {
    it('should return 5 when there are 5 elements in the linked list', () => {
      linkedList.insert(5);
      linkedList.insert(1);
      linkedList.insert(5);
      linkedList.insert(7);
      linkedList.insert(14);
      expect(linkedList.size()).toEqual(5);
    });
  });
});
