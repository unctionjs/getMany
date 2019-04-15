/* eslint-disable no-magic-numbers, no-undefined */
import {test} from "tap";

import getMany from "./";

test("getMany with Object", ({same, end}) => {
  same(
    getMany(
      ["aaa", "bbb"]
    )({
      aaa: 0,
      bbb: 1,
    }),
    [0, 1]
  );
  end();
});

test("getMany with Object and bad key", ({same, end}) => {
  same(
    getMany(
      ["aaa", "ccc"]
    )({
      aaa: 0,
      bbb: 1,
    }),
    [0, undefined]
  );
  end();
});

test("getMany with Map", ({same, end}) => {
  same(
    getMany(
      ["aaa", "bbb"]
    )(new Map(
      [
        ["aaa", 0],
        ["bbb", 1],
      ]
    )),
    [0, 1]
  );
  end();
});

test("getMany with Map and bad key", ({same, end}) => {
  same(
    getMany(
      ["aaa", "ccc"]
    )(new Map(
      [
        ["aaa", 0],
        ["bbb", 1],
      ]
    )),
    [0, undefined]
  );
  end();
});
