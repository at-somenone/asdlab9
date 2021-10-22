import { customAlphabet } from 'nanoid/non-secure'
import Hasher from './HashTable/Hasher/Hasher'
import HashTable from './HashTable/HashTable'

const nanoid = customAlphabet(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    6
)

export default function testProber(
    hasher: Hasher,
    c: number,
    d: number,
    keyCount: number,
    tableSize: number
) {
    const results: Array<number> = new Array(keyCount)
    const table = new HashTable(hasher, c, d, tableSize)
    results.fill(0)

    for (let i = 0; i < keyCount; i++) {
        const key = nanoid()
        const searchLength = table.add(key)
        results[i] = searchLength
    }

    return results
}
