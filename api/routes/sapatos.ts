import { PrismaClient } from "@prisma/client"
import { Router } from "express"

const prisma = new PrismaClient()
const router = Router()

router.get("/", async (req, res) => {
  try {
    const sapatos = await prisma.sapato.findMany({
      include: {
        marca: true, 
       
      }
    })
    res.status(200).json(sapatos)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post("/", async (req, res) => {
  const { modelo, preco,  foto, descricao, marcaId } = req.body

  if (!modelo || !preco || !foto || !descricao || !marcaId ) {
    res.status(400).json({ "erro": "Informe modelo, preco, foto, descricao e marcaId" })
    return
  }

  try {
    const sapato = await prisma.sapato.create({
      data: { modelo,  preco, foto, descricao, marcaId }
    })
    res.status(201).json(sapato)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const sapato = await prisma.sapato.delete({
      where: { id: Number(id) }
    })
    res.status(200).json(sapato)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const { modelo, preco, foto, descricao, marcaId } = req.body

  if (!modelo || !preco || !foto || !descricao || !marcaId ) {
    res.status(400).json({ "erro": "Informe modelo, preco, foto, descricao e marcaId" })
    return
  }

  try {
    const sapato = await prisma.sapato.update({
      where: { id: Number(id) },
      data: { modelo, preco, foto, descricao, marcaId }
    })
    res.status(200).json(sapato)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.get("/pesquisa/:termo", async (req, res) => {

const { termo } = req.params

const termoNumero = Number(termo)

if (isNaN(termoNumero)) {
  try {
    const sapatos = await prisma.sapato.findMany({
      include: {
        marca: true 
      },
      where: {
        OR: [
          { modelo: { contains: termo}},
          { marca: { nome: termo}}
        ]
      }
    })
    res.status(200).json(sapatos)
  } catch (error) {
    res.status(400).json(error)
  }
} else {
  try {
    const sapatos = await prisma.sapato.findMany({
      include: {
        marca: true 
      },
      where: {
        OR: [
          { preco: { lte: termoNumero }},
        ]
      }
    })
    res.status(200).json(sapatos)
  } catch (error) {
    res.status(400).json(error)
  }
}

 
router.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const sapatos = await prisma.sapato.findUnique({
      where: {id: Number(id)},
      include: {
        marca: true, 
       
      }
    })
    res.status(200).json(sapatos)
  } catch (error) {
    res.status(400).json(error)
  }
})

})

export default router