const app = require('./app');

const host = process.env.host || '0.0.0.0';
const port = process.env.port || '3000';

app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Shenanigans happening on aisle ${host}:${port}`);
});
