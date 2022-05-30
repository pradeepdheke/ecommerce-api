import bcrypt from 'bcrypt'
const saltRounds = 10

export const encryptPassword = (password) => {
    return bcrypt.hashSync(password, saltRounds)
}