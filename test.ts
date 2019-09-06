/* eslint-disable no-magic-numbers, no-undefined */
import getMany from "./index.ts";

test("getMany with Object", () => {
  expect(getMany(
    ["aaa", "bbb"]
  )({
    aaa: 0,
    bbb: 1,
  })).toEqual([0, 1]);
});

test("getMany with Object and bad key", () => {
  expect(getMany(
    ["aaa", "ccc"]
  )({
    aaa: 0,
    bbb: 1,
  })).toEqual([0, undefined]);
});

test("getMany with Map", () => {
  expect(getMany(
    ["aaa", "bbb"]
  )(new Map(
    [
      ["aaa", 0],
      ["bbb", 1],
    ]
  ))).toEqual([0, 1]);
});

test("getMany with Map and bad key", () => {
  expect(getMany(
    ["aaa", "ccc"]
  )(new Map(
    [
      ["aaa", 0],
      ["bbb", 1],
    ]
  ))).toEqual([0, undefined]);
});
