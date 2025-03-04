import express from 'express';
import dotenv from 'dotenv';
import routes from './routes.js'  
import pages from './Client/Pages/htmlMainPage.js';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(pages.home)
})

app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`O servidor foi iniciado! Endereço: http://localhost:${PORT}`);
});
