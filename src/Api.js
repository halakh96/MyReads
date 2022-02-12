let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const url = "https://reactnd-books-api.udacity.com";

const headers = {
  Authorization: token,
  Accept: "application/json",
  "Content-Type": "application/json",
};

// Get All books with any shelf status but none
export const getAllBooks = async () => {
  const res = await fetch(`${url}/books/`, { headers });
  const data = await res.json();
  return data.books;
};
// Get One Book by ID
export const getOneBook = async (id) => {
  const res = await fetch(`${url}/books/${id}`, { headers });
  const data = await res.json();
  return data.book;
};

// Update book's shelf
export const updateBook = async (id, shelf) => {
  const res = await fetch(`${url}/books/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({ shelf }),
  });
  return await res.json();
};

// Search for a book by title or author
export const searchBook = async (string) => {
  const res = await fetch(`${url}/search`, {
    method: "POST",
    headers,
    body: JSON.stringify({ query: string }),
  });
  const data = await res.json();
  return data.books;
};
