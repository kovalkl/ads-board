module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  endOfLine: 'lf',
  importOrder: [
    '^react(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^[./](?!.*\\.(sass|scss|css)$)',
    '^.*\\.(sass|scss|css)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
