const express = require('express');
const app = express();

// Use express.json() with options to handle larger request bodies and potential errors
app.use(express.json({ limit: '50mb', type: '*/*' })); // Adjust '50mb' as needed

app.post('/data', (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      console.error('Error: Request body is empty');
      return res.status(400).send('Bad Request: Empty request body');
    }
    // ... process data ...
    console.log('Received data:', data);
    res.status(200).send('Data received');
  } catch (error) {
    console.error('Error parsing request body:', error);
    res.status(400).send('Bad Request: Error parsing JSON');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});