import { MarcaI } from "./marcas"

export interface CarroI {
  id:          number 
  modelo:      String   
  ano:         number
  preco:       number
  km:          number
  destaque:    boolean  
  foto:        string   
  acessorios:  String
  createdAt:   Date
  updatedAt:   Date
  combustivel: string
  marca:       MarcaI
  marcaId:     number
}