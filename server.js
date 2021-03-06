const express = require('express')

const app = express()

const port = 3333

app.get('/', async (req, res) => {
  res.send('Welcome to your local express server at port ' + port)
})

app.get('/calc/:op/:nb1/:nb2', async (req, res) => {
  try {
    /* 
    Correction: mettre cette fonction dans un module, ou l'extraire de ta route
    */
    const calc = (op, nb1, nb2) => {
      switch (op) {
        case 'add':
          return nb1 + nb2
        case 'sub':
          return nb1 - nb2
        case 'mul':
          return nb1 * nb2
        case 'div':
          return nb1 / nb2
        case 'mod':
          return nb1 % nb2
      }
    }
    const op = req.params.op
    const nb1 = Number(req.params.nb1)
    const nb2 = Number(req.params.nb2)
    // Correction:  Il y a des tests à effectuer sur l'opérateur et les opérandes
    // Pour vérifier que l'opérateur arithmétique est supporté et les opérandes sont bien des nb.
    const jsobj = {
      op: op,
      nb1: nb1,
      nb2: nb2,
      result: calc(op, nb1, nb2),
    }
    res.json(jsobj)
  } catch (e) {
    res.send(e.message)
  }
})

app.listen(port, async () => {
  console.log(`App listening at http://localhost:${port}`)
})
