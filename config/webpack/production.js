process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

// BEGIN: force minified code (shrinks 6mb to 50k)
const config = environment.toWebpackConfig()
config.mode = 'production';
// END: force minified code (shrinks 6mb to 50k)

module.exports = environment.toWebpackConfig()