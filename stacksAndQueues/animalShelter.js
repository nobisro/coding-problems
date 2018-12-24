/*
Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first
out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
that type). They cannot select which specific animal they would like. Create the data structures to
maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
and dequeueCat. You may use the built-in Linked List data structure.
Hints: #22, #56, #63

use a Linked List to construct a Queue
initialize three Queues: Cat, Dog, Both
on enqueue, check if incoming is Cat or Dog and enqueue appropriate Queue
    also enqueue Both

on dequeueAny, check if type if Cat or Dog, and also dequeue appropriate Queue


*/

function LinkedList() {
  this.head = null;
  //   this.next = null;
  this.enqueue = function(val) {
    let current = this.head;
    if (current === null) {
      this.head = val;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = val;
      current.next.next = null;
    }
  };
  this.dequeue = function() {
    // store this.head in temp variable
    // set this.head to equal this.head.next
    // return temp variable

    let temp = this.head;
    this.head = this.next;
    return temp;
  };
  this.removeFirst = function(type) {
    let current = this.head;
    if (current.type === type) {
      let temp = current;
      current = current.next;
      console.log("current:", current.name, "next:", current.next.name);
      return temp;
    } else {
      while (current.next !== null) {
        if (current.next.type === type) {
          current.next = current.next.next;
          break;
        } else {
          current = current.next;
        }
      }
    }
  };
}

function Shelter() {
  this.cats = new LinkedList();
  this.dogs = new LinkedList();
  this.both = new LinkedList();

  this.enqueue = function(animal) {
    if (animal.type === "cat") {
      this.cats.enqueue(animal);
      this.both.enqueue(animal);
    } else if (animal.type === "dog") {
      this.dogs.enqueue(animal);
      this.both.enqueue(animal);
    }
  };
  this.dequeueAny = function() {
    let last = this.both.dequeue();
    if (last.type === "cat") {
      this.cats.dequeue();
    } else {
      this.dogs.dequeue();
    }
  };
  this.dequeueCat = function() {
    this.both.removeFirst("cat");
    return this.cats.dequeue();
  };
  this.dequeueDog = function() {
    this.both.removeFirst("dog");
    return this.dogs.dequeue();
  };
  this.addAnimalNode = function(name, type) {
    let animal = {
      name: name,
      type: type,
      next: null
    };

    this.enqueue(animal);
  };
  this.printAll = function() {
    let current = this.both.head;

    while (current) {
      console.log(current.name);
      current = current.next;
    }
  };
}

let shelter = new Shelter();
shelter.addAnimalNode("ace", "dog");
shelter.addAnimalNode("edie", "dog");
shelter.addAnimalNode("freckles", "cat");
shelter.addAnimalNode("boots", "cat");

shelter.dequeueDog();
console.log("all:");
shelter.printAll();
// console.log("shelter:", shelter);
