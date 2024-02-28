/* Lists of content

TODO:
Create List for all of the design patterns
Create a render function using the template
Heading is the data
 
 Design Patterns
Singleton
Factory
Observer 
Decorator 
Adapter 
Facade 
Strategy 
Prototype 
Command 
Module
 



Products
Lumpfish Black
Raspberry Jam
Wine Sauvignon Blanc Oyster
Jicama
Cookie Dough Variety
Split Peas Green, Dry
Potatoes Idaho 80 Count
Cake Circle, Paprus
Pomegranates
Pound Cake

Fruits 
apple
banana
orange
strawberry
kiwi
pineapple
mango
pear
peach 
plum

```*/

/* 
    Creating an array
    array delclaration making an array

    Array Data Types 
    values stored in an array
    boolean, numbers, strings, null, undefined, functions, objects
    
    Access an item in the array
    array[indexNumber]

    Array.length
    length property is the number of items in the array

    Array.forEach()

     Querying The Dom
     querySelectorAll()
     querySelector()
     
     NodeList
     A NodeList is a collection of document nodes
     Examples Element Nodes, Attribute Nodes, and Text Nodes 

    
      HTMLCollection
      An HTMLCollection is a collection of document elements
      Element is a specific type of Node that represents an HTML element
      Not all Nodes are Elements
      There are different types of Nodes.


     Children (property for nodelist and html collection)
      

*/

/*
Fruits 
apple
banana
orange
strawberry
kiwi
pineapple
mango
pear
peach 
plum
*/

// create an array [] think array(?)
// Templating - Display Templating
// Data array... will eventually come from an external source
// Rendering

/*
    1. Array of data
    2. Template HTML+CSS
    3. Render function holds the template
    4. Loop through each item in the array
        Array.forEach(cb)
*/
// const fruitsList = ['apples', 'banana', 'kiwi', 'pear', 'orange']

// fruitsList.forEach((fruit) => {
//     render(fruit, document.querySelector('#fruits'))
// })

// function render(data, domContainer) {
//     const template = `<li class="text-lg text-zinc-600 border-b border-zinc-300 py-1 px-4">${data}</li>`
//     // afterbegin  place first last
//     //before end  place the first element first
//     domContainer.insertAdjacentHTML('beforeend', template)
// }

// layout thrashing
const patternsList = ["Singleton", "Factory", "Observer", "Decorator", "Adapter", "Facade", "Strategy", "Prototype", "Command", "Module"]

patternsList.forEach((pattern) => {
        render(pattern, document.querySelector('#patterns'))
    })

function render(data, container) {
    const template = `<li class="border py-8 px-6">
    <h3 class="text-lg font-semibold underline font-zinc-950">${data}</h3>
    <p class="text-sm text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error velit doloremque?</p>
</li>`
    container.insertAdjacentHTML('beforeend', template)
}