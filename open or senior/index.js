const oldopenOrSenior = (data = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]) => {
    let results = data.map(player => (player[0] >= 55 && player[1] > 7) ? "Senior" : "Open")
    console.log(results);
}

const openOrSenior = data => data.map(player => (player[0] >= 55 && player[1] > 7) ? "Senior" : "Open");

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))