const filtercountSheeps = (arr) => arr.filter(sheep => sheep === true).length

const countSheeps = arr => {
    let sheepCount = arr.reduce((count, sheep) => {
        if (sheep === true) {
            count++
        }
        return count
    },0)
    return sheepCount
}

let test = countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true])

    console.log(test)