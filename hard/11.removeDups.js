/*
   Task Description:
   Write a function called "removeDups" that takes the head of an unsorted linked list as its parameter and removes duplicates from the list.

   Example:
   let head = new Node(1);
   head.next = new Node(1);
   head.next.next = new Node(2);
   // Linked list: 1 -> 1 -> 2 -> null

   removeDups(head);

   // Linked list after removing duplicates: 1 -> 2 -> null
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function removeDups(node) {
    //implement here
}