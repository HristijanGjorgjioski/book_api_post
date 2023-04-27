const express = require('express');
const app = express();

app.use(express.json());

const books = [];

app.post('/book', (req, res) => {
  const { title, author, description, numberOfPages } = req.body;

  if (!title || !author || !description || !numberOfPages) {
    return res
      .status(400)
      .send({ message: 'Please provide all props', status: 400 });
  }

  const newBook = { title, author, description, numberOfPages };

  books.push(newBook);

  return res.status(201).send({ message: 'Book created', books });
});

app.listen(3005, () => {
  console.log(`[server]: Listening on port 3005 ⚡️`);
});

