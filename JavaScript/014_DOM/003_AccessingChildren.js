// Children of an element
// Direct as well as deeply nested elements of an element are called its children.

// child nodes : Elements that are directly children 
// For example <body> and <head> are direct children of <html>

// Siblings :
// <html>
// <head>
// <meta></meta>
// </head>
// <body>
// <p>This is a p tag</p> 
// <div>This is a div tag</div> 
// </body>
// </html>

// p and div are siblings 

// Descendant : All the elements inside the parent tag are descendants
//  document.body.firstChild
//  document.body.lastChild

// Converting child nodes into an array
let arr = Array.from(document.body.childNodes)
console.log(arr)

// Accessing first child and last child
console.log(document.body.firstChild)

console.log(document.body.lastChild)

// Accessing child with child nodes 
console.log(document.body.childNodes[0]) //this will return 1st child

console.log(document.body.childNodes[(document.body.childNodes.length-1)]) //this will return last child


