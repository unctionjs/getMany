# @unction/getMany

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> KeyedEnumerableType => ArrayType<KeyType>

Takes a keyed enumerable and returns the keys as an Array.

``` javascript
getMany({aaa: "111", bbb: "222"}) // ["aaa", "bbb"]
getMany(["111", "222"]) // [0, 1]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/getMany.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/getMany.svg?maxAge=2592000&style=flat-square
