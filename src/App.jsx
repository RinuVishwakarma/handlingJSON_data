import React, { useState } from "react";
import booksData from "./data/books.json";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";

function App() {
  const [query, setQuery] = useState("");

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Books Directory</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;
