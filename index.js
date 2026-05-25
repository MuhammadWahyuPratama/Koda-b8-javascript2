const { main } = require("./function.js")

try {
    const data = [20, 30, 40, 50, 60]
    const resultData = main(data)
    console.log(resultData.max)
    console.log(resultData.min)
    console.log(resultData.average)

} catch (error) {
    console.log(`${error.message}`)
}

