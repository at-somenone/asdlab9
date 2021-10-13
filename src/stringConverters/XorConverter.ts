import { Chance } from 'chance'
import StringConverter from './StringConverter'

const chance = Chance()
const t = chance.unique(() => chance.integer({ min: 0, max: 255 }), 100)
const xorConverter: StringConverter = (s: string) => {
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        sum += s.charCodeAt(i) ^ t[i % t.length]
    }

    return sum
}

export default xorConverter
