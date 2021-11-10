import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import Museum from '../models/museum.js'
import User from '../models/user.js'
import userData from './data/users.js'
import museumData from './data/museums.js'

const seedDatabase = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log('🚀 connected to db')

    await mongoose.connection.db.dropDatabase()
    console.log('db has been dropped')

    const users = await User.create(userData)
    console.log(`Users added to db - ${users.length} item`)

    const museums = await Museum.create(museumData)
    console.log(`🌱 Db has been seeded with ${museums.length} museums`)

    await mongoose.connection.close()
    console.log('👋🏽 connection to db closed')

  } catch (err) {
    console.log('🆘 Something has gone wrong seeding the db')
    console.log(err)
  }
}

seedDatabase()