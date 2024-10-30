import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { DataTreeController } from './controllers/DataTreeController';
import { DataTreeService } from './services/DataTreeService';
import { DataTreeRepository } from './repositories/DataTreeRepository';

const app = new Hono()
app.use(
    '/*',
    cors({
      origin: '*',
      allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests', 'Content-Type', 'Authorization'],
      allowMethods: ['POST', 'GET', 'PUT', 'PATCH', 'OPTIONS'],
      exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
      maxAge: 600,
      credentials: false,
    })
)
app.get('/', async (c) => {
    let response = await (new DataTreeController(new DataTreeService(new DataTreeRepository()))).getDataTree();
    c.header('Content-Type', 'application/json')
    c.status(200)
    return c.json({ message: 'Success!', data: response })
});
app.post('/tree/create', async (c) => {
    let data = await c.req.json();
    let response = (new DataTreeController(new DataTreeService(new DataTreeRepository()))).createDataTree(data)

    c.header('Content-Type', 'application/json')
    if (response === null) {
        c.status(401)
        return c.json({ message: 'Error! not was possible create data tree' })
    }
    c.status(201)
    return c.json({ message: 'Success! data tree was created' })
});

export default { 
  port: 5000,
  fetch: app.fetch, 
} 
