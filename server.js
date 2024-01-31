const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist', 'crud-angular')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'crud-angular', 'index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
