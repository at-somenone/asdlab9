import Hasher from './Hasher'

const a = (Math.sqrt(5) - 1) / 2
const multiplyHasher: Hasher = (key: number, tableSize: number) =>
    Math.floor(tableSize * ((key * a) % 1))

export default multiplyHasher
