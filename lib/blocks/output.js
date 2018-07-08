module.exports = blockConfig => (processEnv, argv) => config => {
    const defaultConf = {
        filename: `js/[name]_${processEnv.npm_package_version}.bundle.js`,
        chunkFilename: "chunks/[name]_[hash].js",
        path: processEnv.OUTPUT_DIR,
        publicPath: processEnv.OUTPUT_PUBLIC_PATH
    };

    const mergedConf = { ...defaultConf, ...(blockConfig || {}) };

    config.output.filename = mergedConf.filename;
    config.output.path = mergedConf.path;
    config.output.publicPath = mergedConf.publicPath;
    config.output.chunkFilename = mergedConf.chunkFilename;

    return config;
};