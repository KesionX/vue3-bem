import { getClassName } from "./utils";
import "./types/index";

function useBem(block: string) {
  function bem(
    e?: string | null,
    m?: string | string[] | { [key in string]: boolean }
  ) {
    const pascalToKebabCase = (s: string) =>
      s
        .replace(/([A-Z])([A-Z])/g, "$1-$2")
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .toLowerCase();
    const mBlock: string = pascalToKebabCase(block);
    const modifiers: string[] = m
      ? typeof m === "string"
        ? [m]
        : Array.isArray(m)
        ? m
        : Object.keys(m).filter((key) => m[key])
      : [];
    const elementClass = getClassName(mBlock, e);
    const modifiersClasses = modifiers.map((m) => getClassName(mBlock, e, m));
    return [elementClass, ...modifiersClasses];
  }

  return bem;
}

export default useBem;
