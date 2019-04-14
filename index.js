import flip from "@unction/flip";
import append from "@unction/append";
import reduceKeys from "@unction/reducekeys";
export default function getMany (keyedEnumerable) {
  return reduceKeys(flip(append))([])(keyedEnumerable);
}
