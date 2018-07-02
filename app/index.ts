import {phonebook} from "./phonebook";

let testbook = phonebook()

let myself = {
  firstName: 'Mark',
  lastName: 'Nuiver',
  nameInstertion: '',
  telephoneNumber: '0631943331',
}
let johnDoe = {
  firstName: 'John',
  lastName: 'Doe',
  nameInstertion: 'de',
  telephoneNumber: '012345543',
}

testbook.postContact(myself)
testbook.postContact(johnDoe)

console.log(testbook.getContactById(1))
console.log(testbook.getContactById(2))
console.log(testbook.getById('firstName', 2))
console.log(testbook.getById('someName', 2))