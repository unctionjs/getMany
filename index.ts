import flip from "@unction/flip";
import get from "@unction/get";
import mapValues from "@unction/mapvalues";

export default function getMany<A, B> (keys: Array<A>) {
  return function getManyKeys (keyedEnumerable: Array<B> | Record<string | number | symbol, B> | Map<A, B> | string): Array<B> {
    return mapValues<B, B>(flip(get)(keyedEnumerable))(keys);
  };
}
