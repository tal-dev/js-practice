/*
   Task Description:
   Write a function called "isPalindrome" that takes a linked list as its parameter and returns true if the linked list is a palindrome, and false otherwise. A palindrome is a sequence of values that reads the same forwards and backwards.

   Example:
   var list1 = new LinkedList();
   list1.add(1);
   list1.add(2);
   list1.add(2);
   list1.add(1);
   var result1 = isPalindrome(list1);
   console.log(result1); // Output: true (1->2->2->1 is a palindrome)

   var list2 = new LinkedList();
   list2.add(1);
   list2.add(2);
   list2.add(1);
   var result2 = isPalindrome(list2);
   console.log(result2); // Output: true (1->2->1 is a palindrome)

   var list3 = new LinkedList();
   list3.add(1);
   list3.add(2);
   list3.add(1);
   list3.add(2);
   var result3 = isPalindrome(list3);
   console.log(result3); // Output: false (1->2->1->2 is not a palindrome)
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function isPalindrome(head) {
    //implement here
}