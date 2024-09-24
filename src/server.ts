import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transactions
  // const transactions = await knex('transactions').where('amount').se
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Runing')
  })
