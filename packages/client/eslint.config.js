import { withSvelte } from "@josephcarey/eslint-config";
import svelteParser from "svelte-eslint-parser";
import svelte from "eslint-plugin-svelte";

export default withSvelte(svelteParser, svelte);
