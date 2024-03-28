import config from '../../../config'
import { generateId } from './user.utlities'
import { IUser } from './users.interface'
import { User } from './users.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // incresment ID Need
  const id = await generateId();
  user.id = id
  // DEfalut Password Need
  if (!user.password) {
    user.password = config.default_user_password
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to Create an User')
  }
  return createdUser
}
export default {
  createUser,
}
