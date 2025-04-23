import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import tailwind from "tailwindcss/eslint-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...tailwind.configs["flat/recommended"],
];

export default eslintConfig;
