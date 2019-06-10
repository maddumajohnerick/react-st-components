module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react"
  ];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "transform-object-rest-spread",
    "transform-react-jsx",
    [
      "babel-plugin-styled-components",
      { "ssr": true, "displayName": true, "preprocess": false }
    ]
  ];

  return {
    presets,
    plugins
  };
}