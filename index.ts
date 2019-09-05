import flip from "@unction/flip";
import get from "@unction/get";
import mapValues from "@unction/mapvalues";
import {KeyedEnumerableType} from "./types";

export default function getMany<A, B> (keys: Array<A>) {
  return function getManyKeys (keyedEnumerable: KeyedEnumerableType<B, A>): Array<B> {
    return mapValues(flip(get)(keyedEnumerable))(keys);
  };
}
