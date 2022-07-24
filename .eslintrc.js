module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
    withDefaults: true
  },
  extends: [
    // 'plugin:prettier/recommended',
    // unplugin-auto-import/vite 生成，在eslint中声明全局变量
    './.eslintrc-auto-import.json',
    // "eslint:recommended",
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    // eslint-config-prettier 的缩写
    'prettier'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
        // 暂不开启
        // ecmaFeatures: {
        //   jsx: true
        // }
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/max-attributes-per-line': 'off'
      }
    }
  ],
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-prettier的缩写
  plugins: ['vue', '@typescript-eslint', 'import', 'prettier'],
  rules: {}
}
