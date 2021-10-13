import Hasher from './Hasher'

const divideHasher: Hasher = (key: number, tableSize: number) => key % tableSize

export default divideHasher
