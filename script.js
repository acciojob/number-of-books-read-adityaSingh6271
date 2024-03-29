const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // Filter the library array to include only those with readingStatus set to true
  const readBooks = library.filter(book => book.readingStatus === true);

  // Return the count of read books
  return readBooks.length;
};

// Do not change the code below

alert(numberOfBooksRead());
