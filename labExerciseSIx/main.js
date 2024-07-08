const book = {
    "title" : "Javascript The Definitive Guide",
    "description": "Understamding javascript in depth",
    "author" : "David Flanagan",
    "numberOfPages": 888
}

console.log(`Title: ${book.title}`);
console.log(`Description: ${book.description}`);
console.log(`Number Of Pages: ${book.numberOfPages}`);
console.log(`Author: ${book.author}`);

book.description = "Changed the description";

console.log("--------- Changed the despcription -----------");
console.log(`Description: ${book.description}`);