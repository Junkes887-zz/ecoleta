import {Request, Response} from 'express'
import knex from '../database/connection'

class ItemsController {
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*')
    
        const serializedItems = items.map( i => {
            return {
                id: i.id,
                title: i.title,
                image_url: `http://10.0.0.109:3333/uploads/${i.image}`
            }
        })
    
        return response.json(serializedItems)
    }
}

export default ItemsController