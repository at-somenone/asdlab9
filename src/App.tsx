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
import divideHasher from './HashTable/Hasher/DivideHasher'
import Hasher from './HashTable/Hasher/Hasher'
import multiplyHasher from './HashTable/Hasher/MultiplyHasher'
import testProber from './testHasher'

function App() {
    const [hasher, setHasher] = useState<Hasher>(() => divideHasher)

    const [keyCount, setKeyCount] = useState(200)
    const [tableSize, setTableSize] = useState(500)
    const [c, setC] = useState(37)
    const [d, setD] = useState(3)
    const [results, setResults] = useState<number[] | undefined>(undefined)

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
                Хеширование делением
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
            <br />
            <input
                type="number"
                min={2}
                value={c}
                max={10000}
                onChange={e =>
                    !isNaN(e.target.valueAsNumber) &&
                    setC(Math.floor(e.target.valueAsNumber))
                }
            />
            C
            <br />
            <input
                type="number"
                min={2}
                value={d}
                max={10000}
                onChange={e =>
                    !isNaN(e.target.valueAsNumber) &&
                    setD(Math.floor(e.target.valueAsNumber))
                }
            />
            D
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
                    setResults(testProber(hasher, c, d, keyCount, tableSize))
                }
            >
                Вычислить
            </button>
            {results && (
                <>
                    {' '}
                    (
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={results} margin={{ bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis>
                                <Label
                                    value="Номер ключа"
                                    position="bottom"
                                    offset={-5}
                                />
                            </XAxis>
                            <YAxis allowDecimals={false}>
                                <Label
                                    value="Длина поиска"
                                    position="left"
                                    angle={270}
                                    offset={-30}
                                    style={{ textAnchor: 'middle' }}
                                />
                            </YAxis>
                            <Bar
                                dataKey={(v: number) => v || 0}
                                fill="#2B2D42"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                    )
                    <span>
                        Сумма длин: {results.reduce((acc, n) => acc + n)}
                    </span>
                </>
            )}
            <br />
        </div>
    )
}

export default App
