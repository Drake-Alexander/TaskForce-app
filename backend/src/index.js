const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('TaskForce API is running');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});