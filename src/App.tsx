import {
    Bar,
    BarChart,
    CartesianGrid,
    Label,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts'
import { useState } from 'react'
import divideHasher from './hashers/DivideHasher'
import Hasher from './hashers/Hasher'
import multiplyHasher from './hashers/MultiplyHasher'
import additionConverter from './stringConverters/AdditionConverter'
import StringConverter from './stringConverters/StringConverter'
import xorConverter from './stringConverters/XorConverter'
import testHasher from './testHasher'

function App() {
    const [hasher, setHasher] = useState<Hasher>(() => divideHasher)
    const [converter, setConverter] = useState<StringConverter>(
        () => additionConverter
    )
    const [keyCount, setKeyCount] = useState(100)
    const [tableSize, setTableSize] = useState(20)
    const [results, setResults] = useState<number[]>(
        testHasher(hasher, converter, keyCount, tableSize)
    )

    const anyKeys = results.filter(v => v > 0)
    const totalCollisions = keyCount - anyKeys.length

    return (
        <div className="App">
            <h3>Метод хеширования</h3>
            <div>
                <input
                    type="radio"
                    radioGroup="hasher"
                    checked={hasher === divideHasher}
                    onChange={e =>
                        e.target.checked && setHasher(() => divideHasher)
                    }
                />
                Хеширование сложением
                <br />
                <input
                    type="radio"
                    radioGroup="hasher"
                    checked={hasher === multiplyHasher}
                    onChange={e =>
                        e.target.checked && setHasher(() => multiplyHasher)
                    }
                />
                Хеширование умножением
            </div>
            <h3>Метод преобразования</h3>
            <div>
                <input
                    type="radio"
                    radioGroup="hasher"
                    checked={converter === additionConverter}
                    onChange={e =>
                        e.target.checked &&
                        setConverter(() => additionConverter)
                    }
                />
                Преобразование сложением
                <br />
                <input
                    type="radio"
                    radioGroup="hasher"
                    checked={converter === xorConverter}
                    onChange={e =>
                        e.target.checked && setConverter(() => xorConverter)
                    }
                />
                Преобразование XOR
            </div>
            <br />
            <input
                type="number"
                min={2}
                value={tableSize}
                max={10000}
                onChange={e =>
                    !isNaN(e.target.valueAsNumber) &&
                    setTableSize(e.target.valueAsNumber)
                }
            />
            Размер таблицы
            <br />
            <input
                type="number"
                min={2}
                value={keyCount}
                max={10000}
                onChange={e =>
                    !isNaN(e.target.valueAsNumber) &&
                    setKeyCount(e.target.valueAsNumber)
                }
            />
            Количество ключей
            <br />
            <button
                onClick={() =>
                    setResults(
                        testHasher(hasher, converter, keyCount, tableSize)
                    )
                }
            >
                Вычислить
            </button>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={results} margin={{ bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis>
                        <Label
                            value="Адрес таблицы"
                            position="bottom"
                            offset={-5}
                        />
                    </XAxis>
                    <YAxis allowDecimals={false} >
                        <Label
                            value="Кол-во коллизий"
                            position="left"
                            angle={270}
                            offset={-30}
                            style={{ textAnchor: 'middle' }}
                        />
                    </YAxis>
                    <Bar dataKey={(v: number) => v || 0} fill="#2B2D42" />
                </BarChart>
            </ResponsiveContainer>
            <br />
            <span>
                Всего коллизий: {totalCollisions}
            </span>
        </div>
    )
}

export default App
