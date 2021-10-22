import StringConverter from './StringConverter'
import Hasher from './Hasher/Hasher'
import prober from './Prober'

export default class HashTable {
    private readonly arr: string[]
    constructor(
        readonly hasher: Hasher,
        readonly c: number,
        readonly d: number,
        readonly size: number
    ) {
        this.arr = Array(size)
        console.log(this.arr.length)
    }

    // возвращает длину поиска
    add(key: string): number {
        let searchLength = 0
        const keyNum = StringConverter(key)
        const initialHash = this.hasher(keyNum, this.size)
        let currentHash = initialHash
        while (this.arr[currentHash] !== undefined) {
            if (this.arr[currentHash] == key)
                throw new Error('key is already in table')
            searchLength += 1
            currentHash =
                prober(initialHash, searchLength, this.c, this.d) % this.size
        }

        this.arr[currentHash] = key
        return searchLength
    }
}
