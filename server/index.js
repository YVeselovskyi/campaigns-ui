import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('client/public'));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
});


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
