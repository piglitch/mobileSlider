/* eslint-disable import/no-extraneous-dependencies */
import someConfig from "eslint-config-airbnb-base";
// eslint-disable-next-line import/no-extraneous-dependencies
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  someConfig,
  {
    rules: {
      indent: "error",
    },
  },
  eslintConfigPrettier, // eslint-config-prettier last
];