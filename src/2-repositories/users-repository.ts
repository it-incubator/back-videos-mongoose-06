import {ObjectId} from 'mongodb'
import {UserDBType} from './types'
import {usersCollection} from './db'

export const usersRepository = {
    async getUsers(): Promise<UserDBType[]> {
        return usersCollection.find({}).toArray()
    },
    async getUser(id: ObjectId): Promise<UserDBType | null> {
        return usersCollection.findOne({_id: id})
    },
    async createUser(user: UserDBType): Promise<UserDBType> {
        const result = usersCollection.insertOne(user);
        return user;
    },
    async updateUser(id: ObjectId, userName: string, bio: string): Promise<boolean> {
        return true
    },
    async deleteUser(id: ObjectId): Promise<boolean> {
        const result = await usersCollection.deleteOne({_id: id});
        return result.deletedCount === 1
    }
}
