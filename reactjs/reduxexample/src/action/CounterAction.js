export const add = "INCREMENT"
export const minus = "DECREMENT"
export const addAction = () => {
    return {
        type: add
    }
}
export const minusAction = () => {
    return {
        type: minus
    }
}