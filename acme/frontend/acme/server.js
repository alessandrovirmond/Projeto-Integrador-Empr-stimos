import fs from 'node:fs/promises'
import express from 'express'

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/ssr-manifest.json', 'utf-8')
  : undefined

// Create http server
const app = express()
/* app.use(express.static('public'));
 */

app.get('/emprestimo.html', async (req, res) => {
  try {
    const emprestimoHtml = await fs.readFile('emprestimo.html', 'utf-8');
    res.status(200).set({ 'Content-Type': 'text/html' }).end(emprestimoHtml);
  } catch (e) {
    console.error(e);
    res.status(500).end('Erro ao acessar emprestimo.html');
  }
});


app.get('/cadastro.html', async (req, res) => {
  try {
    const cadastroHtml = await fs.readFile('cadastro.html', 'utf-8');
    res.status(200).set({ 'Content-Type': 'text/html' }).end(cadastroHtml);
  } catch (e) {
    console.error(e);
    res.status(500).end('Erro ao acessar cadastro.html');
  }
});


app.get('/home.html', async (req, res) => {
  try {
    const homeHtml = await fs.readFile('home.html', 'utf-8');
    res.status(200).set({ 'Content-Type': 'text/html' }).end(homeHtml);
  } catch (e) {
    console.error(e);
    res.status(500).end('Erro ao acessar home.html');
  }
});



let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
}

app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')

    let template
    let render
    if (!isProduction) {

      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.ts')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    const rendered = await render(url, ssrManifest)

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
