// This is also a structural design pattern that focuses on
// the ability to add behaviour or functionalities to existing classes dynamically

class Book {
  constructor(title, author, price) {
    this._title = title;
    this._author = author;
    this.price = price;
  }

  getDetails() {
    return `${this._title} by ${this._author}`;
  }
}

function giftWrap(book) {
  book.isGiftWrapped = true;
  book.unwrap = () => {
    return `Unwrapped ${book.getDetails()}`;
  };

  return book;
}
// usage
const newBehavior = giftWrap(new Book("The book", "Golf", 500));
console.log(newBehavior.isGiftWrapped);
console.log(newBehavior.unwrap());
