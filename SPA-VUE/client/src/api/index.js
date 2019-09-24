
 const URL="http://localhost:3000/books";

export async function getAllBooks() {
    const data = await fetch(URL);
    const  {books}= await data.json();
    return books;
  }