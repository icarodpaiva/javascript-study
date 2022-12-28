// prevent syntax errors
"use strict"

// undeclared variables
x = 3

// confusing  formats
const y = 010 // its generate the number 8
const z = "\010" // its generate the string "\b"

// "this" is binding in functions
;(function functionBinded() {
  console.log(this) // will be "undefined"
})()
