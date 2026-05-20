const a = [20, 30, 40, 50, 60]

let max = a[0]
let min = a[0]
let total = 0


function main() {
    for (let i = 0; i <= a.length; i++) {
        if (a[i] > max) {
            max = a[i]
            if (a[i] < min) {
                min = a[i]
            }
            total += a[i]
        }
    }
    console.log(max)
    console.log(min)
    console.log(total / a.length)
}

main()


