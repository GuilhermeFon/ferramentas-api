import { MarcaI } from "./marcas"

export interface SapatoI {
  id:          number 
  modelo:      String   
  preco:       number
  destaque:    boolean  
  foto:        string   
  descricao:  String
  createdAt:   Date
  updatedAt:   Date
  marca:       MarcaI
  marcaId:     number
}