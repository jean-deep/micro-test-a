import express from 'express';

const app = express();
const PORT = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'micro-test-a',
    message: 'Hello from micro-test-a!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`micro-test-a listening on port ${PORT}`);
});
