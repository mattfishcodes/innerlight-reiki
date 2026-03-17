module.exports = {
  '*.{ts,tsx,mjs,js}': (files) => [
    `eslint --fix ${files.join(' ')}`,
    `prettier --write ${files.join(' ')}`,
  ],
  '*': (files) => `prettier --write --ignore-unknown ${files.join(' ')}`,
}
