import { parse, compileScript } from "@vue/compiler-sfc";
import MagicString from "magic-string";

function supportScriptName(code: string, id: string, optionLang?: "ts" | "js") {
  let s: MagicString;
  const str = () => s || (s = new MagicString(code));
  const { descriptor } = parse(code);
  let name = "block";
  let lang: any = optionLang || "js";
  if (descriptor.scriptSetup) {
    const result = compileScript(descriptor, { id });
    name = (result.attrs["bem-block"] as string | undefined) || "block";
    lang = (result.attrs["lang"] as string | undefined) || optionLang;
  }

  str().appendLeft(
    0,
    `<script ${lang ? `lang="${lang}"` : ""}  ${
      !descriptor.scriptSetup ? "setup" : ""
    }>
import useBem from "vue3-bem";
const bem = useBem("${name}");
<\/script>
`
  );
  return {
    map: str().generateMap(),
    code: str().toString(),
  };
}

const fileRegex = /\.(vue)$/;

function ViteVue3BemPlugin(option?: { lang?: "ts" | "js" }) {
  return {
    name: "vite-plugin-vue3-bem",
    enforce: "pre",
    transform(code: string, id: string) {
      if (fileRegex.test(id)) {
        return supportScriptName.call(this, code, id, option?.lang);
      }
      return null;
    },
  };
}

export default ViteVue3BemPlugin;
