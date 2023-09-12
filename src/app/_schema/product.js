import { client } from '../_lib/redis'
import { Schema, Repository } from 'redis-om'

// product schema
const productSchema = new Schema('product', {
  title: {type: 'text'},
  price: {type: 'number'},
  count: {type: 'number'},
  colors: {type: 'string[]'},
  size: {type: 'string'},
  img: {type: 'string'}
})

// product repository
const productRepository = new Repository(productSchema, client)

// create a product index
productRepository.createIndex()

export { productRepository }