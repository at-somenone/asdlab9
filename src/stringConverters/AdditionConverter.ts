import StringConverter from './StringConverter'

const additionConverter: StringConverter = (s: string) => {
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        sum += s.charCodeAt(i)
    }

    return sum
}

export default additionConverter
