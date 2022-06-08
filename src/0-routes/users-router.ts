import {Request, Response, Router} from 'express'
import { ObjectId } from 'mongodb'
import {usersService} from '../1-application/users.service'

export const usersRouter = Router({})

usersRouter.post('/',
    async (req: Request<{},{},{userName: string, bio: string}>, res: Response) => {
        const user = await usersService.createUser(req.body.userName, req.body.bio)
        res.status(201).send(user)
    })

usersRouter.put('/:id',
    async (req: Request<{id: string},{userName: string, bio: string}>, res: Response) => {
        const isUpdated = await usersService.updateUser(new ObjectId(req.params.id), req.body.bio, req.body.userName)
        if (isUpdated) {
            res.send(204)
        } else {
            res.send(404)
        }
    })

usersRouter.get('/', async (req: Request, res: Response) => {
    const users = await usersService.getUsers()
    res.send(users)
})

usersRouter.get('/:id', async (req: Request<{id: string}>, res: Response) => {
    let user = await usersService.getUser(new ObjectId(req.params.id))
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})

usersRouter.delete('/:id', async (req: Request<{id: string}>, res: Response) => {
    const isDeleted = await usersService.deleteUser(new ObjectId(req.params.id))
    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
})
