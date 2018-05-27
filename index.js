import flip from "@unction/flip"
import append from "@unction/append"
import reduceKeys from "@unction/reducekeys"

import type {KeyedEnumerableType} from "types"
import type {ArrayType} from "types"

export default function getMany(keyedEnumerable: KeyedEnumerableType): ArrayType<KeyType> {
  return reduceKeys(flip(append))([])(keyedEnumerable)
}
