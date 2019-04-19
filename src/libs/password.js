import crypto from 'crypto'

export const password = (ps) => {
  const md5 = crypto.createHash('md5')
  return md5.update(ps).digest('hex')
}