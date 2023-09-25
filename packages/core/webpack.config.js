'use strict';

const createWebpackConfig = require('@rushstack/heft-web-rig/profiles/library/webpack-base.config.js');
const path = require("path");

module.exports = function createConfig(env, argv) {
    console.log(createWebpackConfig({
        env: env,
        argv: argv,
        projectRoot: __dirname,

        configOverride: {
            externals: ['tslib'],
            performance: {
                hints: env.production ? 'error' : false
            }
        }
    }))
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