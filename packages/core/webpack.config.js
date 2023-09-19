'use strict';

const createWebpackConfig = require('@rushstack/heft-web-rig/profiles/library/webpack-base.config.js');

module.exports = function createConfig(env, argv) {
    return createWebpackConfig({
        env: env,
        argv: argv,
        projectRoot: __dirname,

        configOverride: {
            externals: ['tslib'],
            performance: {
                hints: env.production ? 'error' : false
            }
        }
    })
}