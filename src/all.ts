export default function all<T>(promises: Promise<T>[]): Promise<T[]> {
    return new Promise<T[]>((resolve: (value: T[]) => void, reject: (reason: any) => void) => {
        const results: T[] = new Array(promises.length);
        let pending: number = promises.length

        if (pending === 0) {
            resolve(results)
            return
        }

        promises.forEach(async (promise: Promise<T>, index: number) => {
            try {
                const value = await promise
                results[index] = value
            }
            catch (err) {
                reject(err)
                return
            }

            pending -= 1

            if (pending === 0) {
                resolve(results)
            }
        })
    })
}
