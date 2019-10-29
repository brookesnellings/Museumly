const app = require('./app');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '3000';

app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Shenanigans happening on aisle ${host}:${port}`);
});
