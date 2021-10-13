import { customAlphabet } from 'nanoid/non-secure'
import Hasher from './hashers/Hasher'
import StringConverter from './stringConverters/StringConverter'

const nanoid = customAlphabet(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    6
)

export default function testHasher(
    hasher: Hasher,
    converter: StringConverter,
    keyCount: number,
    tableSize: number
) {
    const results: Array<number> = new Array(tableSize)
    results.fill(0)
    for (let i = 0; i < keyCount; i++) {
        const key = nanoid()
        const convertedKey = converter(key)
        const hash = hasher(convertedKey, tableSize)
        results[hash] = (results[hash] || 0) + 1
    }

    return results
}
