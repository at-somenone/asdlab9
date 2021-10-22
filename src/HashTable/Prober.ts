const prober = (initialHash: number, index: number, c: number, d: number) =>
    initialHash + c * index + d * index ** 2

export default prober
