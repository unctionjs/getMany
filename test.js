/* eslint-disable no-magic-numbers */
import getMany from "./index"

test("getMany with Object", () => {
  expect(
    getMany({
      aaa: "111",
      bbb: "222",
    })
  ).toEqual(
    ["aaa", "bbb"]
  )
})

test("getMany with Map", () => {
  expect(
    getMany(new Map(
      [
        ["aaa", 0],
        ["bbb", 1],
      ]
    ))
  ).toEqual(
    ["aaa", "bbb"]
  )
})

test("getMany with Array", () => {
  expect(
    getMany([
      "aaa",
      "bbb",
    ])
  ).toEqual(
    [0, 1]
  )
})
