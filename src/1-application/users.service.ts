import {ObjectId} from 'mongodb'
import {usersRepository} from '../2-repositories/users-repository'
import {UserDBType} from '../2-repositories/types'

export const usersService = {
    async getUsers(): Promise<UserDBType[]> {
        return usersRepository.getUsers()
    },
    async getUser(id: ObjectId): Promise<UserDBType | null> {
        return usersRepository.getUser(id)
    },
    async createUser(userName: string, bio: string): Promise<UserDBType> {
        let user = {_id: new ObjectId(), userName, bio, addedAt: new Date()}
        return usersRepository.createUser(user)
    },
    async updateUser(id: ObjectId, userName: string, bio: string): Promise<boolean> {
        return usersRepository.updateUser(id, userName, bio)
    },
    async deleteUser(id: ObjectId): Promise<boolean> {
        return usersRepository.deleteUser(id)
    }
}
