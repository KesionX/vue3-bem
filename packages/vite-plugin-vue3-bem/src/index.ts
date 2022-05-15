import { parse } from "@vue/compiler-sfc";
import MagicString from "magic-string";

function supportScriptName(code: string, _id: string) {
  let s: MagicString;
  const str = () => s || (s = new MagicString(code));
  const { descriptor } = parse(code, {
    ignoreEmpty: false,
  });
  // 只在script setup写法内作用
  if (descriptor.scriptSetup && descriptor.scriptSetup.setup) {
    const name = descriptor.scriptSetup.attrs?.["bem-block"] || "block";
    const offset = descriptor.scriptSetup.loc.start.offset;
    str().appendLeft(
      offset,
      `
    import useBem from "vue3-bem";
    const bem = useBem("${name}");
    `
    );
  }
  return {
    map: str().generateMap(),
    code: str().toString(),
  };
}

const fileRegex = /\.(vue)$/;

function ViteVue3BemPlugin() {
  return {
    name: "vite-plugin-vue3-bem",
    enforce: "pre",
    transform(code: string, id: string) {
      if (fileRegex.test(id)) {
        return supportScriptName.call(this, code, id);
      }
      return null;
    },
  };
}

export default ViteVue3BemPlugin;