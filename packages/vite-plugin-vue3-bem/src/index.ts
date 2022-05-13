import { parse, compileScript } from "@vue/compiler-sfc";
import MagicString from "magic-string";

function supportScriptName(code: string, id: string) {
  let s: MagicString;
  const str = () => s || (s = new MagicString(code));
  const { descriptor } = parse(code);
  if (!descriptor.script && descriptor.scriptSetup) {
    const result = compileScript(descriptor, { id });
    const name = result.attrs["bem-block"];
    const lang = result.attrs.lang;
    if (name) {
      str().appendLeft(
        0,
        `<script ${lang ? `lang="${lang}"` : ""}>
import useBem from "vue3-bem";
const bem = useBem("${name}");
<\/script>
`
      );
    }
    return {
      map: str().generateMap(),
      code: str().toString(),
    };
  } else {
    return null;
  }
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
    },
  };
}

export default ViteVue3BemPlugin;
