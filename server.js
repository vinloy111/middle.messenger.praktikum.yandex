import express from 'express';
import { join, resolve } from 'path';
const __filename = new URL(import.meta.url).pathname;

const app = express();
const PORT = process.env.PORT || 3000;
const absolutePath = resolve('dist');

app.use(express.static(join(absolutePath)));

app.get('/', (req, res) => {
  const indexPath = join(absolutePath, 'index.html');
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
