import flip from "@unction/flip";
import get from "@unction/get";
import mapValues from "@unction/mapvalues";

export default function getMany (keys) {
  return function getManyKeys (keyedEnumerable) {
    return mapValues(flip(get)(keyedEnumerable))(keys);
  };
}
