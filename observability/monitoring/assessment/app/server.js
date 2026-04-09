const express = require('express');
const client = require('prom-client');

const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

const httpRequestsTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});

const httpRequestDurationSeconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.05, 0.1, 0.2, 0.5, 1, 2, 5]
});

register.registerMetric(httpRequestsTotal);
register.registerMetric(httpRequestDurationSeconds);

app.use((req, res, next) => {
  const end = httpRequestDurationSeconds.startTimer();

  res.on('finish', () => {
    const route = req.route?.path || req.path || 'unknown';
    const labels = {
      method: req.method,
      route,
      status_code: String(res.statusCode)
    };

    httpRequestsTotal.inc(labels);
    end(labels);
  });

  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'Node.js monitoring app is running',
    endpoints: ['/', '/hello', '/slow', '/metrics']
  });
});

app.get('/hello', async (req, res) => {
  const delay = Math.floor(Math.random() * 150) + 20;
  await new Promise(resolve => setTimeout(resolve, delay));

  res.json({
    message: 'Hello from monitored Node.js app',
    delay_ms: delay
  });
});

app.get('/slow', async (req, res) => {
  const delay = Math.floor(Math.random() * 1200) + 500;
  await new Promise(resolve => setTimeout(resolve, delay));

  res.json({
    message: 'Slow endpoint response',
    delay_ms: delay
  });
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
