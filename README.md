# @unction/getMany

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<A> => KeyedEnumerableType<B, A> => Array<B>

Takes a list of keys and a keyed enumerable, and returns the values for those keys. If no key exists, the value is undefined.

``` javascript
getMany(["aaa", "bbb"])({aaa: "111", bbb: "222"}) // ["111", "222"]
getMany(["aaa", "ccc"])({aaa: "111", bbb: "222"}) // ["111", undefined]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/getMany.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/getMany.svg?maxAge=2592000&style=flat-square
