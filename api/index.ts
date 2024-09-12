import express from 'express'
import cors from 'cors'


import marcasRoutes from './routes/marcas'
import sapatosRoutes from './routes/sapatos'
const app = express()
const port = 3004

app.use(express.json())
app.use(cors())

app.use("/marcas", marcasRoutes)
app.use("/sapatos", sapatosRoutes)

app.get('/', (req, res) => {
  res.send('API: Sistema de Controle ded Veículos')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})