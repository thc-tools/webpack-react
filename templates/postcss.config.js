const configFunc = require("@thc/webpack-react/lib/postcss-config");

module.exports = ({ file, options, env }) => {
    const config = configFunc({ file, options, env });
    // Do what you want here
    return config;
};
