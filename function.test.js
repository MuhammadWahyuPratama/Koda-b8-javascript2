const { describe, it } = require("node:test")
const assert = require("node:assert/strict")
const { main } = require("./function.js")

describe("index process", () => {
  it("should return max min and average", () => {
    const result = main([20,30,40,50,60])
    assert.equal(result.max, 60)
    assert.equal(result.min, 20)
    assert.equal(result.average, 40)
    })
  it("should update min value", () => {
    const result = main([60,50,40,30,20])
    assert.equal(result.min,20)
    })
  it("should throw error if input is not array", () => {
     assert.throws(() => main(""),{
        message: "parameters must be array"
    })
    })
  it("should throw error if array empty", () => {
     assert.throws(() => main([]),{
        message: "Array tidak boleh kosong"
   })
   })
})