import { User } from './users.model'

export const lastfineUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}

export const generateId = async () => {
  const currentId = (await lastfineUserId()) || (0).toString().padStart(5, '0')
  return currentId
}

/**
 * IF you want to get USER Last Id Then you need to do Query On UsersDatabase by createAt Property.
 *
 *
 */
