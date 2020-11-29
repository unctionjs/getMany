import flip from "@unction/flip";
import get from "@unction/get";
import mapValues from "@unction/mapvalues";

export default function getMany<A, B> (keys: Array<A>) {
  return function getManyKeys (keyedEnumerable: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): Array<B> {
    return mapValues(flip(get)(keyedEnumerable))(keys);
  };
}
