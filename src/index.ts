import { defineEventHandler } from 'h3';

export default function(baseUrl: string) {
  defineEventHandler(async (event) => {
    try {
      return await fetch(baseUrl, { headers: event.context.headers })
    } catch (err) {
      console.error('Error: ', err)
      throw err
    }
  })
}
